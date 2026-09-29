import React from 'react';

interface NavigationDotsProps {
  activeSection: number;
  onSelect: (index: number) => void;
  sectionNames: string[];
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  activeSection,
  onSelect,
  sectionNames,
}) => {
  return (
    <nav
      aria-label="Navegação das seções"
      className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3.5 bg-black/60 backdrop-blur-md py-3.5 px-2 rounded-full border border-white/10 shadow-2xl"
    >
      {sectionNames.map((name, idx) => {
        const isActive = activeSection === idx;
        return (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            aria-label={`Ir para seção ${name}`}
            className="group relative flex items-center justify-center p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] rounded-full"
          >
            {/* Tooltip on desktop hover */}
            <span className="pointer-events-none absolute right-7 px-2.5 py-1 rounded bg-[#101010] border border-white/15 text-[11px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:block shadow-lg">
              {name}
            </span>

            {/* Dot Indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-[#FFD000] shadow-[0_0_12px_#FFD000]'
                  : 'w-2 h-2 bg-white/30 group-hover:bg-white/70 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
