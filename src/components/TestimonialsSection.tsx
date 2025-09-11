import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Coustmer 1',
      age: '35',
      location: 'SRE, UP',
      image: '',
      rating: 5,
      text: "PulsePathology made my health checkup incredibly convenient. The home collection service was professional, and I got my reports within 24 hours. The online portal is easy to use and secure.",
      testType: 'Comprehensive Health Package'
    },
    {
      name: 'Coustmer 2',
      age: '45',
      location: 'Noida, UP',
      image: '',
      rating: 5,
      text: "As a diabetic, I need regular blood sugar monitoring. PulsePathology has been my go-to lab for 3 years. Accurate results, fair pricing, and excellent customer service. Highly recommended!",
      testType: 'Diabetes Monitoring Package'
    },
    {
      name: 'Coustmer 3',
      age: '50',
      location: 'Delhi',
      image: '',
      rating: 5,
      text: "I was nervous about my first pregnancy tests, but the staff at PulsePathology were so caring and professional. They explained everything clearly and made me feel comfortable throughout.",
      testType: 'Women\'s Health Panel'
    },
    {
      name: 'Coustmer 4',
      age: '55',
      location: 'Bandra, Mumbai',
      image: '',
      rating: 5,
      text: "Corporate health screening for our company was seamless. PulsePathology handled 200+ employees efficiently. The detailed reports helped us design better wellness programs.",
      testType: 'Corporate Wellness Package'
    }
  ];

  return (
    <section className="py-20 bg-[var(--medical-gray-light)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--medical-navy)] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-[var(--medical-gray-medium)] max-w-2xl mx-auto">
            Trusted by thousands of patients for accurate diagnostics and exceptional service. 
            Here's what they have to say about their experience with PulsePathology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--medical-green)] rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--medical-navy)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[var(--medical-gray-medium)]">
                      Age {testimonial.age} • {testimonial.location}
                    </p>
                  </div>
                </div>

                <blockquote className="text-[var(--medical-gray-dark)] leading-relaxed mb-4">
                  "{testimonial.text}"
                </blockquote>

                <div className="inline-flex items-center px-3 py-1 bg-[var(--medical-green)]/10 text-[var(--medical-green)] text-sm rounded-full">
                  {testimonial.testType}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[var(--medical-green)]">4.9/5</div>
              <p className="text-[var(--medical-gray-medium)]">Average Rating</p>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[var(--medical-green)]">2,847</div>
              <p className="text-[var(--medical-gray-medium)]">Patient Reviews</p>
              <p className="text-sm text-[var(--medical-gray-medium)]">Verified feedback</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[var(--medical-green)]">96%</div>
              <p className="text-[var(--medical-gray-medium)]">Recommend Us</p>
              <p className="text-sm text-[var(--medical-gray-medium)]">Would choose again</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}