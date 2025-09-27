# Email Setup Instructions for Children Consultancy

## Current Status ✅

Your Nodemailer-based email system has been successfully implemented and is ready for production use. All components are in place:

- ✅ **API Route**: `/api/send-email` endpoint created
- ✅ **Professional Email Template**: HTML email with Children Consultancy branding
- ✅ **Frontend Integration**: Contact form updated to use new API
- ✅ **Environment Variables**: Configuration files ready

## Final Setup Steps (Required for Production)

### 1. Gmail App Password Setup

To enable email sending, you need to set up a Gmail App Password:

1. **Enable 2-Factor Authentication** on the Gmail account:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to "Security" → "2-Step Verification"
   - Follow the setup process

2. **Generate App Password**:
   - In Google Account Settings, go to "Security"
   - Under "2-Step Verification", click "App passwords"
   - Select "Mail" and generate a password
   - Copy the 16-character password (no spaces)

3. **Update Environment Variables**:
   - Replace `demo-password-placeholder` in `.env.local` with the actual app password
   - For production, add these to your Vercel environment variables:
     ```
     EMAIL_USER=children.consultancy.website@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```

### 2. Production Deployment

When deploying to Vercel:

1. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

2. The email system will automatically work in production

## How It Works

### Email Flow
1. User fills out consultation form on `/contact` page
2. Form data is sent to `/api/send-email` endpoint
3. Nodemailer sends professional HTML email to `kusalpabasararcg@gmail.com`
4. Email appears as sent from "Children Consultancy" with reply-to set to parent's email

### Email Features
- **Professional Branding**: All emails show "Children Consultancy" as sender
- **HTML Template**: Beautiful formatted emails with company styling
- **Reply-To Support**: Client can reply directly to parent's email
- **Comprehensive Details**: All form data included in structured format
- **Urgency Indicators**: Visual indicators for consultation urgency
- **Submission Tracking**: Date/time stamps and source tracking

## Testing the Email System

### Local Testing
Once you add the real Gmail app password:

```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "parentName": "Test Parent",
    "email": "test@example.com",
    "phone": "555-123-4567",
    "childName": "Test Child",
    "childAge": "10",
    "concerns": "Testing the email system",
    "urgency": "routine",
    "preferredContact": "email",
    "previousTherapy": "no"
  }'
```

### Frontend Testing
1. Go to `http://localhost:3000/contact`
2. Fill out the consultation form
3. Submit and check for email delivery

## Email Template Preview

The emails include:
- **Header**: Children Consultancy branding with gradient background
- **Parent Information**: Name, email, phone, preferred contact
- **Child Information**: Name and age
- **Consultation Details**: Concerns, urgency level, insurance, previous therapy
- **Additional Message**: Optional additional information
- **Submission Details**: Date, time, and source tracking
- **Next Steps**: Instructions for the therapist to contact the family

## Troubleshooting

### Common Issues
1. **"Invalid login" errors**: Check app password is correct (16 characters, no spaces)
2. **"Missing required fields" errors**: Ensure all required form fields are filled
3. **500 errors**: Check server logs for detailed error messages

### Production Checklist
- [ ] Gmail app password generated and added to environment variables
- [ ] Environment variables added to Vercel deployment
- [ ] Test email sending after deployment
- [ ] Verify emails are received at `kusalpabasararcg@gmail.com`
- [ ] Test reply-to functionality

## Next Steps

1. **Generate Gmail App Password** following the instructions above
2. **Update `.env.local`** with the real password for local testing
3. **Deploy to Vercel** with environment variables
4. **Test the complete flow** from form submission to email receipt

Your professional email system is now ready for production use! 🚀