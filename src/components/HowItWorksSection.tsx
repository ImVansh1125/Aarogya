import React from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin, FlaskConical, FileCheck } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Book Your Test',
      description: 'Choose from our comprehensive test catalog and schedule your appointment online or call us.',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      step: '01'
    },
    {
      icon: MapPin,
      title: 'Sample Collection',
      description: 'Visit our lab or opt for home collection service. Our trained professionals ensure a comfortable experience.',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      step: '02'
    },
    {
      icon: FlaskConical,
      title: 'Lab Processing',
      description: 'Your samples are processed in our state-of-the-art, accredited laboratory using advanced technology.',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      step: '03'
    },
    {
      icon: FileCheck,
      title: 'Get Results',
      description: 'Receive your reports digitally within 24-48 hours. Access them anytime through our secure portal.',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-[var(--medical-gray-light)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--medical-navy)] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-[var(--medical-gray-medium)] max-w-2xl mx-auto">
            Getting your lab results has never been easier. Follow these simple steps to complete your testing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0" 
                       style={{ transform: 'translateX(-50%)' }}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-3 h-3 rounded-full bg-[var(--medical-green)]"></div>
                    </div>
                  </div>
                )}
                
                <Card className={`relative z-10 ${step.color} border-2 hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-[var(--medical-navy)] text-white text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 mt-2">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center ${step.iconColor}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-[var(--medical-navy)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--medical-gray-medium)] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[var(--medical-navy)]">Ready to get started?</h3>
              <p className="text-[var(--medical-gray-medium)]">Book your test now and experience our seamless process.</p>
            </div>
            <button className="bg-[var(--medical-green)] text-white px-6 py-3 rounded-xl hover:bg-[var(--medical-green)]/90 transition-colors font-medium">
              Book a Test
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}