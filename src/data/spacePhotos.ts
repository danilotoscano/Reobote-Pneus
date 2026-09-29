export interface SpaceSlide {
  id: number;
  photoNumber: number;
  label: string;
  title: string;
  src: string;
  alt: string;
}

/**
 * 5 Slides of "CONHEÇA NOSSO ESPAÇO"
 * Mapeamento obrigatório solicitado:
 * FOTO 0 (reobote-0.png) → SLIDE 1
 * FOTO 1 (reobote-1.png) → SLIDE 2
 * FOTO 2 (reobote-2.png) → SLIDE 3
 * FOTO 3 (reobote-3.png) → SLIDE 4
 * FOTO 4 (reobote-4.png) → SLIDE 5
 */
export const SPACE_SLIDES: SpaceSlide[] = [
  {
    id: 1,
    photoNumber: 0,
    label: 'Foto 0 · Slide 1',
    title: 'Fachada e Entrada da Loja',
    src: '/reobote-0.png',
    alt: 'Reobote Pneus - Fachada e Entrada da Loja (Foto 0)',
  },
  {
    id: 2,
    photoNumber: 1,
    label: 'Foto 1 · Slide 2',
    title: 'Recepção e Atendimento',
    src: '/reobote-1.png',
    alt: 'Reobote Pneus - Balcão de Atendimento e Conveniência (Foto 1)',
  },
  {
    id: 3,
    photoNumber: 2,
    label: 'Foto 2 · Slide 3',
    title: 'Pátio e Boxes de Serviços',
    src: '/reobote-2.png',
    alt: 'Reobote Pneus - Boxes e Baia de Serviços Automotivos (Foto 2)',
  },
  {
    id: 4,
    photoNumber: 3,
    label: 'Foto 3 · Slide 4',
    title: 'Rampa de Alinhamento e Geometria',
    src: '/reobote-3.png',
    alt: 'Reobote Pneus - Rampa de Alinhamento Computadorizado (Foto 3)',
  },
  {
    id: 5,
    photoNumber: 4,
    label: 'Foto 4 · Slide 5',
    title: 'Oficina e Elevador Hidráulico',
    src: '/reobote-4.png',
    alt: 'Reobote Pneus - Oficina Mecânica e Elevador Hidráulico (Foto 4)',
  },
];
