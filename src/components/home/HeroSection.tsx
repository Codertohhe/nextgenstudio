import React from "react";
import { ChevronRight, Film } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/assets/Wonder Things (1).json";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen flex items-center py-12 sm:py-16 md:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Small Floating Particles */}
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3s" }}></div>
        <div className="absolute top-1/3 right-[20%] w-2 h-2 bg-pink-400/50 rounded-full animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "4s" }}></div>
        <div className="absolute bottom-1/4 left-[25%] w-2 h-2 bg-cyan-400/50 rounded-full animate-bounce" style={{ animationDelay: "2s", animationDuration: "3.5s" }}></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center w-full">
        {/* LEFT SIDE */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
          {/* Studio Name — Bold and Focused */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500">
              NextGen Studio
            </span>
            <Film className="inline-block ml-2 sm:ml-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-orange-400 animate-pulse" />
          </h1>

          {/* Small Tagline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200">
            Innovating Digital Experiences
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto md:mx-0">
            Empowering businesses with eLearning, mobile apps, and digital
            innovation — built for the future.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button className="group inline-flex items-center gap-2 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 duration-300 text-sm sm:text-base">
              Learn More
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group max-w-[320px] sm:max-w-[400px] md:max-w-[480px] w-full">
            {/* Soft Glow */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-orange-500/40 via-purple-500/40 to-orange-500/40 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Frame */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 p-3 sm:p-4 md:p-6 group-hover:border-white/20 transition-all duration-300">
              {/* Lottie Animation */}
              <div className="rounded-lg sm:rounded-xl overflow-hidden bg-white/10 border border-white/20">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  className="rounded-lg sm:rounded-xl"
                />
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
            <div
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-purple-400 to-cyan-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
