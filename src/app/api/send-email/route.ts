import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      parentName,
      email,
      phone,
      childName,
      childAge,
      concerns,
      urgency,
      preferredContact,
      insurance,
      previousTherapy,
      message
    } = body;

    // Validate required fields
    if (!parentName || !email || !phone || !childName || !childAge || !concerns) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail configuration
    // In production, these will come from environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'children.consultancy.website@gmail.com',
        pass: process.env.EMAIL_PASS || '' // This will need to be set in environment
      }
    });

    // Create professional HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .section { background: white; margin: 15px 0; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .section h3 { color: #3B82F6; margin-top: 0; border-bottom: 2px solid #E5E7EB; padding-bottom: 8px; }
          .field { margin: 8px 0; }
          .field strong { color: #374151; }
          .urgency { padding: 5px 10px; border-radius: 4px; font-weight: bold; }
          .urgency.routine { background: #D1FAE5; color: #065F46; }
          .urgency.soon { background: #FEF3C7; color: #92400E; }
          .urgency.urgent { background: #FEE2E2; color: #991B1B; }
          .footer { text-align: center; padding: 20px; background: #374151; color: white; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">🧠 Children Consultancy</div>
          <h2>New Consultation Request</h2>
          <p>Professional Mental Health Services for Children & Families</p>
        </div>

        <div class="content">
          <div class="section">
            <h3>👤 Parent/Guardian Information</h3>
            <div class="field"><strong>Name:</strong> ${parentName}</div>
            <div class="field"><strong>Email:</strong> ${email}</div>
            <div class="field"><strong>Phone:</strong> ${phone}</div>
            <div class="field"><strong>Preferred Contact:</strong> ${preferredContact}</div>
          </div>

          <div class="section">
            <h3>👶 Child Information</h3>
            <div class="field"><strong>Child's Name:</strong> ${childName}</div>
            <div class="field"><strong>Age:</strong> ${childAge} years old</div>
          </div>

          <div class="section">
            <h3>🔍 Consultation Details</h3>
            <div class="field"><strong>Primary Concerns:</strong></div>
            <div style="background: #F3F4F6; padding: 10px; border-radius: 4px; margin: 5px 0;">${concerns}</div>
            <div class="field"><strong>Urgency Level:</strong> <span class="urgency ${urgency}">${urgency.toUpperCase()}</span></div>
            <div class="field"><strong>Previous Therapy:</strong> ${previousTherapy}</div>
            <div class="field"><strong>Insurance Provider:</strong> ${insurance || 'Not specified'}</div>
          </div>

          ${message ? `
          <div class="section">
            <h3>💭 Additional Message</h3>
            <div style="background: #F3F4F6; padding: 10px; border-radius: 4px;">${message}</div>
          </div>
          ` : ''}

          <div class="section">
            <h3>📅 Submission Details</h3>
            <div class="field"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
            <div class="field"><strong>Time:</strong> ${new Date().toLocaleTimeString()}</div>
            <div class="field"><strong>Source:</strong> Children Consultancy Website Contact Form</div>
          </div>

          <div class="section" style="background: #EFF6FF; border-left: 4px solid #3B82F6;">
            <h3>📞 Next Steps</h3>
            <p><strong>Please contact the family within 24 hours to schedule their consultation.</strong></p>
            <p>Reply directly to this email to contact ${parentName} at ${email}</p>
          </div>
        </div>

        <div class="footer">
          <div class="logo">Children Consultancy</div>
          <p>Professional Mental Health Support for Young Minds</p>
          <p>This consultation request was submitted through the official website</p>
        </div>
      </body>
      </html>
    `;

    // Email configuration
    const mailOptions = {
      from: `"Children Consultancy" <${process.env.EMAIL_USER || 'children.consultancy.website@gmail.com'}>`,
      to: 'kusalpabasararcg@gmail.com',
      replyTo: email,
      subject: `🧠 New Consultation Request from ${parentName} - Children Consultancy`,
      html: htmlContent,
      text: `
New Consultation Request - Children Consultancy

Parent/Guardian: ${parentName}
Email: ${email}
Phone: ${phone}
Preferred Contact: ${preferredContact}

Child: ${childName}, ${childAge} years old

Primary Concerns: ${concerns}
Urgency: ${urgency.toUpperCase()}
Previous Therapy: ${previousTherapy}
Insurance: ${insurance || 'Not specified'}

${message ? `Additional Message: ${message}` : ''}

Submitted: ${new Date().toLocaleString()}
Source: Children Consultancy Website

Please contact the family within 24 hours.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully to kusalpabasararcg@gmail.com');

    return NextResponse.json({
      success: true,
      message: 'Consultation request sent successfully!'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send consultation request. Please try again or call us directly.'
      },
      { status: 500 }
    );
  }
}