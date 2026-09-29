import React from 'react';
import { LINKS, COPY } from '../data/links';
import { Google3DIcon, Star3D } from './icons3D';
import { ExternalLink, MessageSquareHeart } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col justify-center px-4 py-7 sm:py-9 md:py-11 bg-[#050505] bg-radial-hero overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/[0.03] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center text-center">
        {/* Section Pill */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-4 h-0.5 bg-[#4285F4] rounded-full shadow-[0_0_6px_#4285F4]" />
          <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-white">
            Google Reviews
          </span>
          <span className="w-4 h-0.5 bg-[#EA4335] rounded-full shadow-[0_0_6px_#EA4335]" />
        </div>

        {/* Required Title - Responsive with clamp */}
        <h2 className="text-[clamp(1.25rem,5.2vw,1.75rem)] font-black uppercase text-white tracking-wider mb-1 leading-tight">
          {COPY.REVIEW_TITLE}
        </h2>

        {/* 3D Google Badge & 5 Golden Stars Card - Scaled & Proportional */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 w-full my-3 shadow-xl relative overflow-hidden group">
          <div className="relative z-10 flex flex-col items-center">
            {/* 3D Google Icon Badge (compact size = 38) */}
            <div className="relative mb-2.5 transform transition-transform duration-300 group-hover:scale-105">
              <Google3DIcon size={38} />
            </div>

            {/* 5 3D Golden Review Stars (compact size = 18) */}
            <div className="flex items-center justify-center gap-1.5 mb-3" aria-label="5 estrelas de avaliação">
              {[0, 1, 2, 3, 4].map((star) => (
                <div key={star} className="transform transition-transform hover:scale-110 duration-200">
                  <Star3D size={18} />
                </div>
              ))}
            </div>

            {/* Exact Required Copy Text */}
            <p className="text-xs sm:text-sm text-white font-medium leading-relaxed max-w-sm mb-3">
              &ldquo;{COPY.REVIEW_TEXT}&rdquo;
            </p>

            <div className="flex items-center gap-1 text-[10px] text-white/50 mb-3.5">
              <MessageSquareHeart className="w-3 h-3 text-[#FFD000]" />
              <span>Sua avaliação ajuda outros motoristas em Caucaia</span>
            </div>

            {/* Main Action Button: AVALIAR NO GOOGLE */}
            <a
              href={LINKS.GOOGLE_REVIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow-3d group/btn relative w-full py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md focus:outline-none focus-visible:ring-3 focus-visible:ring-[#FFD000]/50"
            >
              <span>Avaliar no Google</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Direct Link Clarification */}
        <p className="text-[9px] text-white/40">
          Você será direcionado para o formulário oficial do Google.
        </p>
      </div>
    </section>
  );
};
