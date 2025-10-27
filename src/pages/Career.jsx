import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Target, Award, Lightbulb, Rocket } from "lucide-react";
import careerbg from "@/assets/careerbg.webp";
import gradientbg from "@/assets/gradient-bg.png";
import talent from "@/assets/Join-Talent-career.webp";
import ContactSection from "@/components/home/ContactSection";

const Career = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Yash Shinde",
      role: "CEO & Creative Director",
      description:
        "Leading NextGen Solutions with 8+ years of expertise in digital innovation, creative strategy, and business transformation.",
    },
    {
      name: "Aisha Kumari",
      role: "CTO & Lead Developer",
      description:
        "Specialist in AI automation, cloud solutions, and scalable mobile/web applications.",
    },
  ];

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

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative md:py-40 py-28 min-h-[60vh]"
          style={{
            backgroundImage: `url(${careerbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                Careers at NextGen Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Join us in shaping the future of technology and innovation.
              </p>
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* Careers Overview */}
        <section className="py-20 bg-[#E6F3FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Future Favors the Bold
              </h2>
              <p className="text-gray-700 mb-4">
                At <b>NextGen Solutions</b>, we believe in the power of hard
                work, calculated risk-taking, and most importantly, opportunity.
                You’ll collaborate with industry leaders and help businesses
                unlock their full potential through cutting-edge technology.
              </p>
              <p className="text-gray-700">
                Whether you’re pushing the boundaries of AI, developing next-gen
                cloud solutions, or guiding enterprises through digital
                transformation, you’ll be empowered to turn bold ideas into
                reality.
              </p>
            </div>
            <div
              className=" p-8 rounded-xl shadow-lg text-white"
              style={{ backgroundColor: "rgb(71 67 184) " }}
            >
              <p className="italic mb-4">
                "The most meaningful opportunities come from those willing to
                invest in your success and development from the very start. At
                NextGen, we give you the space to explore new challenges,
                develop skills, and step outside your comfort zone."
              </p>
              <p className="font-semibold">
                — Kushi Gupta, Senior Software Engineer
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section
          className="py-20"
          style={{
            backgroundImage: `url(${gradientbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              A Workplace That Works for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <Target className="w-8 h-8 mx-auto mb-4" style={{ color: "rgb(71 67 184)" }} />
                  ),
                  title: "Career Growth & Development",
                  desc: "Learning programs, mentorship, and leadership opportunities to grow your career.",
                },
                {
                  icon: (
                    <Award className="w-8 h-8 text-indigo-600 mx-auto mb-4" style={{ color: "rgb(71 67 184)" }} />
                  ),
                  title: "Comprehensive Benefits",
                  desc: "Medical, dental, vision, insurance, and scholarships to support your well-being.",
                },
                {
                  icon: (
                    <Rocket className="w-8 h-8 text-indigo-600 mx-auto mb-4" style={{ color: "rgb(71 67 184)" }} />
                  ),
                  title: "Flexibility & Balance",
                  desc: "Paid time off, parental leave, and the flexibility to create a routine that works for you.",
                },
                {
                  icon: (
                    <Lightbulb className="w-8 h-8 text-indigo-600 mx-auto mb-4"style={{ color: "rgb(71 67 184)" }} />
                  ),
                  title: "Recognition & Achievements",
                  desc: "We celebrate innovation and recognize your achievements every step of the way.",
                },
                {
                  icon: (
                    <Target className="w-8 h-8  mx-auto mb-4" style={{ color: "rgb(71 67 184)" }} />
                  ),
                  title: "Giving Back & Social Impact",
                  desc: "Opportunities to support education, sustainability, and workforce development.",
                },
                {
                  icon: (
                    <Users className="w-8 h-8 text-indigo-600 mx-auto mb-4" style={{ color: "rgb(71 67 184)" }} />
                  ),
                  title: "Diversity & Inclusion",
                  desc: "We embrace diversity as part of our culture, creating an inclusive workplace.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition border"
                  style={{ borderColor: "hsl(0deg 0% 56.22%)" }}
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20  text-white  relative"
          style={{
            backgroundImage: `url(${talent})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Didn’t find a role that fits?
            </h2>
            <p className="text-md mb-8">
              Join our Talent Network and get job alerts for roles tailored to
              you. <br /> Be the first to know about new opportunities!
            </p>
            <a
              href="/careers/apply"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:shadow-xl transition"
            >
              Join Talent Network
            </a>
          </div>
        </section>
      </main>

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Career;
