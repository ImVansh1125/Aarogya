import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Droplet, Microscope, Heart, Shield, Users, FlaskConical } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Droplet,
      title: 'Blood Tests',
      description: 'Complete blood count, lipid profiles, diabetes screening, and more',
      tests: ['CBC', 'Lipid Profile', 'HbA1c', 'Thyroid Panel'],
      price: 'Starting from ₹2000',
      turnaround: '24 hours',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: FlaskConical,
      title: 'Urine Analysis',
      description: 'Comprehensive urine testing for kidney function and metabolic disorders',
      tests: ['Routine Urine', 'Microalbumin', 'Culture', 'Drug Screen'],
      price: 'Starting from ₹1500',
      turnaround: '24 hours',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Microscope,
      title: 'Microbiology',
      description: 'Culture and sensitivity testing for bacterial and fungal infections',
      tests: ['Blood Culture', 'Wound Swab', 'Stool Culture', 'TB Testing'],
      price: 'Starting from ₹3500',
      turnaround: '48-72 hours',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Heart,
      title: 'Cardiac Markers',
      description: 'Heart health screening and cardiac risk assessment panels',
      tests: ['Troponin', 'CK-MB', 'BNP', 'D-Dimer'],
      price: 'Starting from ₹4500',
      turnaround: '24 hours',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Shield,
      title: 'Preventive Packages',
      description: 'Comprehensive health checkup packages for all age groups',
      tests: ['Basic Health', 'Executive Package', 'Senior Citizen', 'Women\'s Health'],
      price: 'Starting from ₹9999',
      turnaround: '48 hours',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Corporate Wellness',
      description: 'Customized health screening solutions for organizations',
      tests: ['Employee Health', 'Pre-employment', 'Annual Checkup', 'Fitness Testing'],
      price: 'Custom pricing',
      turnaround: '24-48 hours',
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--medical-navy)] mb-4">
            Comprehensive Lab Services
          </h2>
          <p className="text-xl text-[var(--medical-gray-medium)] max-w-2xl mx-auto">
            From routine blood work to specialized diagnostic panels, we offer a complete range of laboratory services with fast, accurate results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.turnaround}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[var(--medical-navy)]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--medical-gray-medium)]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-[var(--medical-navy)] mb-2">Popular Tests:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.tests.map((test, testIndex) => (
                        <Badge key={testIndex} variant="outline" className="text-xs">
                          {test}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-[var(--medical-green)]">
                      {service.price}
                    </span>
                    <Button size="sm" variant="outline" className="border-[var(--medical-teal)] text-[var(--medical-teal)] hover:bg-[var(--medical-teal)] hover:text-white">
                      View Tests
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-[var(--medical-green)] hover:bg-[var(--medical-green)]/90 px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}