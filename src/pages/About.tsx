import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Rocket,
  Sparkles,
  Film,
  Calendar,
  TrendingUp,
  Zap,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Client Success",
      description:
        "We put our clients at the center of everything, ensuring their goals are our top priority.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "From AI automation to digital learning tools, we deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We partner with businesses as an extension of their team, ensuring shared success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "High standards, top talent, and a relentless focus on delivering quality.",
    },
    {
      icon: Rocket,
      title: "Growth",
      description:
        "Driving business growth through transformative technology and strategy.",
    },
  ];

  const team = [
    {
      name: "Ankit Kumar",
      role: "CEO & Creative Director",
      description:
        "Leading NextGen Solutions with 2+ years of expertise in digital innovation, creative strategy, and business transformation.",
    },
    {
      name: "Aisha Kumari",
      role: "COO & Lead Developer",
      description:
        "Specialist in AI automation, cloud solutions, and scalable mobile/web applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-20 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Small Floating Particles */}
          <div
            className="absolute top-20 left-[15%] w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 right-[20%] w-2 h-2 bg-pink-400/50 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-[25%] w-2 h-2 bg-cyan-400/50 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          ></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium text-orange-200">
                About Us
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500">
                NextGen Studio
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Innovating Digital Experiences — Empowering businesses with
              eLearning, mobile apps, and digital innovation — built for the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Story
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At NextGen Studio, every step begins with a simple belief — that
                innovation should not only solve problems but also inspire new
                possibilities. Our journey started with the vision of creating a
                company where creativity meets technology, and where fresh ideas
                can be transformed into impactful digital solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This is just the beginning of our journey, but we see it as an
                opportunity to create a strong foundation of trust, innovation,
                and excellence. At NextGen Studio, our history may be short, but
                our vision is long-term — and we are here to shape tomorrow, one
                idea at a time.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-400">
                        Empowering client success through bold innovation,
                        exceptional talent, and unwavering partnership.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-400">
                        To deliver transformative solutions that empower
                        businesses to adapt and thrive in an ever-changing
                        world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to transforming digital experiences - here's how we've grown
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 - Left Side */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right space-y-3 lg:pr-12">
                  <div className="inline-block lg:float-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-sm">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-medium text-orange-200">2023</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white clear-both">The Beginning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    NextGen Studio was founded with a vision to bridge the gap between creativity and technology. Started with a small team of passionate innovators.
                  </p>
                </div>
                <div className="hidden lg:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 items-center justify-center shadow-lg shadow-orange-500/50 hidden lg:flex z-10">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Item 2 - Right Side */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div className="space-y-3 lg:pl-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-purple-200">2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Rapid Growth</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Expanded our services to include AI automation, mobile development, and e-learning solutions. Served 50+ clients across various industries.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 items-center justify-center shadow-lg shadow-purple-500/50 hidden lg:flex z-10">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Item 3 - Left Side */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right space-y-3 lg:pr-12">
                  <div className="inline-block lg:float-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 backdrop-blur-sm">
                      <Calendar className="w-4 h-4 text-pink-400" />
                      <span className="text-sm font-medium text-pink-200">2025</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white clear-both">Innovation & Excellence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Launched cutting-edge animation services and AI-powered tools. Recognized as a leading digital innovation studio with a growing global presence.
                  </p>
                </div>
                <div className="hidden lg:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 items-center justify-center shadow-lg shadow-pink-500/50 hidden lg:flex z-10">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Item 4 - Right Side (Future) */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div className="space-y-3 lg:pl-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-200">Future</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Road Ahead</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Continuing to push boundaries, expand our global reach, and deliver transformative solutions that shape the future of digital experiences.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 items-center justify-center shadow-lg shadow-cyan-500/50 hidden lg:flex animate-pulse z-10">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The foundation that drives everything we do and every solution we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center shadow-xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/50">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your goals and craft innovative solutions to take your
            business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 duration-300"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/30 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
