import React, { useState, useRef } from 'react';
import { SPACE_SLIDES } from '../data/spacePhotos';
import { ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';

export const SpaceCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = SPACE_SLIDES.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Gesture for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> next photo
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev photo
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = SPACE_SLIDES[currentIndex];

  return (
    <section className="relative w-full flex flex-col justify-center px-4 py-7 sm:py-9 md:py-11 bg-[#050505] bg-carbon overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFD000]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-md md:max-w-lg mx-auto w-full flex flex-col items-center">
        {/* Top Sporty Accent with Twin Yellow Lines */}
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-5 h-0.5 bg-[#FFD000] rounded-full shadow-[0_0_6px_#FFD000]" />
          <span className="text-[11px] uppercase font-extrabold tracking-[0.2em] text-[#FFD000]">
            Estrutura & Loja
          </span>
          <span className="w-5 h-0.5 bg-[#FFD000] rounded-full shadow-[0_0_6px_#FFD000]" />
        </div>

        {/* Required Exact Title - Responsive with clamp */}
        <h2 className="text-[clamp(1.25rem,5.2vw,1.875rem)] font-black uppercase text-white tracking-wider mb-1.5 text-center leading-tight">
          CONHEÇA NOSSO ESPAÇO
        </h2>
        <p className="text-[clamp(0.75rem,2.8vw,0.875rem)] text-white/70 mb-4 text-center max-w-xs sm:max-w-sm px-2 leading-relaxed">
          Instalações modernas e preparadas para oferecer o melhor atendimento em Caucaia.
        </p>

        {/* Carousel Frame - Touch Sensitive & Stable Height */}
        <div
          className="relative w-full glass-panel rounded-2xl sm:rounded-3xl border border-white/15 p-2 sm:p-2.5 shadow-2xl overflow-hidden select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Display Area - Fixed Height for visual stability */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
            {imageErrors[currentSlide.id] ? (
              // Styled Automotive Fallback Container
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD000]/10 border border-[#FFD000]/30 flex items-center justify-center mb-3 text-[#FFD000] shadow-[0_0_15px_rgba(255,208,0,0.15)]">
                  <Camera className="w-7 h-7" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD000]/10 border border-[#FFD000]/30 text-[11px] font-extrabold uppercase tracking-wider text-[#FFD000] mb-2">
                  <span>Foto {currentSlide.photoNumber}</span>
                  <span className="text-white/40">➔</span>
                  <span>Slide {currentSlide.id}</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-1.5">
                  {currentSlide.title}
                </h3>
                <p className="text-[11px] font-mono text-white/50 max-w-xs bg-white/5 px-2.5 py-1 rounded-md border border-white/10 mt-1">
                  Origem: {currentSlide.src}
                </p>
              </div>
            ) : (
              // Active Photo Slide with Object Cover
              <img
                key={currentSlide.id}
                src={currentSlide.src}
                alt={currentSlide.alt}
                referrerPolicy="no-referrer"
                onError={() =>
                  setImageErrors((prev) => ({ ...prev, [currentSlide.id]: true }))
                }
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="eager"
              />
            )}

            {/* Top Badge: Slide Counter & Title */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
              <div className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFD000] shadow-[0_0_6px_#FFD000]" />
                <span className="text-[#FFD000]">Slide {currentIndex + 1}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/90">Foto {currentSlide.photoNumber}</span>
                <span className="text-white/40">·</span>
                <span className="truncate max-w-[130px] sm:max-w-none">{currentSlide.title}</span>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white/70 hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FFD000]" />
                <span>Caucaia, CE</span>
              </div>
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 text-white hover:text-[#FFD000] border border-white/20 hover:border-[#FFD000]/60 backdrop-blur-md shadow-lg flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Próxima foto"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/90 active:scale-95 text-white hover:text-[#FFD000] border border-white/20 hover:border-[#FFD000]/60 backdrop-blur-md shadow-lg flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Navigation Indicators (● ○ ○ ○ ○) */}
          <div className="pt-3 pb-1 flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2" aria-label="Navegar entre as fotos">
              {SPACE_SLIDES.map((slide, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para ${slide.label}: ${slide.title}`}
                    className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD000] rounded-full group"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-6 sm:w-8 h-2 bg-[#FFD000] shadow-[0_0_8px_#FFD000]'
                          : 'w-2 h-2 bg-white/30 group-hover:bg-white/60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Swipe Help Note on Mobile */}
            <p className="text-[10px] text-white/40">
              Deslize para os lados ou use as setas para ver as fotos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
