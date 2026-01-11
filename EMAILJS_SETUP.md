# EmailJS Setup Guide

This guide will help you set up EmailJS so your contact form can send emails directly to **abaalcoding@gmail.com** when visitors fill out the form.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Create an account using your email (or Google/GitHub login)

## Step 2: Add Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (since you're using Gmail)
4. Click **Connect Account** and authorize EmailJS to send emails from your Gmail account
5. Give it a name (e.g., "Portfolio Contact Form")
6. **Save** the service - you'll get a **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Choose your service (the one you just created)
4. Configure the template:

   **Template Name:** Portfolio Contact Form
   
   **To Email:** `abaalcoding@gmail.com`
   
   **Subject:** `Contact from Portfolio: {{from_name}}`
   
   **Content:** Use this template:
   ```
   You have received a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Reply to this email to respond to {{from_email}}
   ```

5. **Save** the template - you'll get a **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find **Public Key** - copy this key (e.g., `abc123xyz789`)

## Step 5: Configure Your Portfolio

You have two options:

### Option A: Using Environment Variables (Recommended for Production)

1. Create a file named `.env` in your project root (same level as `package.json`)
2. Add these lines (replace with your actual values):
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abc123xyz789
   ```

3. **Important:** Add `.env` to your `.gitignore` file to keep your keys private

4. Restart your development server:
   ```bash
   npm run dev
   ```

### Option B: Direct Configuration (Quick Testing)

1. Open `src/components/Contact.jsx`
2. Find these lines (around line 13-15):
   ```javascript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
   ```

3. Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_PUBLIC_KEY'` with your actual values:
   ```javascript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_abc123'
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xyz789'
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'abc123xyz789'
   ```

**⚠️ Note:** Option B is fine for testing, but for production/deployment, use Option A with environment variables.

## Step 6: Test Your Contact Form

1. Start your development server: `npm run dev`
2. Go to the Contact section of your portfolio
3. Fill out the form:
   - Name: Your name
   - Email: Your email
   - Message: Test message
4. Click "Send Message"
5. Check your inbox at **abaalcoding@gmail.com** - you should receive the email!

## Step 7: Deploy with Environment Variables

When deploying to Vercel, Netlify, or other platforms:

### For Vercel:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key
4. Redeploy your site

### For Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Add the same environment variables as above
3. Redeploy your site

## Troubleshooting

### Emails not sending?
- Check that all three IDs are correct in your `.env` file
- Verify your EmailJS service is connected and active
- Check the browser console for any error messages
- Make sure you're using the correct template variables in your EmailJS template

### "Invalid template" error?
- Make sure your template ID is correct
- Verify the template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

### "Invalid service" error?
- Check that your Service ID is correct
- Verify your email service is connected in EmailJS dashboard

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- This should be more than enough for a portfolio website

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in the dashboard

---

**Once set up, all form submissions will be sent directly to abaalcoding@gmail.com! 🎉**

