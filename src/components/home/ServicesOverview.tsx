import React from "react";
import { ArrowRight } from "lucide-react";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import service4 from "../../assets/service4.jpg";

const ServicesOverview = () => {
  const services = [
    {
      title: "2D / 3D Animation",
      description:
        "Create captivating animated content that tells your story with professional-grade 2D and 3D animations.",
      points: [
        "Character Animation",
        "Motion Graphics",
        "Visual Effects",
        "3D Modeling",
      ],
      buttonText: "View Demo",
      image: service1,
      color: "from-purple-700 via-purple-800 to-indigo-900",
    },
    {
      title: "AI Automation Tools",
      description:
        "Streamline your workflow with AI-powered tools that enhance productivity and creativity.",
      points: [
        "AI PPT Generation",
        "AI Content Creation",
        "AI Image Generation",
        "AI Test Paper Generation",
      ],
      buttonText: "View Demo",
      image: service2,
      color: "from-indigo-800 via-purple-800 to-fuchsia-900",
    },
    {
      title: "E-Learning Solutions",
      description:
        "Designing innovative, interactive e-learning systems and digital education tools for the new generation.",
      points: [
        "Interactive Modules",
        "Assessments",
        "Gamification",
        "LMS Integration",
      ],
      buttonText: "View Demo",
      image: service3,
      color: "from-fuchsia-800 via-purple-800 to-orange-900",
    },
    {
      title: "App & Web Development",
      description:
        "Build stunning and scalable web & mobile applications that redefine digital experiences.",
      points: ["UI/UX Design", "Web Apps", "Mobile Apps", "API Integration"],
      buttonText: "View Demo",
      image: service4,
      color: "from-purple-900 via-slate-900 to-purple-900",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powering Creativity with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              NextGen Studio
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bringing life to ideas with animation, design, and technology.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.color} group hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 mb-5 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {service.points.map((point, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                          <span className="text-sm text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300 self-start">
                    {service.buttonText} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
