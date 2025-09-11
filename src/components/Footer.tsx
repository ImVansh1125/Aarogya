import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Test Catalog', href: '#tests' },
    { label: 'Health Packages', href: '#packages' },
    { label: 'Corporate Wellness', href: '#corporate' },
    { label: 'Blog & Resources', href: '#blog' }
  ];

  const patientServices = [
    { label: 'Book a Test', href: '#book' },
    { label: 'Download Reports', href: '#reports' },
    { label: 'Track Sample', href: '#track' },
    { label: 'Home Collection', href: '#home-collection' },
    { label: 'Find Locations', href: '#locations' },
    { label: 'Patient Support', href: '#support' }
  ];

  const policies = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Quality Policy', href: '#quality' },
    { label: 'Refund Policy', href: '#refund' },
    { label: 'Cookie Policy', href: '#cookies' }
  ];

  return (
    <footer className="bg-[var(--medical-navy)] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated on Health Topics</h3>
              <p className="text-blue-100">Get health tips, test updates, and wellness insights delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="bg-[var(--medical-coral)] hover:bg-[var(--medical-coral)]/90 text-white">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                {/* Pulse wave logo */}
                <svg viewBox="0 0 32 32" className="w-8 h-8">
                  <path
                    d="M2 16 L8 16 L10 10 L14 22 L18 6 L22 20 L26 12 L30 16"
                    stroke="var(--medical-green)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="18" cy="6" r="1.5" fill="var(--medical-coral)" />
                </svg>
              </div>
              <span className="text-xl font-bold">Aarogya 24/7</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Your trusted partner in diagnostic excellence. Providing accurate, reliable laboratory services 
              for over 25 years with state-of-the-art technology and expert care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--medical-green)]" />
                <div>
                  <div className="font-medium">+91 0123456789</div>
                  <div className="text-sm text-blue-200">24/7 Support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--medical-green)]" />
                <div>
                  <div className="font-medium">contact@aarogyapathology.com</div>
                  <div className="text-sm text-blue-200">Email Support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--medical-green)]" />
                <div>
                  <div className="font-medium">123 Unknown</div>
                  <div className="text-sm text-blue-200">Healthcare District, Delhi</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[var(--medical-green)]" />
                <div>
                  <div className="font-medium">Mon-Sat: 6:00 AM - 10:00 PM</div>
                  <div className="text-sm text-blue-200">Sunday: 7:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-[var(--medical-green)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Patient Services</h4>
            <ul className="space-y-3">
              {patientServices.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-blue-100 hover:text-[var(--medical-green)] transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Policies & Legal</h4>
            <ul className="space-y-3 mb-6">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href={policy.href}
                    className="text-blue-100 hover:text-[var(--medical-green)] transition-colors"
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--medical-green)] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--medical-green)] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--medical-green)] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--medical-green)] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-blue-200 text-sm">
            © 2025 Aarogya. All rights reserved. | CLIA ID: 123456789 | NABL Certificate No: TC-1234
          </div>
          <div className="flex items-center space-x-6 text-sm text-blue-200">
            <span>Accredited by NABL</span>
            <span>ISO 12345:2020</span>
            <span>CAP Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}