import React, { useState } from 'react';
import { LINKS } from '../data/links';
import { WhatsApp3DIcon } from './icons3D';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 pointer-events-auto"
    >
      {/* Dynamic pill tag on hover/touch */}
      <span
        className={`hidden sm:inline-block bg-[#101010]/95 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-xl transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="text-[#FFD000] font-bold">Atendimento</span> Caucaia
      </span>

      <a
        href={LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar atendimento pelo WhatsApp da Reobote Pneus"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#181818] to-[#0A0A0A] border border-[#25D366]/40 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping opacity-75 pointer-events-none" />

        {/* 3D Icon */}
        <WhatsApp3DIcon size={36} className="relative z-10 transition-transform duration-200 group-hover:rotate-6" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#25D366] border-2 border-[#050505] rounded-full shadow-[0_0_8px_#25D366]" />
      </a>
    </aside>
  );
};
