import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Euro,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";

const JobBoard = ({ setPage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Sve");

  const jobs = [
    {
      id: 1,
      title: "Glavni Kuhar / Chef",
      location: "Dubrovnik",
      type: "Stalni radni odnos",
      salary: "2000 - 3000",
      category: "Kuhinja",
      description:
        "Tražimo iskusnog chefa za vođenje kuhinje u luksuznom hotelu s 5 zvjezdica. Potrebno minimalno 5 godina iskustva na sličnim pozicijama.",
    },
    {
      id: 2,
      title: "Konobar / Waiter",
      location: "Split",
      type: "Sezonski",
      salary: "1200 - 1500",
      category: "Servis",
      description:
        "Posluživanje hrane i pića u restoranu uz more. Osiguran smještaj i hrana. Poželjno poznavanje engleskog jezika.",
    },
    {
      id: 3,
      title: "Recepcioner",
      location: "Hvar",
      type: "Sezonski",
      salary: "1400 - 1600",
      category: "Recepcija",
      description:
        "Komunikativna osoba za rad na recepciji hotela. Obavezno aktivno znanje dva strana jezika.",
    },
    {
      id: 4,
      title: "Pizza Majstor",
      location: "Makarska",
      type: "Sezonski",
      salary: "1800 - 2200",
      category: "Kuhinja",
      description:
        "Samostalna priprema pizza u krušnoj peći. Rad u dinamičnom okruženju popularnog restorana.",
    },
    {
      id: 5,
      title: "Sobarica",
      location: "Zadar",
      type: "Sezonski",
      salary: "1000 - 1200",
      category: "Domaćinstvo",
      description:
        "Održavanje čistoće hotelskih soba i zajedničkih prostorija. Urednost i brzina su ključni.",
    },
    {
      id: 6,
      title: "Barmen",
      location: "Rovinj",
      type: "Sezonski",
      salary: "1500 - 2000",
      category: "Servis",
      description:
        "Priprema koktela i toplih napitaka u beach baru. Tražimo osobu s iskustvom i pozitivnom energijom.",
    },
  ];

  const categories = ["Sve", "Kuhinja", "Servis", "Recepcija", "Domaćinstvo"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "Sve" || job.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">
            Trenutno Otvoreno
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Pronađi Svoj <span className="text-amber-500">Savršen Posao</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Istražite našu ponudu vrhunskih poslova u turizmu i napravite prvi
            korak prema nezaboravnoj sezoni.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 mb-12 flex flex-col md:flex-row gap-4 items-center animate-slideUp">
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Pretraži pozicije, gradove..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  filter === cat
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all group flex flex-col h-full animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                    {job.category}
                  </span>
                  <span className="text-amber-500 font-bold flex items-center gap-1 text-sm bg-amber-50 px-2 py-1 rounded-lg">
                    <Euro size={14} /> {job.salary} €
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {job.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} className="text-amber-500/70" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Briefcase size={16} className="text-amber-500/70" />
                    {job.type}
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {job.description}
                </p>

                <button
                  onClick={() => setPage("apply")}
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg hover:shadow-amber-500/20"
                >
                  Apliciraj Odmah <ArrowRight size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Filter size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Nema rezultata
              </h3>
              <p className="text-slate-500">
                Pokušajte promijeniti kriterije pretrage.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
