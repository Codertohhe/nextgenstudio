import React, { useState } from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Send,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    serviceType: "",
    phone: "",
    message: "",
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! ✅");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-orange-400"></div>
                Get in Touch
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                The Next Step in Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                  Digital Journey
                </span>
              </h2>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Talk!
              </h3>
              
              <p className="text-xl text-gray-300">
                Connect with us on social media
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="group p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#007bb6] hover:bg-[#007bb6] text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="group p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-black hover:bg-black text-white transition-all duration-300 hover:scale-110 transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H17.17l-5.372-7.043-6.145 7.043H2.345l7.73-8.858L2 2.25h7.08l4.857 6.365 4.307-6.365z" />
                </svg>
              </a>

              <a
                href="#"
                className="group p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#e4405f] hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e4405f] hover:to-[#833ab4] text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="group p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#ff0000] hover:bg-[#ff0000] text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Youtube className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="group p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#3b5998] hover:bg-[#3b5998] text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Write to us at</p>
                  <a
                    href="mailto:nextgen@example.com"
                    className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    nextgen@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 space-y-6 hover:border-white/20 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
              />
              <input
                type="text"
                name="company"
                placeholder="Company *"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
              />
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
              >
                <option value="" className="bg-slate-800">Service Type</option>
                <option value="elearning" className="bg-slate-800">E-Learning Solutions</option>
                <option value="digital" className="bg-slate-800">Digital Learning Tools</option>
                <option value="ai" className="bg-slate-800">AI & Workflows Automation</option>
                <option value="mobile" className="bg-slate-800">Mobile Development</option>
                <option value="animation" className="bg-slate-800">Animation & Multimedia Services</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all"
              />
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white placeholder-gray-400 p-4 rounded-xl w-full focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 outline-none transition-all resize-none"
            ></textarea>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="updates"
                checked={formData.updates}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-orange-500 focus:ring-2 focus:ring-orange-400/20"
              />
              <span className="text-sm text-gray-300 leading-relaxed">
                By checking this box, I agree to receive updates from NextGen
                Solutions
              </span>
            </div>

            <button
              type="submit"
              className="group w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/50 hover:scale-105 transform duration-300 flex items-center justify-center gap-2"
            >
              Submit
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;