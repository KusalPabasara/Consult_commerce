import Link from 'next/link';
import { HeartIcon, ShieldCheckIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

const services = [
  {
    title: 'Anxiety Support',
    description: 'Specialized treatment for childhood anxiety disorders, helping children develop coping strategies and build confidence.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Depression Care',
    description: 'Compassionate support for children experiencing depression, focusing on mood improvement and emotional well-being.',
    icon: HeartIcon,
  },
  {
    title: 'Family Therapy',
    description: 'Collaborative approach involving the whole family to create supportive environments for healing and growth.',
    icon: UserGroupIcon,
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The support our family received has been life-changing. My daughter is so much happier and confident now.',
    rating: 5,
  },
  {
    name: 'David L.',
    text: 'Professional, caring, and effective. We saw improvement in our son\'s behavior within just a few sessions.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nurturing Young Minds with{' '}
                <span className="text-blue-600">Professional Care</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Providing compassionate mental health support for children and families.
                Our specialized approach helps young minds heal, grow, and thrive in a safe,
                supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>Licensed Professional</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-5 h-5 text-green-500 mr-1" />
                  <span>Confidential & Safe</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <HeartIcon className="w-32 h-32 text-blue-600 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700">
                    Professional Mental Health Support
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Specialized care for children's emotional well-being
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Services for Young Minds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive mental health services tailored specifically for children
              and their families, focusing on creating positive outcomes through evidence-based approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Safe Space for Healing and Growth
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ShieldCheckIcon className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Licensed & Experienced</h3>
                    <p className="text-gray-600">Over 10 years of experience in children's mental health with proper licensing and certifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserGroupIcon className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Family-Centered Approach</h3>
                    <p className="text-gray-600">We believe in involving families in the healing process to create lasting positive changes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HeartIcon className="w-6 h-6 text-pink-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                    <p className="text-gray-600">Every child deserves understanding, patience, and professional support during their mental health journey.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-medium text-gray-900">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's mental wellness.
            Schedule a consultation today and discover how we can help your family thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Free Consultation
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
