// EmailJS Mailer - Sends emails using EmailJS service
// Documentation: https://www.emailjs.com/docs/

import { EMAILJS_CONFIG } from './emailjs-config.js';

/**
 * Initialize EmailJS (must be called before sending emails)
 * @returns {Promise<boolean>} True if initialized successfully
 */
export async function initEmailJS() {
  try {
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS SDK not loaded. Make sure to include the EmailJS script in your HTML.');
      return false;
    }

    // Initialize EmailJS with Public Key
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
      return true;
    } else {
      console.warn('EmailJS Public Key not configured. Please set it in js/emailjs-config.js');
      return false;
    }
  } catch (error) {
    console.error('Error initializing EmailJS:', error);
    return false;
  }
}

/**
 * Send email using EmailJS
 * @param {string} email - User's email address
 * @param {string} submissionType - Type of submission
 * @param {string} [additionalNotes] - Optional additional notes
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendEmail(email, submissionType, additionalNotes = null) {
  try {
    // Check if EmailJS is initialized
    if (typeof emailjs === 'undefined') {
      return {
        success: false,
        error: 'EmailJS SDK not loaded'
      };
    }

    // Validate configuration
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE') {
      return {
        success: false,
        error: 'EmailJS not configured. Please set your credentials in js/emailjs-config.js'
      };
    }

    // Prepare template parameters
    const templateParams = {
      email: email,
      submission_type: submissionType,
      additional_notes: additionalNotes || 'None',
      submitted_at: new Date().toLocaleString(),
      // Submission type labels for better readability in email
      submission_type_label: getSubmissionTypeLabel(submissionType)
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, messageId: response.text };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.text || error.message || 'Failed to send email'
    };
  }
}

/**
 * Send auto-reply email to user (optional)
 * @param {string} userEmail - User's email address
 * @param {string} submissionType - Type of submission
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function sendAutoReply(userEmail, submissionType) {
  try {
    // Check if auto-reply template is configured
    if (!EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID || 
        EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID === 'YOUR_AUTO_REPLY_TEMPLATE_ID_HERE') {
      // Auto-reply not configured, skip silently
      return { success: true, skipped: true };
    }

    // Check if EmailJS is initialized
    if (typeof emailjs === 'undefined') {
      return { success: false, error: 'EmailJS SDK not loaded' };
    }

    // Prepare auto-reply template parameters
    const templateParams = {
      to_email: userEmail,
      submission_type: submissionType,
      submission_type_label: getSubmissionTypeLabel(submissionType)
    };

    // Send auto-reply
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
      templateParams
    );

    console.log('Auto-reply sent successfully:', response);
    return { success: true, messageId: response.text };

  } catch (error) {
    console.error('Error sending auto-reply:', error);
    // Don't fail the main submission if auto-reply fails
    return { success: false, error: error.text || error.message };
  }
}

/**
 * Get human-readable label for submission type
 * @param {string} submissionType - Submission type
 * @returns {string} Human-readable label
 */
function getSubmissionTypeLabel(submissionType) {
  const labels = {
    'stay_connected': 'Stay Connected',
    'contact_request': 'Contact Request',
    'support_request': 'Support Request'
  };
  return labels[submissionType] || submissionType;
}

