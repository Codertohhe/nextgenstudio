import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import logoimg from "@/assets/logo_2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "AI Tools", path: "/ai-tools" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-slate-900/98 via-purple-900/98 to-slate-900/98 backdrop-blur-xl shadow-xl shadow-purple-900/30"
          : "bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="p-3 rounded-xl shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
              <div className="h-12 w-28 sm:h-14 sm:w-32 bg-gradient-to-r from-orange-500 to-purple-600 rounded flex items-center justify-center text-white font-bold">
                <img src={logoimg} alt="Logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="px-4 py-2 text-gray-300 font-medium hover:text-orange-400 transition rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}

            {/* Search */}
            <div className="relative ml-2">
              <button
                className="p-2 text-gray-300 hover:text-orange-400 hover:bg-white/5 rounded-lg transition"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-3 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                </div>
              )}
            </div>

            {/* CTA Button */}
            {/* <a
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-orange-500/50 hover:scale-105 transform"
            >
              Get Started
            </a> */}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 animate-fadeIn">
          <nav className="flex flex-col px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="px-4 py-3 text-gray-300 font-medium hover:text-orange-400 hover:bg-white/5 rounded-lg transition"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="pt-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
              />
            </div>

            {/* Mobile CTA */}
            {/* <a
              href="/contact"
              className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all shadow-lg text-center"
            >
              Get Started
            </a> */}
          </nav>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
