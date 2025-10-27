import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import toolImg from "../assets/multmediabg.jpg";
import showimg from "../assets/multimedia.jpg";
import gradimg from "../assets/gradient2-bg.jpg";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import contactkid from "../assets/contactkid.png";
import gradientimg from "../assets/gradient-bg3.png";
import ContactSection from "@/components/home/ContactSection";

import {
  Code,
  ShoppingCart,
  Server,
  Smartphone,
  Palette,
  Shield,
} from "lucide-react";

const Animation = () => {
  const [activeTab, setActiveTab] = useState("2d-animation");

  const solutions = [
    {
      id: "2d-animation",
      title: "2D Animation",
      description: "Engaging 2D animations for storytelling, marketing, and educational content.",
      services: [
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Character Animation",
          description: "Custom character design",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Motion Graphics",
          description: "Dynamic visual effects",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Explainer Videos",
          description: "Clear visual messaging",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Social Media",
          description: "Engaging content",
        },
      ],
    },
    {
      id: "3d-animation",
      title: "3D Animation",
      description: "High-quality 3D animations for immersive visual experiences and product showcases.",
      services: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "3D Modeling",
          description: "Detailed 3D assets",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Character Design",
          description: "Realistic characters",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Product Animation",
          description: "Product visualization",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "VFX Integration",
          description: "Special effects",
        },
      ],
    },
    {
      id: "video-production",
      title: "Video Production",
      description: "Professional video production services from concept to final delivery.",
      services: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Commercial Videos",
          description: "Brand storytelling",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Post-Production",
          description: "Expert editing",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Color Grading",
          description: "Visual enhancement",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Sound Design",
          description: "Audio excellence",
        },
      ],
    },
    {
      id: "interactive-media",
      title: "Interactive Media",
      description: "Engaging interactive experiences for web and mobile platforms.",
      services: [
        {
          icon: <Code className="w-6 h-6" />,
          title: "Web Interactives",
          description: "Engaging experiences",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "AR/VR Content",
          description: "Immersive media",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Interactive Apps",
          description: "User engagement",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Gamification",
          description: "Interactive learning",
        },
      ],
    }
  ];

  const activeSolution = solutions.find(
    (solution) => solution.id === activeTab
  );

  const [formData, setFormData] = useState({
    Yourname: "",
    email: "",
    Organization_School: "",
    Message_Requirements: "",
    phone: "",
  });

  const { toast } = useToast();

  /**
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      Yourname: "",
      email: "",
      Organization_School: "",
      Message_Requirements: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section
          className="relative md:py-40 py-28 min-h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${toolImg})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                Animation & Multimedia Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Bringing your ideas to life through captivating animations and
                multimedia experiences.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* What is Digital Learning */}
      <section className="py-16 bg-[#E6F3FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={showimg}
                  alt="Enterprise Web Solutions"
                  className="w-3/4 h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Content Side */}
                  <div className="order-1 lg:order-2 space-y-6">
                    <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      Animation & Multimedia Solutions
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
                    </div>

                    <div className="space-y-6 text-gray-700">
                    <p className="text-md leading-relaxed">
                      Our Animation & Multimedia Solutions are designed to engage
                      audiences and communicate your message effectively. We create
                      compelling visual content that helps you stand out in today's
                      digital landscape.
                    </p>

                 
                    </div>
                  </div>
                  </div>
                </div>
                </section>

                <section
                className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
                style={{
                  backgroundImage: `url(${gradientimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                >
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Animation & Multimedia Solutions
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive web solutions designed to accelerate your digital
                    transformation and drive business growth
                  </p>
                  </div>

                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  {/* Tab Navigation */}
            <div className="border-b border-gray-200 bg-gray-100 shadow-lg">
              <div className="flex overflow-x-auto justify-center">
                {solutions.map((solution) => (
                  <button
                    key={solution.id}
                    onClick={() => setActiveTab(solution.id)}
                    className={`px-8 py-6 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                      activeTab === solution.id
                        ? "text-pink-600 border-blue-600 bg-blue-50 shadow-md"
                        : "text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {solution.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-12">
              {activeSolution && (
                <div className="space-y-12">
                  {/* Description */}
                  <div className="text-center max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                      {activeSolution.description}
                      <hr className="w-1/2 mx-auto mt-2 border-gray-300" />
                    </p>
                  </div>

                  {/* Services Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activeSolution.services.map((service, index) => (
                      <div
                        key={index}
                        className="text-center group hover:scale-105 transition-transform duration-300"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="text-center pt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white mb-4 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-flex items-center space-x-2">
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Animation;
