# Email Configuration Setup

To enable the contact form to send emails, you need to set up SMTP credentials.

## Steps:

### 1. Create `.env.local` file

Create a file named `.env.local` in the `Celestia-GT` directory with the following content:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### 2. GoDaddy Email Setup (For celestiagt.com domain)

If your email is hosted on GoDaddy:

**SMTP Settings:**

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=harsh.jaiswal@celestiagt.com
SMTP_PASSWORD=your-email-password
```

**Alternative port (if 465 doesn't work):**

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=harsh.jaiswal@celestiagt.com
SMTP_PASSWORD=your-email-password
```

**How to get your credentials:**

1. **Find your password:**

   - Log in to GoDaddy: https://www.godaddy.com/
   - Go to "Email & Office" in your account
   - Click on your workspace/email product
   - You can either use your existing email password or reset it

2. **Reset password if needed:**

   - In GoDaddy Email & Office dashboard
   - Find your email account (harsh.jaiswal@celestiagt.com)
   - Click "Settings" or "Manage"
   - Click "Reset Password"
   - Create a new strong password

3. **Use these credentials in `.env.local`:**
   - Your email address: harsh.jaiswal@celestiagt.com
   - Your email password (the one you use to login to webmail)

**Note:** GoDaddy may require SSL/TLS. If port 587 doesn't work, try port 465.

### 3. Gmail Setup

If using Gmail:

1. Go to your Google Account: https://myaccount.google.com/
2. Select "Security"
3. Enable 2-Step Verification (if not already enabled)
4. Go to "App passwords": https://myaccount.google.com/apppasswords
5. Select app: "Mail"
6. Select device: "Other" and enter "Celestia GT Website"
7. Click "Generate"
8. Copy the 16-character password
9. Use this password in your `.env.local` file as `SMTP_PASSWORD`

### 4. Alternative SMTP Providers

You can also use other SMTP providers:

#### SendGrid

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

#### Mailgun

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

#### AWS SES

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-access-key
SMTP_PASSWORD=your-ses-secret-key
```

### 5. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and submit
4. Check the email inbox at harsh.jaiswal@celestiagt.com

## Security Notes

- **Never** commit the `.env.local` file to version control
- The `.env.local` file should already be in `.gitignore`
- Keep your SMTP credentials secure
- Use app-specific passwords when available
- For production, consider using environment variables through your hosting provider

## File Upload Handling

The system is configured to handle file uploads up to **20 MB** (GoDaddy SMTP limit):

- Maximum file size: 20 MB
- Supported formats: PDF, DWG, STEP, STP, DXF
- Timeout: 60 seconds for large files
- Automatic validation on both frontend and backend

**Important:** GoDaddy SMTP has a 20MB attachment limit. Files larger than 20MB will be rejected with a helpful error message directing users to email directly.

**For files larger than 20MB**, consider these alternatives:

1. Use a file storage service (AWS S3, Google Drive, Dropbox) and send links instead
2. Compress files before uploading
3. Direct users to email large files directly to harsh.jaiswal@celestiagt.com
4. Implement a dedicated file upload service like WeTransfer API

## Troubleshooting

If emails are not sending:

1. Check that all environment variables are set correctly
2. Verify your SMTP credentials are valid
3. Check the console logs for error messages
4. Ensure your email provider allows SMTP access
5. Check if your hosting provider blocks SMTP ports (use port 465 if 587 is blocked)
6. For files larger than 20MB, GoDaddy SMTP will reject them - users should email files directly instead
