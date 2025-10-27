import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutSection from "@/components/home/AboutSection";
import ClientsSection from "@/components/home/ClientsSection";
import TeamSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import backvid from "@/assets/backvid.mp4";
import { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-animations";
import promise from "@/assets/promise.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* <ClientsSection /> */}

        <AboutSection />
        {/* <WhyChooseSection /> */}

        <ServicesOverview />
        <TeamSection />
        

        <TestimonialsSection />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
