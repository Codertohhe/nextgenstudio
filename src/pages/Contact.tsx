import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    inquiryType: "",
    phone: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      inquiryType: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inquiryOptions = [
    "Enterprise Web Solution",
    "E-Learning Solutions",
    "AI & Workflows Automation",
    "Mobile Development",
    "Animation & Multimedia Services",

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[56vh] flex items-center pt-20 pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.15),transparent)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 backdrop-blur-sm mb-4">
              <MapPin className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-orange-200">Contact</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Get in touch with NextGen Studio
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Have questions or want a free consultation? Tell us about your project and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left Info Card */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/20 via-pink-500/12 to-purple-500/20 rounded-2xl blur-2xl opacity-60" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to collaborate?</h2>
                  <p className="text-gray-300 mb-6">We're available for projects of any size. Connect with our team on socials or send us a message — we'll follow up quickly.</p>

                  {/* Social Media Icons */}
                  <div className="flex gap-3 mb-6">
                    <a href="#" className="p-3 bg-white/5 rounded shadow hover:bg-white/10 transition transform hover:-translate-y-1">
                      <FaLinkedin className="text-blue-400 text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded shadow hover:bg-white/10 transition transform hover:-translate-y-1">
                      <FaXTwitter className="text-white text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded shadow hover:bg-white/10 transition transform hover:-translate-y-1">
                      <FaInstagram className="text-pink-400 text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded shadow hover:bg-white/10 transition transform hover:-translate-y-1">
                      <FaYoutube className="text-red-400 text-2xl" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded shadow hover:bg-white/10 transition transform hover:-translate-y-1">
                      <FaFacebook className="text-blue-400 text-2xl" />
                    </a>
                  </div>

                  <h3 className="font-semibold text-lg text-white mb-2">Our office</h3>
                  <div className="flex items-start gap-2 text-gray-200">
                    <div>
                      Gotri-Sevasi Road<br />
                      Vadodara, Gujarat 390001<br />
                      India
                      <br /><br />
                      Phone: <span className="text-white">+91 265-123-4567</span>
                      <br />
                      Email: <a className="text-white underline" href="mailto:contact@nextgen.solutions">contact@nextgen.solutions</a>
                    </div>
                  </div>

                  <a href="/contact" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg">
                    View all locations
                  </a>
                </div>
              </div>

              {/* Right Side Form */}
              <form onSubmit={handleSubmit} className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company*"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title*"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                  />
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                  >
                    <option value="" className="text-gray-500">Inquiry Type</option>
                    {inquiryOptions.map((service, i) => (
                      <option key={i} value={service} className="text-black">{service}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent border border-white/10 rounded-lg px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-transparent border border-white/10 rounded-lg px-4 py-3 w-full mt-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                />

                <div className="flex items-center gap-2 mt-4">
                  <input type="checkbox" id="updates" />
                  <label htmlFor="updates" className="text-gray-300 text-sm">
                    By checking this box, I agree to receive updates from NextGen Solutions
                  </label>
                </div>

                <button type="submit" className="mt-6 w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-full shadow-lg hover:opacity-95 transition-opacity duration-200">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
