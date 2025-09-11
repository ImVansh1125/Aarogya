import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const achievements = [
    { icon: Users, label: '50,000+', description: 'Patients Served' },
    { icon: Award, label: '25+', description: 'Years of Excellence' },
    { icon: CheckCircle, label: '98.9%', description: 'Accuracy Rate' },
    { icon: Clock, label: '24/7', description: 'Support Available' }
  ];

  const certifications = [
    'NABL Accredited',
    'ISO 15189:2012',
    'CAP Certified',
    'CLIA Licensed'
  ];

  const teamMembers = [
    {
      name: 'Dr . 1',
      role: 'Chief Pathologist',
      specialization: 'Unkown',
      image: ''
    },
    {
      name: 'Dr . 2',
      role: 'Laboratory Director',
      specialization: 'Unkown',
      image: ''
    },
    {
      name: 'Dr . 3',
      role: 'Microbiologist',
      specialization: 'Unkown',
      image: ''
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--medical-navy)] mb-6">
            About Aarogya
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-[var(--medical-gray-medium)] leading-relaxed mb-8">
              For over 25 years, Aarogya has been at the forefront of diagnostic excellence, 
              providing accurate, reliable laboratory services to healthcare providers and patients. 
              Our mission is to deliver precise diagnostic information that empowers better health decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[var(--medical-green)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--medical-navy)] mb-1">Quality Assurance</h4>
                    <p className="text-[var(--medical-gray-medium)]">State-of-the-art equipment and rigorous quality control protocols ensure the highest accuracy standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[var(--medical-green)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--medical-navy)] mb-1">Fast Turnaround</h4>
                    <p className="text-[var(--medical-gray-medium)]">Advanced automation and streamlined processes deliver most results within 24-48 hours.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[var(--medical-green)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--medical-navy)] mb-1">Expert Team</h4>
                    <p className="text-[var(--medical-gray-medium)]">Board-certified pathologists and experienced technicians with decades of combined expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[var(--medical-green)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--medical-navy)] mb-1">Accreditation</h4>
                    <p className="text-[var(--medical-gray-medium)]">Multiple international certifications ensure we meet the highest industry standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--medical-green)]/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[var(--medical-green)]" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--medical-navy)]">
                    {achievement.label}
                  </div>
                  <p className="text-[var(--medical-gray-medium)] text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-[var(--medical-gray-light)] rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-[var(--medical-navy)] text-center mb-6">
            Accreditations & Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-white border-2 border-[var(--medical-green)] text-[var(--medical-green)]">
                <Shield className="w-4 h-4 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--medical-navy)] text-center mb-12">
            Meet Our Expert Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6 -mt-16 relative z-10">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <h4 className="text-lg font-semibold text-[var(--medical-navy)] mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[var(--medical-green)] font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-[var(--medical-gray-medium)]">
                      {member.specialization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}