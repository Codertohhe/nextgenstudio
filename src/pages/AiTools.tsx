import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Zap, Cpu } from "lucide-react";

const AiTools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />

      <section className="relative overflow-hidden min-h-[56vh] flex items-center pt-20 pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 backdrop-blur-sm mb-4">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-orange-200">AI Tools</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              AI Tools — Coming Soon
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              We're building powerful AI utilities to speed up content creation, automate workflows, and unlock new creative possibilities.
            </p>

            <div className="flex gap-3 justify-center">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg">
                Request Early Access
              </a>
              <a href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white">
                Browse Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">What to expect</h2>
          <p className="text-gray-300 mb-8">Tools for PPT/slide generation, automated test paper creation, image generation, content assistants, and integrations to streamline your team's flow.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-lg">
              <Cpu className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold mb-2">Automation</h3>
              <p className="text-sm text-gray-300">Automate repetitive tasks and document generation.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-lg">
              <Zap className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold mb-2">Generative AI</h3>
              <p className="text-sm text-gray-300">Content & image generation with quick presets.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-lg">
              <Cpu className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold mb-2">Integrations</h3>
              <p className="text-sm text-gray-300">Connect tools to your workflows and LMS.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiTools;
