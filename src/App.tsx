import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
import  Login  from "./pages/Login";
import  Test  from "./pages/Test";

function Home() {
  return (
    <main className="pt-0">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tests" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
}
