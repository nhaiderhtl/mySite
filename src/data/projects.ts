// =============================================================================
//  PROJECTS  —  your 3 showcase slots.  EDIT HERE.
//
//  Each slot:
//    name        : project title
//    description : 1-2 short sentences (kept brief by design)
//    link        : repo / live URL
//    tags        : tech shown as pills on the card (free text)
//    accent      : optional hex; tints the card glow (defaults to purple)
//
//  Add/remove array entries to change how many cards render.
//  The layout is built for 3 but will reflow for any count.
// =============================================================================
export interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
  accent?: string;
}

export const projects: Project[] = [
  // ---- SLOT 1 ------------------------------------------------------------
  {
    name: 'Whispers Between Us',
    description: 'A text-based mystery in an isolated Alpine village — gather clues and build or break trust with six characters. Every choice changes how the night ends.',
    link: 'https://github.com/nhaiderhtl/whispers-between-us',
    tags: ['Prolog', 'Mystery'],
    accent: '#CC3333',
  },
  // ---- SLOT 2 ------------------------------------------------------------
  {
    name: 'Afterfall',
    description: 'An endless metro-builder: grow a subway network across an auto-expanding city and run a profitable transit system. JavaFX game with a Spring Boot ranking backend.',
    link: 'https://github.com/nhaiderhtl/Afterfall',
    tags: ['Java', 'JavaFX', 'Game'],
    accent: '#E76F00',
  },
  // ---- SLOT 3 ------------------------------------------------------------
  {
    name: 'Html Forge',
    description: 'Open-source Kotlin library to generate styled HTML from Kotlin classes. Group project I contribute to.',
    link: 'https://github.com/htmlforge-team/HtmlForge',
    tags: ['Kotlin', 'HTML', 'Open Source'],
    accent: '#03DAC6',
  },
];
