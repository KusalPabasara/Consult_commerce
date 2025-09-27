import emailjs from '@emailjs/browser';

// EmailJS Configuration
// These will be provided through environment variables in production
const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default';
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default';
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_default';

export interface ConsultationFormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  concerns: string;
  urgency: 'routine' | 'soon' | 'urgent';
  preferredContact: 'email' | 'phone';
  insurance?: string;
  previousTherapy: 'yes' | 'no';
  message?: string;
}

export const sendConsultationEmail = async (formData: ConsultationFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS with public key
    emailjs.init(EMAIL_PUBLIC_KEY);

    // Prepare the email template parameters
    const templateParams = {
      to_email: 'kusalpabasararcg@gmail.com',
      from_name: formData.parentName,
      from_email: formData.email,
      parent_name: formData.parentName,
      parent_email: formData.email,
      parent_phone: formData.phone,
      child_name: formData.childName,
      child_age: formData.childAge,
      primary_concerns: formData.concerns,
      urgency_level: formData.urgency.charAt(0).toUpperCase() + formData.urgency.slice(1),
      preferred_contact: formData.preferredContact.charAt(0).toUpperCase() + formData.preferredContact.slice(1),
      insurance_provider: formData.insurance || 'Not specified',
      previous_therapy: formData.previousTherapy.charAt(0).toUpperCase() + formData.previousTherapy.slice(1),
      additional_message: formData.message || 'No additional message provided',
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
    };

    // Send the email
    const result = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Real email sending using Formspree service
export const sendConsultationEmailFallback = async (formData: ConsultationFormData): Promise<boolean> => {
  try {
    // Prepare the email data for FormSubmit
    const emailData = {
      _subject: `🧠 New Consultation Request from ${formData.parentName} - Children Consultancy`,
      _captcha: false,
      _template: 'table',

      // Professional sender configuration
      _replyto: formData.email,
      _cc: '',
      _from: 'Children Consultancy Website',

      // Header Information for Professional Appearance
      '📋 CONSULTATION REQUEST': '═══════════════════════════',
      '🏥 Practice': 'Children Consultancy',
      '🌐 Submitted via': 'Official Website Contact Form',
      '📅 Date & Time': `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
      ' ': '─────────────────────────────',

      // Parent/Guardian Information
      '👤 Parent/Guardian Name': formData.parentName,
      '📧 Parent Email': formData.email,
      '📞 Parent Phone': formData.phone,
      '💬 Preferred Contact Method': formData.preferredContact.charAt(0).toUpperCase() + formData.preferredContact.slice(1),

      '  ': '─────────────────────────────',

      // Child Information
      '👶 Child Name': formData.childName,
      '🎂 Child Age': `${formData.childAge} years old`,

      '   ': '─────────────────────────────',

      // Consultation Details
      '🔍 Primary Concerns': formData.concerns,
      '⚡ Urgency Level': formData.urgency.toUpperCase(),
      '🩺 Previous Therapy Experience': formData.previousTherapy.charAt(0).toUpperCase() + formData.previousTherapy.slice(1),
      '🏥 Insurance Provider': formData.insurance || 'Not specified',
      '💭 Additional Message': formData.message || 'No additional message provided',

      '    ': '─────────────────────────────',

      // Footer Information
      '📞 Next Steps': 'Please contact the family within 24 hours',
      '🌐 Website': 'Children Consultancy Professional Services',
      '📧 This inquiry was sent to': 'kusalpabasararcg@gmail.com',

      // FormSubmit configuration
      _next: typeof window !== 'undefined' ? window.location.origin + '/contact?success=true' : 'https://your-site.vercel.app/contact?success=true'
    };

    // Send to Formspree endpoint (free service that forwards to email)
    const response = await fetch('https://formsubmit.co/kusalpabasararcg@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      console.log('✅ Consultation request sent successfully to kusalpabasararcg@gmail.com');
      return true;
    } else {
      console.error('❌ Failed to send consultation request:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending consultation request:', error);
    return false;
  }
};