import { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import abtimg from "@/assets/abtimg.jpg";

const AboutSection = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Image Side */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group max-w-lg w-full">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-purple-400/30 to-orange-400/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Frame */}
              <div
                ref={imageRef}
                className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 group-hover:border-white/20 transition-all duration-300"
              >
                {/* Placeholder for your image */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {/* Replace this with your actual image */}
                  <img
                    src={abtimg}
                    alt="About NextGen Learning"
                    className="w-full h-auto object-cover rounded-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                        <div class="aspect-[4/3] flex items-center justify-center text-slate-400">
                          <div class="text-center">
                            <svg class="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p class="font-medium">Your Image Here</p>
                            <p class="text-sm mt-2">Replace with: import aboutImg from "@/assets/about-img.svg"</p>
                          </div>
                        </div>
                      `;
                      }
                    }}
                  />
                  {/* Use your actual image: */}
                  {/* <img
                    src={aboutImg}
                    alt="About NextGen Learning"
                    className="w-full h-auto object-cover rounded-xl"
                  /> */}
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-tl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-br-full"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Trusted by 500+ Clients
                </span>
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div
            ref={headingRef}
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-px bg-orange-400"></div>
              Who We Are
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                NextGen Studio
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              At NextGen Studio, we specialize in delivering cutting-edge
              software solutions that drive business growth and innovation. With
              a focus on quality, creativity, and customer satisfaction, we
              transform ideas into reality.

            </p>

            <p className="text-base text-gray-300 leading-relaxed">
              Our team of experienced developers and designers work closely
              with clients to create tailored applications that meet their
              unique needs. From concept to deployment, we are committed to
              excellence in every project we undertake.
            </p>

            <div className="pt-4">
              <button className="group inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                Learn More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
