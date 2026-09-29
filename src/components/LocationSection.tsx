import React from 'react';
import { LINKS, COPY } from '../data/links';
import { Maps3DIcon } from './icons3D';
import { Navigation, MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col justify-center px-4 py-7 sm:py-9 md:py-11 bg-[#080808] bg-carbon overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EA4335]/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center text-center">
        {/* Section Pill */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-4 h-0.5 bg-[#EA4335] rounded-full shadow-[0_0_6px_#EA4335]" />
          <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#EA4335]">
            Nossa Loja
          </span>
          <span className="w-4 h-0.5 bg-[#EA4335] rounded-full shadow-[0_0_6px_#EA4335]" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wider mb-1">
          {COPY.LOCATION_TITLE}
        </h2>
        <p className="text-[11px] sm:text-xs text-white/60 mb-4 max-w-xs">
          Fácil acesso em Caucaia com estrutura completa para atender seu veículo.
        </p>

        {/* Dark Automotive Cartography / Map Visualization Card - Scaled & Compact */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 w-full mb-3.5 shadow-xl relative overflow-hidden group">
          {/* Stylized Dark Map Grid Background - Compact Height */}
          <div className="relative w-full h-28 sm:h-34 rounded-xl bg-[#0d1117] border border-white/10 overflow-hidden flex items-center justify-center mb-3">
            {/* Grid Vector Roads */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="road-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#road-grid)" />
              {/* Main Arterial Road Curves */}
              <path
                d="M -20 110 Q 120 50, 240 70 T 480 15"
                fill="none"
                stroke="#FFD000"
                strokeWidth="3"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 60 -10 Q 100 60, 240 70 T 360 160"
                fill="none"
                stroke="#4285F4"
                strokeWidth="2"
                strokeOpacity="0.3"
                strokeLinecap="round"
              />
            </svg>

            {/* Radar Sweep Arc */}
            <div className="absolute w-24 h-24 rounded-full border border-[#FFD000]/30 animate-ping opacity-25" />
            <div className="absolute w-12 h-12 rounded-full border border-[#EA4335]/40" />

            {/* Center 3D Maps Pin (compact size = 36) */}
            <div className="relative z-10 flex flex-col items-center">
              <Maps3DIcon size={36} className="transform transition-transform duration-300 group-hover:scale-110 -translate-y-0.5" />
              <div className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-xl flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-[#EA4335]" />
                <span>Reobote Pneus · Caucaia</span>
              </div>
            </div>

            {/* Corner Compass Marker */}
            <div className="absolute bottom-1.5 right-1.5 px-1 py-0.5 rounded bg-black/60 text-[8px] font-mono text-white/50 border border-white/10 flex items-center gap-0.5">
              <Navigation className="w-2 h-2 text-[#FFD000]" />
              <span>GPS</span>
            </div>
          </div>

          {/* Quick Route Context */}
          <div className="flex items-center justify-between text-xs text-white/70 px-0.5 mb-3">
            <span className="flex items-center gap-1 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              <span>Atendimento presencial</span>
            </span>
            <span className="text-white/50 text-[10px]">Caucaia - CE</span>
          </div>

          {/* Main Action Button: ABRIR LOCALIZAÇÃO */}
          <a
            href={LINKS.LOCATION}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#EA4335] via-[#D93025] to-[#B31412] hover:from-[#f04e40] hover:to-[#c61816] shadow-[0_4px_16px_rgba(234,67,53,0.3)] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-3 focus-visible:ring-[#EA4335]/50"
          >
            <Navigation className="w-3.5 h-3.5 transition-transform group-hover/btn:rotate-45" />
            <span>Abrir Localização</span>
          </a>
        </div>

        {/* Small Navigation Help */}
        <p className="text-[9px] text-white/40">
          Abre rotas com trânsito em tempo real no Google Maps ou Waze.
        </p>
      </div>
    </section>
  );
};
