import React from 'react';
import { LINKS, COPY } from '../data/links';
import { WhatsApp3DIcon } from './icons3D';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollNext }) => {
  return (
    <header className="relative min-h-[85dvh] sm:min-h-[92dvh] w-full flex flex-col items-center justify-center px-4 py-5 sm:py-8 bg-[#050505] bg-radial-hero overflow-hidden">
      {/* Automotive Ambient Lighting & Speed Rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Center Glow for Logo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] bg-[#FFD000]/12 rounded-full blur-[90px]" />
        
        {/* Fine Diagonal Speed Striping */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#FFD000_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Subtle Horizontal Rim Accent Lines */}
        <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD000]/25 to-transparent" />
      </div>

      {/* Top Brand Tag / Micro-header */}
      <div className="relative z-10 w-full flex items-center justify-center pt-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FFD000] shadow-[0_0_8px_#FFD000] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-white/80">
            Caucaia · Ceará
          </span>
        </div>
      </div>

      {/* Central Hero Block: Official Logo + Slogan + Main WhatsApp CTA */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg md:max-w-xl mx-auto w-full px-4 my-auto">
        {/* Official Logo Container - Increased 2x as requested */}
        <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[440px] flex items-center justify-center pt-1 pb-1 mb-3 sm:mb-4">
          {/* Subtle Glow Behind Transparent PNG */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD000]/25 via-[#FFC400]/35 to-[#FFD000]/25 blur-2xl opacity-80 pointer-events-none" />
          
          <img
            src={LINKS.LOGO}
            alt="Reobote Pneus - Logomarca Oficial"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full max-h-[190px] sm:max-h-[230px] h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(255,208,0,0.25)] select-none transition-transform duration-300 hover:scale-[1.02]"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Beautiful Typography for Slogan */}
        <h1 className="font-['Outfit',sans-serif] text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight uppercase mb-4 sm:mb-5 text-balance max-w-md">
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Seus pneus em{' '}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD000] via-[#FFF066] to-[#FFC400] text-glow-yellow">
            boas mãos
          </span>
          <span className="text-white/90"> em Caucaia.</span>
        </h1>

        {/* Primary CTA: FALAR NO WHATSAPP - Decreased slightly for sleek proportion */}
        <div className="w-full flex flex-col items-center gap-1.5 mb-3">
          <a
            href={LINKS.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow-3d animate-shimmer group relative py-2.5 px-6 sm:py-3 sm:px-7 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold shadow-md focus:outline-none focus-visible:ring-3 focus-visible:ring-[#FFD000]/50"
          >
            <WhatsApp3DIcon size={20} className="transition-transform group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
            <span className="tracking-wide uppercase">Falar no WhatsApp</span>
          </a>

          {/* Quiet Sub-indicator */}
          <p className="text-[10px] text-white/50 font-medium">
            Atendimento ágil e direto pelo WhatsApp
          </p>
        </div>

        {/* Visual Indicator: ↓ Deslize para conhecer (moved close, reduced gap) */}
        <div className="pt-1">
          <button
            onClick={onScrollNext}
            aria-label="Deslize para a próxima seção"
            className="group flex flex-col items-center gap-1 text-[11px] text-white/60 hover:text-[#FFD000] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] rounded-lg px-2.5 py-1"
          >
            <span className="font-medium tracking-wide">↓ Deslize para conhecer</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#FFD000] animate-bounce group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </main>

      {/* Hidden footer element placeholder to maintain layout balance */}
      <div className="h-2" />
    </header>
  );
};
