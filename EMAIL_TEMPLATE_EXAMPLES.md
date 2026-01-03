# Email Template Examples for EmailJS

## Template 1: Admin Notification Email (TEMPLATE_ID)

**Purpose:** Email sent to you when a user submits a form

**Subject:**
```
New {{submission_type_label}} - Living Heritage Walks
```

**Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f1a44a; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Email Submission</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>You have received a new email submission from your website:</p>
      
      <div class="field">
        <span class="label">Email:</span>
        <span class="value">{{email}}</span>
      </div>
      
      <div class="field">
        <span class="label">Type:</span>
        <span class="value">{{submission_type_label}}</span>
      </div>
      
      <div class="field">
        <span class="label">Additional Notes:</span>
        <span class="value">{{additional_notes}}</span>
      </div>
      
      <div class="field">
        <span class="label">Submitted At:</span>
        <span class="value">{{submitted_at}}</span>
      </div>
      
      <p style="margin-top: 20px;">Best regards,<br>EmailJS</p>
    </div>
  </div>
</body>
</html>
```

**Body (Plain Text):**
```
Hello,

You have received a new email submission from your website:

Email: {{email}}
Type: {{submission_type_label}}
Additional Notes: {{additional_notes}}
Submitted At: {{submitted_at}}

Best regards,
Living Heritage Walks
```

---

## Template 2: Auto-Reply to User (AUTO_REPLY_TEMPLATE_ID)

**Purpose:** Confirmation email sent to the user after they submit

**Subject:**
```
Thank you for contacting Living Heritage Walks
```

**Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #f1a44a; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You!</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>Thank you for your {{submission_type_label}}. We have received your message and will get back to you soon.</p>
      <p>We appreciate your interest in supporting artisans and preserving living heritage.</p>
      <p style="margin-top: 20px;">Best regards,<br>Living Heritage Walks Team</p>
    </div>
  </div>
</body>
</html>
```

**Body (Plain Text):**
```
Hello,

Thank you for your {{submission_type_label}}. We have received your message and will get back to you soon.

We appreciate your interest in supporting artisans and preserving living heritage.

Best regards,
Living Heritage Walks Team
```

---

## How to Use These Templates

1. **Go to EmailJS Dashboard** → Email Templates
2. **Create New Template** for Admin Notification
3. **Copy the HTML or Plain Text** from Template 1 above
4. **Paste it** into your EmailJS template
5. **Set the "To Email"** to your email address (where you want to receive notifications)
6. **Save and copy the Template ID** → Add it to `js/emailjs-config.js` as `TEMPLATE_ID`

7. **Create another template** for Auto-Reply (optional)
8. **Copy the HTML or Plain Text** from Template 2 above
9. **Paste it** into your EmailJS template
10. **Set the "To Email"** to `{{to_email}}` (this will use the user's email)
11. **Save and copy the Template ID** → Add it to `js/emailjs-config.js` as `AUTO_REPLY_TEMPLATE_ID`

---

## Available Variables

### For Admin Template (TEMPLATE_ID):
- `{{email}}` - User's email address
- `{{submission_type}}` - stay_connected, contact_request, or support_request
- `{{submission_type_label}}` - Stay Connected, Contact Request, or Support Request
- `{{additional_notes}}` - Additional notes from user (or "None")
- `{{submitted_at}}` - Timestamp of submission

### For Auto-Reply Template (AUTO_REPLY_TEMPLATE_ID):
- `{{to_email}}` - User's email address
- `{{submission_type}}` - stay_connected, contact_request, or support_request
- `{{submission_type_label}}` - Stay Connected, Contact Request, or Support Request

