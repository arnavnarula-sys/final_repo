// Email submission handler for supportus.html

// Backend API configuration
const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Check if the backend server is available
 * @returns {Promise<boolean>}
 */
async function checkServerHealth() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
    
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (err) {
    return false;
  }
}

/**
 * Save email submission to SQL Database via backend API
 * @param {string} email - User's email address
 * @param {string} submissionType - Type of submission: 'stay_connected', 'contact_request', or 'support_request'
 * @param {string} [additionalNotes] - Optional additional notes from the user
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function saveEmailSubmission(email, submissionType, additionalNotes = null) {
  try {
    // First check if server is available
    const serverAvailable = await checkServerHealth();
    if (!serverAvailable) {
      return { 
        success: false, 
        error: 'Backend server is not running. Please start the server by running "npm start" in your project directory. See START_SERVER.md for instructions.' 
      };
    }

    const submissionData = {
      email: email.trim().toLowerCase(),
      submission_type: submissionType,
      additional_notes: additionalNotes || null,
    };

    const response = await fetch(`${API_BASE_URL}/email-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    let result;
    
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      // If not JSON, read as text for debugging
      const text = await response.text();
      console.error("Non-JSON response:", text);
      return { 
        success: false, 
        error: `Server error: ${response.status} ${response.statusText}. Please check the server logs.` 
      };
    }

    if (!response.ok) {
      console.error("Error saving email submission:", result.error);
      return { success: false, error: result.error || 'Failed to save email submission' };
    }

    return { success: true };
  } catch (err) {
    console.error("Exception saving email submission:", err);
    
    // Provide more specific error messages
    if (err.name === 'AbortError' || err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      return { 
        success: false, 
        error: 'Cannot connect to server. Please ensure the backend server is running on http://localhost:3001. See START_SERVER.md for setup instructions.' 
      };
    }
    
    return { success: false, error: err.message || 'An unexpected error occurred' };
  }
}

/**
 * Handle form submission and save email
 * @param {HTMLFormElement} form - The form element
 * @param {string} submissionType - Type of submission
 * @param {Function} [onSuccess] - Optional callback on success
 * @param {Function} [onError] - Optional callback on error
 * @param {Function} [onBeforeSubmit] - Optional callback before submission (e.g., to reveal UI elements)
 */
export function setupEmailForm(form, submissionType, onSuccess, onError, onBeforeSubmit) {
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) {
      console.error("No email input found in form");
      return;
    }

    const email = emailInput.value.trim();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Call before-submit callback (e.g., to reveal extra contact box)
    if (onBeforeSubmit) {
      onBeforeSubmit();
    }

    // Get additional notes if available (from textarea in support-extra-box)
    const notesTextarea = document.querySelector("#support-extra-box textarea");
    const additionalNotes = notesTextarea?.value.trim() || null;

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton?.textContent;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Saving...";
    }

    // Save to database
    const result = await saveEmailSubmission(email, submissionType, additionalNotes);

    // Restore button state
    if (submitButton) {
      submitButton.disabled = false;
      if (originalText) submitButton.textContent = originalText;
    }

    if (result.success) {
      // Show success message
      if (onSuccess) {
        onSuccess(email);
      } else {
        alert(`Thank you! We've saved your email (${email}) and will be in touch soon.`);
      }
      // Clear form
      emailInput.value = "";
      if (notesTextarea) notesTextarea.value = "";
    } else {
      // Show error message
      if (onError) {
        onError(result.error);
      } else {
        alert(`Sorry, there was an error saving your email. Please try again later.`);
        console.error("Submission error:", result.error);
      }
    }
  });
}

