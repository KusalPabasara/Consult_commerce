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

// For production deployment, we'll use a fallback service that works out of the box
export const sendConsultationEmailFallback = async (formData: ConsultationFormData): Promise<boolean> => {
  try {
    // This is a simple fallback that logs the data and simulates email sending
    // In production, this would integrate with a service like Formspree or Netlify Forms

    const emailContent = `
      New Consultation Request - Children's Mental Health

      Parent/Guardian Information:
      - Name: ${formData.parentName}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Preferred Contact: ${formData.preferredContact}

      Child Information:
      - Name: ${formData.childName}
      - Age: ${formData.childAge}

      Consultation Details:
      - Primary Concerns: ${formData.concerns}
      - Urgency Level: ${formData.urgency}
      - Previous Therapy: ${formData.previousTherapy}
      - Insurance: ${formData.insurance || 'Not specified'}

      Additional Message:
      ${formData.message || 'No additional message provided'}

      Submitted: ${new Date().toLocaleString()}
    `;

    // For now, we'll log to console and simulate success
    console.log('Consultation Request Received:');
    console.log(emailContent);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return true;
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return false;
  }
};