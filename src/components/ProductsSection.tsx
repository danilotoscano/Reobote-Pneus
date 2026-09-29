import React from 'react';
import { LINKS, COPY } from '../data/links';
import { WhatsApp3DIcon } from './icons3D';
import { Disc3, Wrench, CircleDot } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 'pneus',
      category: 'Pneus',
      badge: 'Essencial',
      description: 'Variedade em medidas e modelos com alta durabilidade, aderência e estabilidade para você rodar com total segurança.',
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#FFD000]/15 blur-lg" />
          <div className="w-14 h-14 rounded-full border-4 border-[#333333] border-dashed bg-gradient-to-tr from-[#151515] to-[#252525] flex items-center justify-center shadow-inner shadow-black">
            <div className="w-8 h-8 rounded-full border-2 border-[#FFD000] flex items-center justify-center bg-[#0d0d0d]">
              <CircleDot className="w-4 h-4 text-[#FFD000]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'rodas',
      category: 'Rodas',
      badge: 'Estilo & Performance',
      description: 'Modelos com acabamento premium, resistência reforçada e visual esportivo para transformar a estética do seu automóvel.',
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#FFD000]/15 blur-lg" />
          <div className="w-14 h-14 rounded-full border-2 border-white/20 bg-gradient-to-tr from-[#111111] to-[#2a2a2a] flex items-center justify-center shadow-lg">
            <Disc3 className="w-8 h-8 text-[#FFD000] animate-[spin_20s_linear_infinite]" />
          </div>
        </div>
      ),
    },
    {
      id: 'servicos',
      category: 'Serviços Automotivos',
      badge: 'Especializado',
      description: 'Montagem, balanceamento e alinhamento com cuidado técnico e equipamentos adequados para o melhor desempenho na pista.',
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#FFD000]/15 blur-lg" />
          <div className="w-14 h-14 rounded-full border-2 border-white/20 bg-gradient-to-tr from-[#111111] to-[#2a2a2a] flex items-center justify-center shadow-lg">
            <Wrench className="w-7 h-7 text-[#FFD000]" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full flex flex-col justify-center px-4 py-7 sm:py-9 md:py-11 bg-[#050505] bg-radial-accent overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FFD000]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-5 h-0.5 bg-[#FFD000] rounded-full shadow-[0_0_6px_#FFD000]" />
          <span className="text-[11px] uppercase font-extrabold tracking-[0.2em] text-[#FFD000]">
            Linha Automotiva
          </span>
          <span className="w-5 h-0.5 bg-[#FFD000] rounded-full shadow-[0_0_6px_#FFD000]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wider mb-1.5 text-center">
          {COPY.PRODUCTS_TITLE}
        </h2>
        <p className="text-xs text-white/60 mb-5 text-center max-w-xs">
          Qualidade certificada e suporte completo para seu trajeto.
        </p>

        {/* Product Cards Grid - More compact & proportional */}
        <div className="flex flex-col gap-2.5 w-full mb-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-left relative overflow-hidden group"
            >
              {/* Corner Yellow Glow Indicator */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#FFD000]/15 to-transparent pointer-events-none" />

              {/* Graphic Icon */}
              <div className="shrink-0">{item.icon}</div>

              {/* Card Content */}
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-center justify-between mb-0.5 gap-2">
                  <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-wide truncate">
                    {item.category}
                  </h3>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#FFD000] bg-[#FFD000]/10 px-1.5 py-0.5 rounded border border-[#FFD000]/20 shrink-0">
                    {item.badge}
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-white/70 leading-snug mb-2 line-clamp-2">
                  {item.description}
                </p>

                {/* Direct Action Button */}
                <div>
                  <a
                    href={LINKS.WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-[#FFD000] text-black hover:bg-[#FFE033] shadow-[0_2px_8px_rgba(255,208,0,0.25)] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
                  >
                    <WhatsApp3DIcon size={15} />
                    <span>Consultar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Catalog Assistance Note */}
        <p className="text-[10px] text-white/40 text-center">
          Dúvidas sobre compatibilidade ou medidas? Converse no WhatsApp.
        </p>
      </div>
    </section>
  );
};
