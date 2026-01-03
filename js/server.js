const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Function to save email submission to JSON file
async function saveToJSONFile(submissionData) {
  try {
    const jsonFilePath = path.join(__dirname, '..', 'email-submissions.json');
    
    // Read existing data
    let submissions = [];
    try {
      const fileContent = await fs.readFile(jsonFilePath, 'utf8');
      submissions = JSON.parse(fileContent);
    } catch (err) {
      // File doesn't exist or is empty, start with empty array
      if (err.code !== 'ENOENT') {
        console.error('Error reading JSON file:', err);
      }
    }

    // Add new submission with timestamp
    const newSubmission = {
      id: submissions.length > 0 ? Math.max(...submissions.map(s => s.id || 0)) + 1 : 1,
      email: submissionData.email,
      submission_type: submissionData.submission_type,
      additional_notes: submissionData.additional_notes,
      user_agent: submissionData.user_agent,
      referrer: submissionData.referrer,
      ip_address: submissionData.ip_address,
      submitted_at: new Date().toISOString()
    };

    // Add to array
    submissions.push(newSubmission);

    // Write back to file
    await fs.writeFile(jsonFilePath, JSON.stringify(submissions, null, 2), 'utf8');
    console.log(`Email submission saved to JSON file: ${submissionData.email} (${submissionData.submission_type})`);
    
    return { success: true, id: newSubmission.id };
  } catch (error) {
    console.error('Error saving to JSON file:', error);
    return { success: false, error: error.message };
  }
}

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Email submission endpoint
app.post('/api/email-submissions', async (req, res) => {
  try {
    const { email, submission_type, additional_notes } = req.body;

    // Validate required fields
    if (!email || !submission_type) {
      return res.status(400).json({
        success: false,
        error: 'Email and submission_type are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Validate submission type
    const validTypes = ['stay_connected', 'contact_request', 'support_request'];
    if (!validTypes.includes(submission_type)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid submission type'
      });
    }

    // Get client IP address
    const ipAddress = req.ip || req.connection.remoteAddress ||
                     (req.socket && req.socket.remoteAddress) ||
                     (req.connection.socket && req.connection.socket.remoteAddress) || null;

    // Prepare data for insertion
    const submissionData = {
      email: email.trim().toLowerCase(),
      submission_type: submission_type,
      additional_notes: additional_notes || null,
      user_agent: req.get('User-Agent') || null,
      referrer: req.get('Referer') || null,
      ip_address: ipAddress
    };

    // Save to JSON file
    const jsonResult = await saveToJSONFile(submissionData);
    if (!jsonResult.success) {
      return res.status(500).json({
        success: false,
        error: 'Failed to save email submission to JSON file'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Email submission saved successfully',
      id: jsonResult.id
    });

  } catch (error) {
    console.error('Error saving email submission:', error);

    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get email submissions from JSON file (for admin purposes)
app.get('/api/email-submissions', async (req, res) => {
  try {
    const jsonFilePath = path.join(__dirname, '..', 'email-submissions.json');
    
    let submissions = [];
    try {
      const fileContent = await fs.readFile(jsonFilePath, 'utf8');
      submissions = JSON.parse(fileContent);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error('Error reading JSON file:', err);
        return res.status(500).json({
          success: false,
          error: 'Error reading email submissions file'
        });
      }
    }

    // Sort by submitted_at descending
    submissions.sort((a, b) => {
      const dateA = new Date(a.submitted_at);
      const dateB = new Date(b.submitted_at);
      return dateB - dateA;
    });

    res.json({
      success: true,
      data: submissions
    });
  } catch (error) {
    console.error('Error fetching email submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
    console.log(`Email submissions will be saved to: email-submissions.json`);
  });
}

try {
  startServer();
} catch (error) {
  console.error('Failed to start server:', error);
  process.exit(1);
}
