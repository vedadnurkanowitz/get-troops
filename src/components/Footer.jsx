import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = ({ setPage }) => (
  <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <div>
            <span className="font-bold text-2xl text-white tracking-wider">
              GET TROOPS
            </span>
            <div className="h-1 w-12 bg-amber-500 mt-2"></div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Vodeća regionalna agencija za posredovanje pri zapošljavanju u
            turizmu i ugostiteljstvu. Gradimo mostove između talenta i prilika.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-amber-500 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-amber-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-amber-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Navigacija</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => setPage("home")}
                className="hover:text-amber-500 transition-colors block text-left w-full"
              >
                Početna
              </button>
            </li>
            <li>
              <button
                onClick={() => setPage("about")}
                className="hover:text-amber-500 transition-colors block text-left w-full"
              >
                O Nama
              </button>
            </li>

            <li>
              <button
                onClick={() => setPage("contact")}
                className="hover:text-amber-500 transition-colors block text-left w-full"
              >
                Kontakt
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Kontakt</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-amber-500 shrink-0 mt-1" />
              <span>
                Sarajevo, Bosna i Hercegovina
                <br />
                Splitska ulica bb
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-amber-500 shrink-0" />
              <span>+387 61 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-amber-500 shrink-0" />
              <span>info@gettroops.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Radno Vrijeme</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Ponedjeljak - Petak</span>
              <span className="text-white font-medium">09:00 - 17:00</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Subota</span>
              <span className="text-white font-medium">10:00 - 14:00</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Nedjelja</span>
              <span className="text-amber-500 font-medium">Zatvoreno</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
        <p>&copy; 2025 Get Troops Agency. Sva prava zadržana.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Politika Privatnosti
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Uvjeti Korištenja
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
