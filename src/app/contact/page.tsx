'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import { sendConsultationEmailFallback } from '@/lib/emailService';

const formSchema = z.object({
  parentName: z.string().min(2, 'Parent/Guardian name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  childName: z.string().min(2, 'Child\'s name is required'),
  childAge: z.string().min(1, 'Child\'s age is required'),
  concerns: z.string().min(10, 'Please describe your concerns (minimum 10 characters)'),
  urgency: z.enum(['routine', 'soon', 'urgent']),
  preferredContact: z.enum(['email', 'phone']),
  insurance: z.string().optional(),
  previousTherapy: z.enum(['yes', 'no']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: '(555) 123-4567',
    subtitle: 'Call or text for immediate response',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: 'info@childrenmentalhealth.com',
    subtitle: 'We respond within 24 hours',
  },
  {
    icon: MapPinIcon,
    title: 'Office Location',
    details: '123 Wellness Street, Suite 100',
    subtitle: 'City, State 12345',
  },
  {
    icon: ClockIcon,
    title: 'Office Hours',
    details: 'Monday-Friday: 9AM-6PM',
    subtitle: 'Saturday: 10AM-4PM',
  },
];

const faqs = [
  {
    question: 'What insurance do you accept?',
    answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. We also offer sliding scale fees for families without insurance coverage.',
  },
  {
    question: 'How long is each session?',
    answer: 'Individual therapy sessions are typically 50 minutes, while family sessions may be 60-90 minutes depending on the needs of the family.',
  },
  {
    question: 'What age children do you work with?',
    answer: 'I specialize in working with children ages 5-17, and their families. Services are tailored to each child\'s developmental stage and individual needs.',
  },
  {
    question: 'Is therapy confidential for children?',
    answer: 'Yes, therapy is confidential with some important exceptions related to safety. I will discuss confidentiality guidelines with both parents and children at the beginning of treatment.',
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Send email with consultation request
      const emailSent = await sendConsultationEmailFallback(data);

      if (emailSent) {
        console.log('Consultation request sent successfully to kusalpabasararcg@gmail.com');
        setIsSubmitted(true);
        reset();
      } else {
        console.error('Failed to send consultation request');
        alert('There was an error sending your request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert('There was an error sending your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your consultation request has been received. We will contact you within 24 hours
            to schedule your appointment.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="w-full">
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards your child's mental wellness.
            We're here to listen, support, and guide your family on this journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.details}</p>
                <p className="text-sm text-gray-500">{info.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-16">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Crisis Support</h3>
                <p className="text-red-700 mb-2">
                  If you or your child is experiencing a mental health emergency, please contact:
                </p>
                <ul className="text-red-700 space-y-1">
                  <li>• National Suicide Prevention Lifeline: 988</li>
                  <li>• Crisis Text Line: Text HOME to 741741</li>
                  <li>• Emergency Services: 911</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Request a Consultation
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Parent/Guardian Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    {...register('parentName')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your full name"
                  />
                  {errors.parentName && (
                    <p className="text-red-600 text-sm mt-1">{errors.parentName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method *
                  </label>
                  <select
                    {...register('preferredContact')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select preference</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  {errors.preferredContact && (
                    <p className="text-red-600 text-sm mt-1">{errors.preferredContact.message}</p>
                  )}
                </div>
              </div>

              {/* Child Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Name *
                  </label>
                  <input
                    {...register('childName')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Child's first name"
                  />
                  {errors.childName && (
                    <p className="text-red-600 text-sm mt-1">{errors.childName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Age *
                  </label>
                  <input
                    {...register('childAge')}
                    type="number"
                    min="5"
                    max="17"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Age"
                  />
                  {errors.childAge && (
                    <p className="text-red-600 text-sm mt-1">{errors.childAge.message}</p>
                  )}
                </div>
              </div>

              {/* Concerns */}
              <div>
                <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Concerns *
                </label>
                <textarea
                  {...register('concerns')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please describe your main concerns about your child's mental health or behavior..."
                />
                {errors.concerns && (
                  <p className="text-red-600 text-sm mt-1">{errors.concerns.message}</p>
                )}
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    {...register('urgency')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select urgency</option>
                    <option value="routine">Routine (within 2 weeks)</option>
                    <option value="soon">Soon (within 1 week)</option>
                    <option value="urgent">Urgent (within 2-3 days)</option>
                  </select>
                  {errors.urgency && (
                    <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="previousTherapy" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Therapy Experience? *
                  </label>
                  <select
                    {...register('previousTherapy')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.previousTherapy && (
                    <p className="text-red-600 text-sm mt-1">{errors.previousTherapy.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Provider (Optional)
                </label>
                <input
                  {...register('insurance')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Blue Cross Blue Shield, Aetna, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}