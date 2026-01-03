# Fix Gmail API Authentication Error

## Error: "Gmail_API: Request had insufficient authentication scopes"

This error occurs when your Gmail service in EmailJS doesn't have the proper permissions (scopes) to send emails.

## Solution: Reconnect Gmail Service with Proper Scopes

### Step 1: Go to EmailJS Dashboard

1. Open [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Log in to your account
3. Go to **Email Services**

### Step 2: Edit Your Gmail Service

1. Find your Gmail service (should be `service_676iytp` based on your config)
2. Click on it or click the **Edit** button
3. You'll see the service configuration

### Step 3: Reconnect Gmail Account

1. Look for a button that says:
   - **"Reconnect"**
   - **"Re-authorize"**
   - **"Update Permissions"**
   - Or similar

2. Click it to reconnect your Gmail account

### Step 4: Grant Required Permissions

When you reconnect, Google will ask for permissions. Make sure to:

1. **Grant all requested permissions** - Don't skip any
2. **Allow access to "Send email on your behalf"** - This is crucial
3. **Check the box for "See, edit, compose, and send emails"** if shown
4. Click **"Allow"** or **"Continue"**

### Step 5: Verify Service Status

1. After reconnecting, check that your service shows as **"Connected"** or **"Active"**
2. The status should be green/active

### Step 6: Test Again

1. Go back to your test page (`test-email.html`)
2. Try sending the test email again
3. The error should be resolved

---

## Alternative Solution: Use App Password (More Secure)

If reconnecting doesn't work, you can use Gmail App Password instead:

### Step 1: Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **"Mail"** as the app
3. Select **"Other (Custom name)"** as the device
4. Enter name: "EmailJS"
5. Click **"Generate"**
6. **Copy the 16-character password** (you'll need this)

### Step 3: Update EmailJS Service

1. Go back to EmailJS Dashboard → Email Services
2. Edit your Gmail service
3. Instead of OAuth, choose **"SMTP"** or **"App Password"** option
4. Enter:
   - **Email:** your Gmail address
   - **Password:** the 16-character app password you generated
5. Save the service

### Step 4: Test Again

1. Test the email sending again
2. This method is more reliable and doesn't require OAuth scopes

---

## Quick Checklist

- [ ] Gmail service is connected/active in EmailJS
- [ ] All permissions were granted when reconnecting
- [ ] Service status shows as "Connected" or "Active"
- [ ] Test email is sent from the correct Gmail account
- [ ] No error messages in EmailJS dashboard

---

## Still Having Issues?

If the error persists:

1. **Check EmailJS Dashboard → Email Services → Your Service**
   - Look for any error messages or warnings
   - Check the service status

2. **Try Creating a New Service**
   - Delete the old Gmail service
   - Create a new one from scratch
   - Reconnect with proper permissions

3. **Check Gmail Account Settings**
   - Make sure "Less secure app access" is enabled (if using older method)
   - Or use App Password method (recommended)

4. **Contact EmailJS Support**
   - If nothing works, contact EmailJS support
   - They can help troubleshoot service-specific issues

---

## Recommended: Use App Password Method

The App Password method is more reliable and secure than OAuth for EmailJS. It's the recommended approach for Gmail integration.

