import React from 'react';
import { LINKS, COPY } from '../data/links';
import { WhatsApp3DIcon, Instagram3DIcon, Google3DIcon, Maps3DIcon } from './icons3D';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  onBackToTop: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onBackToTop }) => {
  const quickActions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Atendimento direto',
      href: LINKS.WHATSAPP,
      icon: <WhatsApp3DIcon size={36} />,
      borderColor: 'hover:border-[#25D366]/50',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]',
      textColor: 'text-[#25D366]',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: '@reobote_pneus',
      href: LINKS.INSTAGRAM,
      icon: <Instagram3DIcon size={36} />,
      borderColor: 'hover:border-[#E1306C]/50',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(225,48,108,0.25)]',
      textColor: 'text-[#E1306C]',
    },
    {
      id: 'google',
      title: 'Avalie no Google',
      subtitle: 'Deixe sua opinião',
      href: LINKS.GOOGLE_REVIEW,
      icon: <Google3DIcon size={36} />,
      borderColor: 'hover:border-white/50',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]',
      textColor: 'text-white',
    },
    {
      id: 'location',
      title: 'Localização',
      subtitle: 'Google Maps / Rota',
      href: LINKS.LOCATION,
      icon: <Maps3DIcon size={36} />,
      borderColor: 'hover:border-[#EA4335]/50',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(234,67,53,0.25)]',
      textColor: 'text-[#EA4335]',
    },
  ];

  return (
    <footer className="relative w-full flex flex-col justify-center px-4 py-9 sm:py-12 md:py-14 bg-[#050505] bg-radial-hero overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#FFD000]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center text-center">
        {/* Official Logo with Generous Clearance to Prevent Clipping Mascot Head */}
        <div className="relative w-full max-w-[200px] sm:max-w-[230px] flex items-center justify-center pt-6 pb-2 mb-4">
          <div className="absolute inset-0 bg-[#FFD000]/15 rounded-full blur-2xl opacity-60 pointer-events-none" />
          <img
            src={LINKS.LOGO}
            alt="Reobote Pneus"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full max-h-[120px] sm:max-h-[140px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] select-none"
            loading="lazy"
          />
        </div>

        {/* High-Impact Responsive Slogan: “Rápido, seguro e sem enrolação.” */}
        <div className="relative mb-5 px-2 w-full">
          <p className="block text-[clamp(1.125rem,4.6vw,1.875rem)] font-black uppercase tracking-tight text-white leading-snug sm:leading-tight text-center max-w-xs sm:max-w-md mx-auto">
            <span className="text-[#FFD000]/60 select-none mr-1">&ldquo;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD000] via-[#FFE566] to-[#FFC400] text-glow-yellow">
              <span className="inline-block">Rápido, seguro e</span>{' '}
              <span className="inline-block">sem enrolação.</span>
            </span>
            <span className="text-[#FFD000]/60 select-none ml-1">&rdquo;</span>
          </p>
          <div className="w-12 h-1 bg-[#FFD000] mx-auto mt-2.5 rounded-full shadow-[0_0_8px_#FFD000]" />
        </div>

        {/* 4 Main Access Cards with 3D Icons - Scaled Proportional & Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-6">
          {quickActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel p-2.5 sm:p-3 rounded-xl flex items-center gap-3 text-left border border-white/10 ${action.borderColor} ${action.glowColor} transition-all duration-200 group active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]`}
            >
              <div className="shrink-0 transform transition-transform group-hover:scale-105">
                {action.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wide flex items-center justify-between">
                  <span>{action.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors shrink-0" />
                </div>
                <div className="text-[11px] text-white/50 truncate mt-0.5">
                  {action.subtitle}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Back To Top Button */}
        <button
          onClick={onBackToTop}
          aria-label="Voltar ao início da página"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[11px] font-semibold text-white/70 hover:text-white transition-all mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
        >
          <ArrowUp className="w-3 h-3 text-[#FFD000]" />
          <span>Voltar ao início</span>
        </button>

        {/* Clean, Non-hallucinated Minimalist Footer note */}
        <div className="text-[10px] text-white/40 space-y-0.5">
          <p>Reobote Pneus · Caucaia, Ceará</p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
