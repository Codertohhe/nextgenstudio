import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import toolImg from "../assets/web.jpg";
import showimg from "../assets/websolutionpg.jpg";
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

const WebsiteDevelopment = () => {
  const [activeTab, setActiveTab] = useState("web-development");

  const solutions = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      services: [
        {
          icon: <Code className="w-6 h-6" />,
          title: "Custom Development",
          description: "Tailored web applications",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Responsive Design",
          description: "Mobile-first approach",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security & Performance",
          description: "Optimized and secure",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Scalable Architecture",
          description: "Built to grow",
        },
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      description:
        "Complete online store solutions that drive sales and provide seamless shopping experiences.",
      services: [
        {
          icon: <ShoppingCart className="w-6 h-6" />,
          title: "Store Setup",
          description: "Complete store configuration",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Payment Integration",
          description: "Secure payment processing",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Inventory Management",
          description: "Advanced tracking system",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Mobile Commerce",
          description: "Mobile-optimized shopping",
        },
      ],
    },
    {
      id: "cloud-hosting",
      title: "Cloud & Hosting",
      description:
        "Reliable cloud infrastructure and hosting solutions for fast, secure websites.",
      services: [
        {
          icon: <Server className="w-6 h-6" />,
          title: "Cloud Infrastructure",
          description: "Scalable hosting",
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security & Backup",
          description: "Data protection",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Performance",
          description: "Speed optimization",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "24/7 Support",
          description: "Continuous monitoring",
        },
      ],
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "User-centered design for intuitive, engaging digital experiences.",
      services: [
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Visual Design",
          description: "Modern interfaces",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "User Experience",
          description: "Intuitive navigation",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Prototyping",
          description: "Interactive mockups",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Testing",
          description: "Data-driven improvements",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Website Maintenance",
      description: "Ongoing website care and optimization services.",
      services: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Security",
          description: "Regular updates",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Monitoring",
          description: "Performance tracking",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Updates",
          description: "Content management",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Support",
          description: "Technical assistance",
        },
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Comprehensive strategies to increase online visibility and conversions.",
      services: [
        {
          icon: <Code className="w-6 h-6" />,
          title: "SEO",
          description: "Search optimization",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Content",
          description: "Engagement strategy",
        },
        {
          icon: <Server className="w-6 h-6" />,
          title: "Analytics",
          description: "Performance tracking",
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Social",
          description: "Marketing campaigns",
        },
      ],
    },
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
                Enterprise Web Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Empowering businesses with scalable, secure, and innovative web
                solutions tailored to your unique needs.
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
                  Enterprise Web Solutions
                </h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-md leading-relaxed">
                  Nextgen transforms your ideas into reality with innovative and
                  reliable web development solutions. We specialize in creating
                  custom, user-friendly, and high-performing websites that
                  reflect your brand’s vision and help you achieve your business
                  goals. With our affordable yet quality-driven services, we
                  ensure your online presence is impactful and growth-oriented.
                </p>

                <p className="text-md leading-relaxed">
                  Our solutions are designed to be scalable and flexible,
                  ensuring they can grow with your business. We leverage the
                  latest technologies and best practices to deliver solutions
                  that are not only effective but also future-proof.
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
              OUR WEB SOLUTIONS
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

export default WebsiteDevelopment;
