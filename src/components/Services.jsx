import React from "react";
import {
  Briefcase,
  CheckCircle,
  Users,
  Clock,
  Award,
  Shield,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <div className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon className="w-24 h-24 text-amber-500 transform rotate-12" />
    </div>

    <div className="relative z-10">
      <div className="inline-flex p-3 rounded-lg bg-slate-50 text-amber-600 mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Veliki izbor poslova",
      description:
        "Surađujemo sa preko 50 elitnih hotela i restorana na Jadranu. Nudimo širok spektar pozicija prilagođenih vašem iskustvu.",
    },
    {
      icon: Shield,
      title: "Provjereni poslodavci",
      description:
        "Svaki poslodavac je verificiran. Garantujemo sigurnost, adekvatan smještaj, plaćene obroke i redovna primanja.",
    },
    {
      icon: Users,
      title: "24/7 Podrška",
      description:
        "Naš tim agenata je uz vas od trenutka prijave do kraja sezone. Rješavamo sve administrativne i logističke izazove.",
    },
    {
      icon: Award,
      title: "Karijerni Napredak",
      description:
        "Povezujemo vas sa mentorima i omogućavamo treninge koji vam pomažu da napredujete od početnika do menadžera.",
    },
    {
      icon: Clock,
      title: "Brzi Proces",
      description:
        "Od prijave do posla u rekordnom roku. Naš efikasan sistem selekcije štedi vaše vrijeme.",
    },
    {
      icon: CheckCircle,
      title: "Bez Skrivenih Troškova",
      description:
        "Naše usluge posredovanja su potpuno besplatne za kandidate. Transparentnost je naš prioritet.",
    },
  ];

  return (
    <div id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-0 left-0 p-4 opacity-30">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-amber-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">
            Zašto odabrati nas
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Više od obične agencije
          </h2>
          <p className="text-lg text-slate-600">
            Get Troops nije samo posrednik - mi smo vaš partner u izgradnji
            uspješne karijere u turizmu. Pružamo kompletnu podršku kako biste se
            vi mogli fokusirati na ono što najbolje radite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
