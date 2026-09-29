import React from 'react';
import { LINKS, COPY } from '../data/links';
import { TireRim3D, WhatsApp3DIcon } from './icons3D';
import { ShieldCheck, Zap, Compass, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col justify-center px-4 py-7 sm:py-9 md:py-11 bg-[#080808] bg-carbon overflow-hidden">
      {/* Background Lighting & Automotive Tread Track Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#FFD000]/10 rounded-full blur-[80px]" />
        {/* Subtle Diagonal Tire Tread Grooves */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFD000_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center text-center">
        {/* Top Sporty Accent with Twin Yellow Lines */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-4 h-0.5 bg-[#FFD000] rounded-full shadow-[0_0_6px_#FFD000]" />
          <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#FFD000]">
            Sobre a Empresa
          </span>
          <span className="w-4 h-0.5 bg-[#FFD000] rounded-full shadow-[0_0_6px_#FFD000]" />
        </div>

        {/* Title: REOBOTE PNEUS - Responsive with clamp */}
        <h2 className="text-[clamp(1.25rem,5vw,1.75rem)] font-black uppercase text-white tracking-wider mb-2 leading-tight">
          {COPY.ABOUT_TITLE}
        </h2>

        {/* Center Automotive 3D Rim graphic emblem */}
        <div className="relative my-0.5 mb-3 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FFD000]/15 rounded-full blur-lg scale-75" />
          <TireRim3D size={46} className="relative z-10 drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)] animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Official Slogan / Statement Quote */}
        <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/10 mb-3 shadow-xl relative overflow-hidden text-center">
          {/* Subtle corner yellow highlight */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFD000]/15 to-transparent pointer-events-none" />

          <p className="text-xs sm:text-sm text-white font-medium leading-relaxed italic">
            &ldquo;{COPY.ABOUT_TEXT}&rdquo;
          </p>

          <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-[#FFD000] uppercase tracking-wider">
            <CheckCircle2 className="w-3 h-3 text-[#FFD000]" />
            Compromisso e Transparência em Caucaia
          </div>
        </div>

        {/* 3 Pillars derived strictly from the official quote: Qualidade, Confiança, Sem Enrolação */}
        <div className="grid grid-cols-3 gap-2 w-full mb-3.5">
          <div className="glass-panel p-2 sm:p-2.5 rounded-xl flex flex-col items-center text-center border border-white/5 hover:border-[#FFD000]/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#FFD000]/10 border border-[#FFD000]/25 flex items-center justify-center mb-1 text-[#FFD000]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-tight">Qualidade</span>
            <span className="text-[8px] text-white/60 mt-0.5">Alto padrão</span>
          </div>

          <div className="glass-panel p-2 sm:p-2.5 rounded-xl flex flex-col items-center text-center border border-white/5 hover:border-[#FFD000]/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#FFD000]/10 border border-[#FFD000]/25 flex items-center justify-center mb-1 text-[#FFD000]">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-tight">Confiança</span>
            <span className="text-[8px] text-white/60 mt-0.5">Segurança</span>
          </div>

          <div className="glass-panel p-2 sm:p-2.5 rounded-xl flex flex-col items-center text-center border border-white/5 hover:border-[#FFD000]/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-[#FFD000]/10 border border-[#FFD000]/25 flex items-center justify-center mb-1 text-[#FFD000]">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-tight">Sem Enrolação</span>
            <span className="text-[8px] text-white/60 mt-0.5">Atendimento ágil</span>
          </div>
        </div>

        {/* WhatsApp Direct Action */}
        <a
          href={LINKS.WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-yellow-3d group w-full py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md focus:outline-none focus-visible:ring-3 focus-visible:ring-[#FFD000]/50"
        >
          <WhatsApp3DIcon size={18} className="transition-transform group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          <span>Chamar no WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
