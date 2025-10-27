import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-animations";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// Publication & small company logos
const clients = [
  { name: "Hacker News", logo: "https://cdn.simpleicons.org/ycombinator" },
  { name: "Medium", logo: "https://cdn.simpleicons.org/medium" },
  { name: "Product Hunt", logo: "https://cdn.simpleicons.org/producthunt" },
  { name: "Dev.to", logo: "https://cdn.simpleicons.org/devdotto" },
  { name: "TechCrunch", logo: "https://cdn.simpleicons.org/techcrunch" },
  { name: "Hashnode", logo: "https://cdn.simpleicons.org/hashnode" },
  { name: "Behance", logo: "https://cdn.simpleicons.org/behance" },
];

const ClientsSection = () => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
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
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2
              ref={headingRef}
              className="relative inline-block text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We've been featured and partnered with leading publications and
              innovative companies across the tech industry. Our solutions have
              been recognized for excellence and trusted by businesses
              worldwide.
            </p>
          </div>
        </ScrollReveal>

        {/* Infinite loop marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-loop-scroll space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-32"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite scroll animation */}
      <style>{`
    @keyframes loop-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-loop-scroll {
      animation: loop-scroll 25s linear infinite;
      width: max-content;
    }
  `}</style>
    </section>
  );
};

export default ClientsSection;
