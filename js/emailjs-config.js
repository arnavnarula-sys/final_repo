// EmailJS Configuration
// IMPORTANT: Replace these values with your EmailJS credentials
// Get them from: https://dashboard.emailjs.com/admin

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account > API Keys)
  PUBLIC_KEY: 'E76PHNvN1WoMmjmdP',
  
  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: 'service_676iytp',
  
  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: 'template_zlokbua',
  
  // Auto-Reply Template ID (optional - for sending auto-reply to users)
  AUTO_REPLY_TEMPLATE_ID: 'YOUR_AUTO_REPLY_TEMPLATE_ID_HERE', // Optional
};

// Instructions:
// 1. Sign up at https://www.emailjs.com/ (free tier available)
// 2. Add an email service (Gmail, Outlook, etc.) in Email Services
// 3. Create an email template in Email Templates
// 4. Use these variables in your template:
//    - {{email}} - User's email address
//    - {{submission_type}} - Type: stay_connected, contact_request, or support_request
//    - {{additional_notes}} - Additional notes from user (if provided)
//    - {{submitted_at}} - Timestamp of submission
// 5. Copy your Public Key from Account > API Keys
// 6. Copy your Service ID from Email Services
// 7. Copy your Template ID from Email Templates
// 8. Replace the values above with your actual credentials

