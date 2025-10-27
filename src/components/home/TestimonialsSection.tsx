import React, { useState, useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      position: "CEO, BrightFuture Technologies",
      content:
        "NextGen Solution revamped our entire web presence. Their web solutions gave us a professional edge and helped us attract more clients in just a few months.",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      position: "Teacher of EduSpark Academy",
      content:
        "We collaborated with NextGen Solution for digital learning tools, and the outcome was beyond our expectations. The interactive solutions made learning more engaging for our students.",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Pavitra Iyer",
      position: "Principal of Vidhya Academy",
      content:
        "Their AI automation service streamlined our operations significantly. NextGen Solution's expertise saved us hours of manual work and improved overall efficiency.",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Rohan Patel",
      position: "Product Manager, Creative Minds Pvt. Ltd.",
      content:
        "Working with NextGen Solution on our mobile app development was a smooth experience. The app is intuitive, fast, and loved by our users. Highly professional team!",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      position: "CTO, GreenLeaf Enterprises",
      content:
        "NextGen Solution brought innovation to our business with their AI tools. Their solutions were customized for our needs, and the support has been excellent throughout.",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Rohit Pandya",
      position: "Director, Visionary Startups",
      content:
        "The web and digital solutions delivered by NextGen Solution helped us scale faster. Their team is highly reliable and delivers quality work on time.",
      image: "/api/placeholder/100/100",
      rating: 5,
    },
  ];

  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(testimonials.length / 3)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-8 h-px bg-orange-400"></div>
            Testimonials
            <div className="w-8 h-px bg-orange-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-12 h-12 text-orange-400" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-400 fill-orange-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full opacity-50 blur"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="relative w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl border-2 border-white/20">
                          ${testimonial.name.charAt(0)}
                        </div>
                      `;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-orange-500 w-8"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
