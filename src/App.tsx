import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { ReviewSection } from './components/ReviewSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { AboutSection } from './components/AboutSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { NavigationDots } from './components/NavigationDots';

const SECTION_NAMES = [
  'Início',
  'Produtos',
  'Avaliação',
  'Localização',
  'Instagram',
  'Sobre a Empresa',
  'Encerramento',
];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Smooth scroll to a specific section by index
  const scrollToSection = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(index);
    }
  };

  // Scroll to the next section (Nossos produtos)
  const handleScrollNext = () => {
    scrollToSection(1);
  };

  // Scroll back to top
  const handleBackToTop = () => {
    scrollToSection(0);
  };

  // IntersectionObserver to sync the active dot with user scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, options);

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] text-[#D9D9D9] selection:bg-[#FFD000] selection:text-black overflow-y-auto overflow-x-hidden scroll-smooth"
    >
      {/* Vertical Navigation Dots for Carousel Feeling */}
      <NavigationDots
        activeSection={activeSection}
        onSelect={scrollToSection}
        sectionNames={SECTION_NAMES}
      />

      {/* Persistent Floating WhatsApp CTA with 3D Gloss */}
      <FloatingWhatsApp />

      {/* 1. Conteúdo inicial / Hero */}
      <div
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        id="hero"
        className="w-full scroll-mt-4 sm:scroll-mt-6"
      >
        <HeroSection onScrollNext={handleScrollNext} />
      </div>

      {/* 2. Nossos Produtos */}
      <div
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        id="produtos"
        className="w-full scroll-mt-6 sm:scroll-mt-8"
      >
        <ProductsSection />
      </div>

      {/* 3. Avaliação no Google */}
      <div
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        id="avaliacao"
        className="w-full scroll-mt-6 sm:scroll-mt-8"
      >
        <ReviewSection />
      </div>

      {/* 4. Minha Localização / Visite Nossa Loja */}
      <div
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        id="localizacao"
        className="w-full scroll-mt-6 sm:scroll-mt-8"
      >
        <LocationSection />
      </div>

      {/* 5. Instagram */}
      <div
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        id="instagram"
        className="w-full scroll-mt-6 sm:scroll-mt-8"
      >
        <InstagramSection />
      </div>

      {/* 6. Sobre a Empresa */}
      <div
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
        id="sobre"
        className="w-full scroll-mt-6 sm:scroll-mt-8"
      >
        <AboutSection />
      </div>

      {/* 7. Logomarca inferior / Rodapé */}
      <div
        ref={(el) => {
          sectionRefs.current[6] = el;
        }}
        id="encerramento"
        className="w-full scroll-mt-6 sm:scroll-mt-8"
      >
        <FooterSection onBackToTop={handleBackToTop} />
      </div>
    </div>
  );
}
