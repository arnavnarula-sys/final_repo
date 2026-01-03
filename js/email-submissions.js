// Email submission handler for supportus.html - Using localStorage only

const STORAGE_KEY = 'email_submissions';

/**
 * Get all email submissions from localStorage
 * @returns {Array} Array of email submissions
 */
function getEmailSubmissions() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
}

/**
 * Save email submissions to localStorage
 * @param {Array} submissions - Array of email submissions
 */
function saveEmailSubmissions(submissions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

/**
 * Save email submission to localStorage
 * @param {string} email - User's email address
 * @param {string} submissionType - Type of submission: 'stay_connected', 'contact_request', or 'support_request'
 * @param {string} [additionalNotes] - Optional additional notes from the user
 * @returns {{success: boolean, error?: string}}
 */
export function saveEmailSubmission(email, submissionType, additionalNotes = null) {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Invalid email format'
      };
    }

    // Validate submission type
    const validTypes = ['stay_connected', 'contact_request', 'support_request'];
    if (!validTypes.includes(submissionType)) {
      return {
        success: false,
        error: 'Invalid submission type'
      };
    }

    // Get existing submissions
    const submissions = getEmailSubmissions();

    // Create new submission
    const newSubmission = {
      id: submissions.length > 0 ? Math.max(...submissions.map(s => s.id || 0)) + 1 : 1,
      email: email.trim().toLowerCase(),
      submission_type: submissionType,
      additional_notes: additionalNotes || null,
      submitted_at: new Date().toISOString()
    };

    // Add to array
    submissions.push(newSubmission);

    // Save to localStorage
    const saved = saveEmailSubmissions(submissions);
    
    if (!saved) {
      return {
        success: false,
        error: 'Failed to save email submission to localStorage'
      };
    }

    console.log(`Email submission saved to localStorage: ${email} (${submissionType})`);
    return { success: true, id: newSubmission.id };
  } catch (error) {
    console.error('Error saving email submission:', error);
    return {
      success: false,
      error: error.message || 'An unexpected error occurred'
    };
  }
}

/**
 * Get all email submissions (for admin/debugging purposes)
 * @returns {Array} Array of all email submissions
 */
export function getAllEmailSubmissions() {
  return getEmailSubmissions();
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

  form.addEventListener("submit", (event) => {
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

    // Save to localStorage (synchronous operation)
    const result = saveEmailSubmission(email, submissionType, additionalNotes);

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
