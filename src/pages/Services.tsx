import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Film,
  BookOpen,
  Video,
  FileText,
  Cpu,
  Smartphone,
  Monitor,
  Zap,
  ArrowRight,
} from "lucide-react";
import imgAnimation from "@/assets/animation.jpg";
import imgEbook from "@/assets/service-ebooks.jpg";
import imgVideo from "@/assets/multimedia.jpg";
import imgTest from "@/assets/testpaper.png";
import img3d from "@/assets/service1.jpg";
import imgApp from "@/assets/mobileapp.jpg";
import imgWeb from "@/assets/web.jpg";
import imgFlash from "@/assets/img1.png";
import imgAi from "@/assets/service-ai.jpg";

const services = [
  {
    key: "animation-design",
    title: "Animation Design",
    description:
      "Engaging animations for explainers, ads, character shorts, and educational content.",
    points: [
      "Character Animation",
      "Motion Graphics",
      "Explainer Videos",
      "2D/3D Animation",
    ],

    color: "from-purple-700 to-pink-500",
  },
  {
    key: "ebook-design",
    title: "Ebook Design",
    description:
      "Beautifully designed ebooks, layouts, and interactive PDF experiences for education and marketing.",
    points: [
      "Story Boarding",
      "Frame Animation",
      "Digital Flipbooks",
      "Interactive Elements",
    ],
    icon: BookOpen,
    color: "from-indigo-700 to-cyan-500",
  },
  {
    key: "video-editing",
    title: "Video Editing",
    description:
      "Professional editing, color-grading, and post-production for promo videos, courses, and social content.",
    points: ["Cuts & Transitions", "Color Grading", "Sound Design"],
    icon: Video,
    color: "from-rose-600 to-orange-500",
  },
  {
    key: "test-paper-generator",
    title: "Test Paper Generator",
    description:
      "AI-assisted test paper and question generator for schools, tutors, and learning platforms.",
    points: [
      "Custom Templates",
      "Auto Generation",
      "Custom Grading",
      "Multiple Formats",
    ],
    icon: FileText,
    color: "from-emerald-600 to-teal-400",
  },

  {
    key: "app-development",
    title: "App Development",
    description:
      "End-to-end mobile app development for iOS and Android with modern UX and scalable backends.",
    points: [
      "React Native / Flutter",
      "API Integration",
      "Deployment & Support",
      "UI/UX Design",
    ],
    icon: Smartphone,
    color: "from-sky-700 to-indigo-600",
  },
  {
    key: "web-development",
    title: "Web Development",
    description:
      "Fast, accessible, and SEO-friendly websites and web apps using modern frameworks.",
    points: [
      "SPA & SSR",
      "Performance Optimization",
      "CMS Integration",
      "Responsive Design",
    ],
    icon: Monitor,
    color: "from-slate-700 to-purple-700",
  },
  {
    key: "flash-to-html5",
    title: "Flash to HTML5",
    description:
      "Convert legacy Flash content to modern HTML5, preserving animations and interactivity.",
    points: ["Asset Migration", "Animation Rebuild", "Responsive Output"],
    icon: Zap,
    color: "from-yellow-600 to-orange-500",
  },
  {
    key: "ai-tools",
    title: "AI Tools",
    description:
      "Custom AI tools and automations: content generation, image AI, PPT generators, and workflows.",
    points: ["Generative AI", "Workflow Automation", "Custom Integrations"],
    icon: Cpu,
    color: "from-indigo-800 to-fuchsia-700",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />

      {/* Hero (based on About page styling) */}
      <section className="relative overflow-hidden min-h-[52vh] flex items-center pt-20 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-orange-200">
                Our Services
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500">
                NextGen Studio Services
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              From animation and video to AI automation and full-stack
              development — we craft solutions that scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (based on About values/cards) */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What we offer
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our core services tailored for businesses and creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              // map key -> image
              const imageMap: Record<string, string> = {
                "animation-design": imgAnimation,
                "ebook-design": imgEbook,
                "video-editing": imgVideo,
                "test-paper-generator": imgTest,
                "3d-animation": img3d,
                "app-development": imgApp,
                "web-development": imgWeb,
                "flash-to-html5": imgFlash,
                "ai-tools": imgAi,
              };

              const imgSrc = imageMap[s.key];

              return (
                <div
                  key={s.key}
                  className="group relative rounded-2xl overflow-hidden shadow-2xl border border-white/6 transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Top image (like screenshot) */}
                  {imgSrc && (
                    <div className="w-full">
                      <img
                        src={imgSrc}
                        alt={s.title}
                        className="w-full h-44 sm:h-48 object-cover rounded-t-2xl"
                      />
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-6 bg-gradient-to-br from-white/3 to-white/5 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                          {s.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {s.description}
                        </p>

                        <ul className="text-sm text-gray-300 grid grid-cols-1 gap-1 mb-4">
                          {s.points.map((p, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-3">
                          <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg hover:opacity-95 transition-opacity duration-200"
                          >
                            <svg
                              className="w-4 h-4 opacity-90"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                            View Demo
                          </a>

                          <a
                            href={`#${s.key}`}
                            className="ml-auto text-sm text-white/80 hover:text-white underline"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to discuss a project?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Tell us about your idea and we'll craft a solution that fits your
            goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="group inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/10 text-white backdrop-blur-sm"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
