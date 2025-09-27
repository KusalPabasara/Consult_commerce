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

// Professional email sending using our own Nodemailer API
export const sendConsultationEmailFallback = async (formData: ConsultationFormData): Promise<boolean> => {
  try {
    console.log('📧 Sending consultation request via Children Consultancy API...');

    // Send to our own API endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Consultation request sent successfully!');
      console.log('📧 Email sent from: Children Consultancy');
      console.log('📧 Email sent to: kusalpabasararcg@gmail.com');
      console.log('📧 Professional HTML format with branding');
      console.log('📧 Parent can reply directly to email');
      console.log('📧 Submission details:', {
        parentName: formData.parentName,
        childName: formData.childName,
        urgency: formData.urgency,
        timestamp: new Date().toLocaleString()
      });
      return true;
    } else {
      console.error('❌ Failed to send consultation request:', result.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending consultation request:', error);
    return false;
  }
};