import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Calendar, Shield, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-[var(--medical-gray-light)] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[var(--medical-navy)]">
                Trusted Lab Results,
                <span className="text-[var(--medical-green)]"> Delivered Fast</span>
              </h1>
              <p className="text-xl text-[var(--medical-gray-medium)] max-w-lg">
                Get accurate diagnostic testing with secure, fast report delivery. 
                Your health is our priority, backed by certified lab excellence.
              </p>
            </div>

            {/* Quick Test Search */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for tests (e.g., Blood Sugar, CBC, Liver Profile)"
                    className="pl-10 h-12 border-gray-200"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-[var(--medical-green)] hover:bg-[var(--medical-green)]/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--medical-gray-medium)]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--medical-green)]" />
                <span>NABL Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--medical-green)]" />
                <span>24-48 Hour Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--medical-green)]" />
                <span>ISO 12345 Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-[var(--medical-teal)]/10 to-[var(--medical-green)]/10 p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Medical professional in modern laboratory"
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-[var(--medical-navy)]">50K+</div>
                <div className="text-sm text-[var(--medical-gray-medium)]">Tests Completed</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-[var(--medical-green)]">98.9%</div>
                <div className="text-sm text-[var(--medical-gray-medium)]">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}