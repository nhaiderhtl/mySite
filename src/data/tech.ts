// =============================================================================
//  TECH STACK  —  single source of truth
//  Feeds BOTH the 3D hero logo cloud (src/three/TechCloud.tsx)
//  and the Stack section grid (src/components/Stack.tsx).
//
//  To add/remove a technology: edit the arrays below.
//   - `path`  : SVG path data from simple-icons (omit -> renders a text chip)
//   - `color` : display color, hand-picked for visibility on the dark bg
// =============================================================================
import {
  siOpenjdk, siJavascript, siTypescript, siDocker, siNodedotjs, siGnubash,
  siJetbrains, siGithub, siGit, siDotnet, siReact, siVuedotjs, siAvaloniaui,
  siHtml5, siExpress,
} from 'simple-icons';

export interface Tech {
  name: string;
  /** simple-icons 24x24 path data; undefined -> text-chip fallback */
  path?: string;
  /** display color (curated for dark background readability) */
  color: string;
}

export const languages: Tech[] = [
  { name: 'Java',       path: siOpenjdk.path,    color: '#E76F00' },
  { name: 'C#',                                  color: '#9179C0' }, // no brand icon
  { name: 'JavaScript', path: siJavascript.path, color: '#F7DF1E' },
  { name: 'TypeScript', path: siTypescript.path, color: '#3178C6' },
  { name: 'SQL',                                 color: '#4F91D8' }, // no brand icon
  { name: 'PL/SQL',                              color: '#F80000' }, // no brand icon
  { name: 'Prolog',                              color: '#CC3333' }, // no brand icon
];

export const tools: Tech[] = [
  { name: 'Git',           path: siGit.path,      color: '#F03C2E' },
  { name: 'Node.js',       path: siNodedotjs.path, color: '#5FA04E' },
  { name: 'Shell',         path: siGnubash.path,  color: '#4EAA25' },
  { name: 'Docker',        path: siDocker.path,   color: '#2496ED' },
  { name: 'JetBrains IDEs', path: siJetbrains.path, color: '#FF318C' },
  { name: 'GitHub',        path: siGithub.path,   color: '#FFFFFF' },
];

export const frameworks: Tech[] = [
  { name: '.NET',     path: siDotnet.path,    color: '#9D7BFF' },
  { name: 'JavaFX',                           color: '#ED8B00' }, // no brand icon
  { name: 'React',    path: siReact.path,     color: '#61DAFB' },
  { name: 'Vue',      path: siVuedotjs.path,  color: '#4FC08D' },
  { name: 'Avalonia', path: siAvaloniaui.path, color: '#4C7DFF' },
  { name: 'HTML & CSS', path: siHtml5.path,   color: '#E34F26' },
  { name: 'Express',  path: siExpress.path,   color: '#FFFFFF' },
];

export const skillGroups = [
  { title: 'Languages', items: languages },
  { title: 'Tools & Platforms', items: tools },
  { title: 'Frameworks & Libraries', items: frameworks },
];

/** Flat list used by the 3D hero cloud. */
export const allTech: Tech[] = [...languages, ...tools, ...frameworks];
