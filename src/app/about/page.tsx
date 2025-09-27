import Link from 'next/link';
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  HeartIcon,
  StarIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

const credentials = [
  {
    title: 'Licensed Clinical Social Worker (LCSW)',
    description: 'State licensed with 10+ years of experience',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Master&apos;s in Child Psychology',
    description: 'Specialized training in developmental psychology',
    icon: AcademicCapIcon,
  },
  {
    title: 'Certified in CBT & DBT',
    description: 'Evidence-based therapeutic approaches',
    icon: CheckCircleIcon,
  },
];

const specializations = [
  'Childhood Anxiety Disorders',
  'Pediatric Depression',
  'ADHD & Behavioral Issues',
  'Trauma-Informed Care',
  'Family Systems Therapy',
  'School-Related Stress',
  'Social Skills Development',
  'Parent-Child Relationships',
];

const approach = [
  {
    title: 'Evidence-Based Practice',
    description: 'Using scientifically proven methods like Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) tailored for children.',
  },
  {
    title: 'Family-Centered Care',
    description: 'Involving parents and caregivers in the therapeutic process to ensure lasting positive changes at home and school.',
  },
  {
    title: 'Culturally Sensitive',
    description: 'Respecting and incorporating diverse family backgrounds, values, and beliefs into the treatment approach.',
  },
  {
    title: 'Developmentally Appropriate',
    description: 'Adapting therapeutic techniques to match each child&apos;s age, developmental stage, and individual needs.',
  },
];

export default function About() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About Dr. Sarah Johnson
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dedicated to providing compassionate, evidence-based mental health care
                for children and families. With over a decade of experience, I specialize
                in helping young minds navigate life's challenges with resilience and hope.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 text-blue-600 mr-2" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
                  <span>500+ Families Helped</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Professional Photo</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700">Dr. Sarah Johnson, LCSW</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Children's Mental Health Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Credentials & Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to maintaining the highest standards of professional excellence
              through continuous education and evidence-based practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {credentials.map((credential) => (
              <div key={credential.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <credential.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{credential.title}</h3>
                <p className="text-gray-600 leading-relaxed">{credential.description}</p>
              </div>
            ))}
          </div>

          {/* Education & Experience */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Education</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Master of Social Work - Child & Family Concentration
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Bachelor of Psychology - Developmental Focus
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Advanced Training in Trauma-Informed Care
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Professional Experience</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Private Practice - Children's Mental Health (2018-Present)
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Community Mental Health Center (2014-2018)
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    School District Counseling Program (2012-2014)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Specialization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused expertise in addressing the unique mental health needs of children
              and supporting families through challenging times.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specializations.map((specialization, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200">
                <div className="flex items-center">
                  <HeartIcon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every child is unique, and so is their path to healing. I combine proven therapeutic
              methods with a warm, family-centered approach to create lasting positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            My Philosophy
          </h2>
          <blockquote className="text-2xl text-gray-600 italic mb-8 leading-relaxed">
            &ldquo;Every child has an inherent capacity for resilience and growth. My role is to provide
            a safe, supportive space where children can explore their feelings, develop coping skills,
            and discover their own strength with the support of their families.&rdquo;
          </blockquote>
          <p className="text-lg text-gray-600 mb-8">
            I believe that mental health is not just about addressing problems, but about building
            a foundation for lifelong emotional well-being, healthy relationships, and personal growth.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}