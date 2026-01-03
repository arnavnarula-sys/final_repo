# EmailJS Setup Instructions

This guide will help you configure EmailJS to send emails from your contact forms.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account
3. The free tier includes 200 emails per month

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy your Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:

### Template Variables Available:
- `{{email}}` - User's email address
- `{{submission_type}}` - Type: stay_connected, contact_request, or support_request
- `{{submission_type_label}}` - Human-readable label (Stay Connected, Contact Request, Support Request)
- `{{additional_notes}}` - Additional notes from user (or "None" if not provided)
- `{{submitted_at}}` - Timestamp of submission

### Example Template:
```
Subject: New {{submission_type_label}} - Living Heritage Walks

Hello,

You have received a new email submission:

Email: {{email}}
Type: {{submission_type_label}}
Additional Notes: {{additional_notes}}
Submitted At: {{submitted_at}}

Thank you!
```

4. **Copy your Template ID** (you'll need this later)

## Step 4: (Optional) Create Auto-Reply Template

1. Create another template for auto-reply emails to users
2. Use these variables:
   - `{{to_email}}` - User's email address
   - `{{submission_type}}` - Submission type
   - `{{submission_type_label}}` - Human-readable label

### Example Auto-Reply Template:
```
Subject: Thank you for contacting Living Heritage Walks

Hello,

Thank you for your {{submission_type_label}}. We have received your message and will get back to you soon.

Best regards,
Living Heritage Walks Team
```

3. **Copy your Auto-Reply Template ID** (optional)

## Step 5: Get Your Public Key

1. Go to **Account** > **General**
2. Find **API Keys** section
3. **Copy your Public Key** (you'll need this later)

## Step 6: Configure Your Project

1. Open `js/emailjs-config.js` in your project
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',           // ← Paste your Public Key here
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',           // ← Paste your Service ID here
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',        // ← Paste your Template ID here
  AUTO_REPLY_TEMPLATE_ID: 'YOUR_AUTO_REPLY_TEMPLATE_ID_HERE', // ← Paste Auto-Reply Template ID (optional)
};
```

### Example:
```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'abc123xyz789',
  SERVICE_ID: 'service_gmail123',
  TEMPLATE_ID: 'template_abc123',
  AUTO_REPLY_TEMPLATE_ID: 'template_reply123', // Optional
};
```

## Step 7: Test Your Setup

1. Open `supportus.html` in your browser
2. Fill out one of the email forms
3. Submit the form
4. Check:
   - Your email inbox (you should receive the notification email)
   - Browser console (check for any errors)
   - localStorage (emails are also saved locally)

## Troubleshooting

### Emails not sending?
1. Check browser console for errors
2. Verify all credentials in `js/emailjs-config.js` are correct
3. Make sure EmailJS SDK is loaded (check Network tab in browser)
4. Verify your email service is connected in EmailJS dashboard

### "EmailJS SDK not loaded" error?
- Make sure the EmailJS script is included in `supportus.html`
- Check your internet connection
- Verify the CDN link is correct

### "EmailJS not configured" error?
- Make sure you've replaced all placeholder values in `js/emailjs-config.js`
- Double-check that you copied the correct IDs and keys

## Files Modified

- `js/emailjs-config.js` - Configuration file (where you add your API keys)
- `js/mailer.js` - Email sending functionality
- `js/email-submissions.js` - Updated to use EmailJS
- `supportus.html` - Added EmailJS SDK script

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Tutorial](https://www.emailjs.com/docs/tutorial/overview/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)

