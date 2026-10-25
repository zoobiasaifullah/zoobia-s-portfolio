export type Tint = 'blue' | 'lavender' | 'mint';

export type Block =
  | { t: 'p'; text: string }
  | { t: 'list'; ordered?: boolean; items: string[] }
  | { t: 'statement'; text: string } // 20px semibold lead line at the head of a section
  | { t: 'h3'; text: string } // 20px semibold sub heading
  | { t: 'callout'; label: string; text: string }
  | { t: 'note'; text: string } // small outlined chip, e.g. confidentiality
  | { t: 'questions'; items: string[] } // Q1..Qn tiles (2 columns)
  | { t: 'steps'; items: { title: string; text: string }[]; cols?: 2 | 3; variant?: 'methods' } // numbered badge cards
  | { t: 'groups'; label: string; items: { title: string; text: string }[] } // 3 plain cards
  | { t: 'chips'; label: string; items: string[] }
  | { t: 'flow'; items: { title: string; text: string; highlight?: boolean }[] } // synthesis flow
  | { t: 'stats'; items: { value: string; label: string }[] }
  | { t: 'table'; head: [string, string]; rows: { found: string; foundText: string; change: string }[] }
  | { t: 'quote'; text: string; attribution: string; draft?: boolean }
  | { t: 'figure'; image?: string; video?: string; alt: string; caption?: string; tint?: Tint }
  | { t: 'lists'; items: { title: string; bullets: string[] }[] }
  | { t: 'themes'; items: { title: string; note: string }[] }
  | { t: 'matrix'; quadrants: { ideas: { text: string; shipped?: boolean }[] }[]; caption: string }
  | { t: 'link'; text: string; href: string }
  | { t: 'walkthrough' };

export interface Section {
  number: string;
  title: string;
  blocks: Block[];
}

export interface CaseStudy {
  slug: string;
  tint: Tint;
  eyebrow: string;
  title: string;
  lede: string;
  tags: string[];
  meta: { role: string; team: string; timeline: string; tools: string };
  heroImage?: string;
  sections: Section[];
  next: string; // slug of the next case study
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: { label: string; variant: 'accent' | 'plain' }[];
  role: string;
  team: string;
  timeline: string;
  tint: Tint;
  thumb: { kind: 'browser'; image: string; alt: string } | { kind: 'screens'; images: { image: string; alt: string }[] };
  nextTitle: string;
  nextSummary: string;
}
