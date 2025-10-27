import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo_2.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="bg-transparent p-4 rounded-xl w-fit shadow-lg">
              <div className="flex items-center">
                <div className="h-16 w-36 sm:h-20 sm:w-40 bg-gradient-to-r from-orange-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-xl">
                  <img src={logo} alt="NextGen Studio" className="h-12 sm:h-14 w-auto object-contain" />
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              NextGen Solutions is your trusted partner for innovative digital
              transformation and cutting-edge technology solutions.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#3b5998] hover:bg-[#3b5998] text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-black hover:bg-black text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H17.17l-5.372-7.043-6.145 7.043H2.345l7.73-8.858L2 2.25h7.08l4.857 6.365 4.307-6.365z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#007bb6] hover:bg-[#007bb6] text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#e4405f] hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e4405f] hover:to-[#833ab4] text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  Enterprise Web Solution
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  E-Learning Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  AI & Workflows Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  Animation & Multimedia Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Contact
              </span>
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@nextgen.com"
                className="group flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <div className="p-2 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 group-hover:border-orange-400 transition-colors mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">info@nextgen.com</span>
              </a>

              <a
                href="tel:+919510649230"
                className="group flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <div className="p-2 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 group-hover:border-orange-400 transition-colors mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">+91 9510649230</span>
              </a>

              <div className="group flex items-start gap-3 text-gray-400">
                <div className="p-2 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">
                  Ankleshwar, Gujarat 393001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 NextGen Solutions. All rights reserved. Built with passion
              for digital excellence.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
