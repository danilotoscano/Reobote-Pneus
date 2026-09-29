import React from 'react';
import { LINKS } from '../data/links';
import { Instagram3DIcon } from './icons3D';
import { ExternalLink, Sparkles, Heart, MessageCircle } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col justify-center px-4 py-7 sm:py-9 md:py-11 bg-[#080808] bg-tire-track overflow-hidden">
      {/* Ambient Lighting with Magenta / Amber Instagram Hues */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-tr from-[#E1306C]/10 via-[#F77737]/10 to-[#5851DB]/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-4 h-0.5 bg-[#E1306C] rounded-full shadow-[0_0_6px_#E1306C]" />
          <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#E1306C]">
            Redes Sociais
          </span>
          <span className="w-4 h-0.5 bg-[#E1306C] rounded-full shadow-[0_0_6px_#E1306C]" />
        </div>

        <h2 className="text-[clamp(1.25rem,5.2vw,1.75rem)] font-black uppercase text-white tracking-wider mb-1 leading-tight">
          SIGA NOSSO INSTAGRAM
        </h2>
        <p className="text-[11px] sm:text-xs text-white/60 mb-4 max-w-xs">
          Acompanhe novidades, trabalhos realizados e o dia a dia da Reobote Pneus.
        </p>

        {/* 3D Instagram Showcase Card - Scaled & Proportional */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 w-full mb-3.5 shadow-xl relative overflow-hidden group">
          {/* Glowing Gradient Border Hover Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />

          <div className="relative z-10 flex flex-col items-center">
            {/* 3D Glossy Instagram Squircle (compact size = 38) */}
            <div className="relative mb-2.5 transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-[#E1306C]/30 rounded-full blur-lg" />
              <Instagram3DIcon size={38} className="relative z-10" />
            </div>

            {/* Account Handle with Verification Accent */}
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-base sm:text-lg font-black text-white tracking-wide">
                @reobote_pneus
              </span>
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#E1306C]/20 text-[#E1306C] border border-[#E1306C]/40">
                <Sparkles className="w-2 h-2" />
              </span>
            </div>

            <p className="text-[10px] sm:text-[11px] text-white/70 max-w-xs mb-3">
              Conteúdo automotivo, serviços realizados e dicas para rodar tranquilo.
            </p>

            {/* Stylized Visual Mockup Frame of Feed/Story */}
            <div className="w-full bg-black/50 rounded-xl p-2 mb-3 border border-white/10 flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-[#E1306C] p-0.5 bg-black">
                  <div className="w-full h-full rounded-full bg-[#FFD000] flex items-center justify-center font-black text-[8px] text-black">
                    RP
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-[10px] leading-none">Reobote Pneus</div>
                  <div className="text-[8px] text-white/50 leading-none mt-0.5">Caucaia · CE</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/70 text-xs">
                <span className="flex items-center gap-1">
                  <Heart className="w-2.5 h-2.5 text-[#E1306C]" />
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>

            {/* Main Action Button: SEGUIR NO INSTAGRAM */}
            <a
              href={LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:from-[#9542cd] hover:via-[#ec3b77] hover:to-[#ff3131] shadow-[0_4px_16px_rgba(225,48,108,0.3)] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-3 focus-visible:ring-[#E1306C]/50"
            >
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Small Trust Note */}
        <p className="text-[9px] text-white/40">
          Abra o perfil oficial no aplicativo do Instagram.
        </p>
      </div>
    </section>
  );
};
