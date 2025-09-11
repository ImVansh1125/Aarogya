'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu, Phone, Mail, MapPin, Calendar, FileText } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Determine if we're over a dark background section
      const heroHeight = window.innerHeight * 0.6; // Hero section height

      if (offset < heroHeight) {
        // Over hero section - light background
        setIsDarkBackground(false);
      } else {
        // Check specific sections
        const footerSection = document.querySelector('footer');
        const testimonialsSection = document.querySelector('#testimonials');

        if (footerSection instanceof HTMLElement) {
          const footerTop = footerSection.offsetTop;
          if (offset >= footerTop - 100) {
            // Over footer - dark background
            setIsDarkBackground(true);
            return;
          }
        }

        if (testimonialsSection instanceof HTMLElement) {
          const testimonialsTop = testimonialsSection.offsetTop;
          const testimonialsBottom = testimonialsTop + testimonialsSection.offsetHeight;
          if (offset >= testimonialsTop - 100 && offset < testimonialsBottom + 100) {
            // Over testimonials - potentially dark background
            setIsDarkBackground(true);
            return;
          }
        }

        // Default to light background for other sections
        setIsDarkBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic text colors based on background
  const textColor = isDarkBackground ? 'text-white drop-shadow-sm' : 'text-[var(--medical-navy)]';
  const textColorSecondary = isDarkBackground ? 'text-gray-100 drop-shadow-sm' : 'text-gray-700';
  const logoColor = isDarkBackground ? 'text-white drop-shadow-sm' : 'text-[var(--medical-navy)]';

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30'
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 relative">
            {/* Pulse wave logo */}
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path
                d="M2 16 L8 16 L10 10 L14 22 L18 6 L22 20 L26 12 L30 16"
                stroke={isDarkBackground && !scrolled ? 'white' : 'var(--medical-green)'}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="6" r="1.5" fill="var(--medical-coral)" />
            </svg>
          </div>
          <span
            className={`text-xl font-semibold transition-colors duration-300 ${
              scrolled ? 'text-[var(--medical-navy)] drop-shadow-none' : logoColor
            }`}
          >
            Aarogya 24/7
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[var(--medical-green)] ${
                scrolled ? 'text-gray-700 drop-shadow-none' : textColorSecondary
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className={`transition-all duration-300 ${
              scrolled
                ? 'border-[var(--medical-teal)] text-[var(--medical-teal)] hover:bg-[var(--medical-teal)] hover:text-white bg-white/50 backdrop-blur-sm'
                : isDarkBackground
                ? 'border-white/70 text-white hover:bg-white/20 hover:text-white bg-white/10 backdrop-blur-sm drop-shadow-sm'
                : 'border-[var(--medical-teal)] text-[var(--medical-teal)] hover:bg-[var(--medical-teal)] hover:text-white bg-white/50 backdrop-blur-sm'
            }`}
          >
            <FileText className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button
            size="lg"
            className={`transition-all duration-300 ${
              scrolled || !isDarkBackground
                ? 'bg-[var(--medical-green)] hover:bg-[var(--medical-green)]/90 text-white'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm drop-shadow-sm'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book a Test
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`transition-colors duration-300 ${
                scrolled
                  ? 'text-[var(--medical-navy)] hover:bg-white/50'
                  : isDarkBackground
                  ? 'text-white hover:bg-white/20 drop-shadow-sm'
                  : 'text-[var(--medical-navy)] hover:bg-white/50'
              }`}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu for PulsePathology website
            </SheetDescription>
            <div className="flex flex-col space-y-6 mt-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-[var(--medical-green)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex flex-col space-y-3 pt-6 border-t">
                <Button variant="outline" className="border-[var(--medical-teal)] text-[var(--medical-teal)] hover:bg-[var(--medical-teal)] hover:text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Get Report
                </Button>
                <Button className="bg-[var(--medical-green)] hover:bg-[var(--medical-green)]/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Test
                </Button>
              </div>

              <div className="flex flex-col space-y-3 pt-6 border-t text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 6397005658</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@aarogyapathology.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 DELHI </span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
