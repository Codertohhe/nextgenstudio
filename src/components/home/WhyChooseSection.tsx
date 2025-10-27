import React, { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";

const teamMembers = [
  {
    name: "Ankit Kumar",
    role: "Animation Specialist",
    image: img3,
  },
  {
    name: "Pinky Kumari",
    role: "Lead Developer",
    image: img2,
  },
  {
    name: "Mohit Koley",
    role: "App Developer",
    image: img4,
  },
  {
    name: "Yash Shinde",
    role: "Web Developer",
    image: img1,
  },
];

const TeamSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section
      id="team"
      className="py-20 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              Expert Team
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Talented individuals united by passion for innovation and excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative bg-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:bg-purple-900/50 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Content */}
              <div className="flex flex-col items-center text-center">
                {/* Image with Gradient Border */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full blur-sm"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-900 shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-300 font-medium">{member.role}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="absolute top-4 right-8 w-2 h-2 bg-pink-400 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
          >
            Join Our Team <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
