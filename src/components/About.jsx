import React from "react";
import { Users, Award, ShieldCheck, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block animate-fadeIn">
            Naša Priča
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-slideUp">
            Gradimo mostove između <br />
            <span className="text-amber-500">Talenta i Prilika</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slideUp delay-100">
            Get Troops je osnovan s jednostavnom misijom: revolucionirati
            zapošljavanje u turizmu. Spajamo vrhunske poslodavce s ambicioznim
            pojedincima koji žele graditi karijeru.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Zadovoljnih Klijenata", val: "50+", icon: Users },
              { label: "Uspješnih Sezona", val: "10+", icon: Award },
              { label: "Zaposlenih Kandidata", val: "2000+", icon: TrendingUp },
              { label: "Sigurnost Isplate", val: "100%", icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.val}
                </h3>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">
              Naša Misija
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Postavljamo nove standarde u industriji
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Vjerujemo da svaki pojedinac zaslužuje priliku za rad u
                poticajnom okruženju. Naš tim stručnjaka pažljivo bira partnere
                kako bismo osigurali najbolje uvjete za naše kandidate.
              </p>
              <p>
                Fokusirani smo na transparentnost, integritet i dugoročne
                odnose. Nismo samo agencija – mi smo karijerni savjetnici koji
                vas prate na svakom koraku vašeg profesionalnog puta.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
            <div className="relative bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-amber-500">
                Zašto mi?
              </h3>
              <ul className="space-y-4">
                {[
                  "Personalizirani pristup svakom kandidatu",
                  "Ekskluzivni ugovori s top hotelima",
                  "Podrška 24/7 tokom cijele sezone",
                  "Besplatne edukacije i trening programi",
                  "Garantiran smještaj i obroci",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-slate-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Spremni za promjenu karijere?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Pridružite se hiljadama zadovoljnih kandidata koji su svoje
            povjerenje poklonili Get Troops agenciji.
          </p>
          <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-amber-500/20 transform hover:-translate-y-1">
            Kontaktirajte Nas
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
