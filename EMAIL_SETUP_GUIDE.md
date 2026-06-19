# EmailJS Setup Guide for Contact Form

Follow these steps to set up EmailJS so your contact form actually sends emails to your inbox:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
\`\`\`
Hello Kartik,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
\`\`\`

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**
3. Copy it for use in your code

## Step 5: Install EmailJS Package
Run this command in your project:
\`\`\`bash
npm install @emailjs/browser
\`\`\`

## Step 6: Update Your Code
Replace the placeholder values in `components/contact-form.tsx`:
- `YOUR_PUBLIC_KEY` → Your actual public key
- `YOUR_SERVICE_ID` → Your service ID
- `YOUR_TEMPLATE_ID` → Your template ID

## Step 7: Test Your Form
1. Fill out your contact form
2. Check your email inbox
3. You should receive the message!

## Security Note
The public key is safe to use in frontend code. EmailJS handles the security on their end.

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio contact form
\`\`\`

Let's also add the package.json dependency:
