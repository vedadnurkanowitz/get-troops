import React from "react";
import { Briefcase, ArrowRight } from "lucide-react";

const Hero = ({ setPage }) => (
  <div className="relative h-screen min-h-[600px] w-full bg-slate-900 overflow-hidden flex items-center justify-center pt-32">
    {/* Background Image & Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ animationDuration: "30s" }}
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Luxury Hotel Staff"
      />
      {/* Complex gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
      <div className="animate-[fadeInUp_1s_ease-out]">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
          Sezona 2025 je počela
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-2xl">
          Vaša karijera u <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Premium Turizmu
          </span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
          Povezujemo vrhunske hotele i restorane sa talentima poput vas. Siguran
          posao, odličan smještaj i najbolja zarada na Jadranu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setPage("apply")}
            className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Prijavi se za Posao
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("services");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 text-lg font-medium rounded-full transition-all backdrop-blur-sm"
          >
            Saznaj više
          </button>
        </div>

        {/* Stats / Social Proof (Mini) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center gap-8 md:gap-16">
          <div className="text-center">
            <span className="block text-3xl font-bold text-white">50+</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              Hotela
            </span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold text-white">1k+</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              Zaposlenih
            </span>
          </div>
          <div className="text-center">
            <span className="block text-3xl font-bold text-white">24/7</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              Podrška
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
  </div>
);

export default Hero;
