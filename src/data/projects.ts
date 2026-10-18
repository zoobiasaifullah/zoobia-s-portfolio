import type { Project } from './types';

// Homepage cards + "Next case study" blocks. Order = order on the page.
export const projects: Project[] = [
  {
    slug: 'k2-practice-games',
    title: 'K-2 Practice Games',
    summary:
      'A post-release study with K–2 teachers on how classroom practice games fit into the school day, and how to design them for social relationship development.',
    tags: [
      { label: 'UX research · EdTech', variant: 'accent' },
      { label: 'Amplify · Summer 2026', variant: 'plain' },
    ],
    role: 'UX Research Intern',
    team: 'Mentored by a Senior UX Researcher',
    timeline: '3 weeks',
    tint: 'blue',
    thumb: { kind: 'browser', image: 'amplify-thumbnail-goblin', alt: 'Practice game screen with a goblin character and letter tiles' },
    nextTitle: 'K-2 Practice Games: designing for connection in early learning',
    nextSummary:
      'A post-release UX research study with K–2 teachers on how practice games can fit more naturally into the school day.',
  },
  {
    slug: 'lyra',
    title: 'Lyra',
    summary:
      'An AI study companion that uses Socratic questions and mind maps so students learn to think critically instead of copying answers.',
    tags: [{ label: 'AI · EdTech', variant: 'accent' }],
    role: 'UX Design Team Lead',
    team: '4 students',
    timeline: '6 weeks',
    tint: 'lavender',
    thumb: {
      kind: 'screens',
      images: [
        { image: 'lyra-intro', alt: 'Lyra feature intro screen' },
        { image: 'lyra-choose-mode', alt: 'Lyra choose a mode screen' },
        { image: 'lyra-chat', alt: 'Lyra chat screen' },
        { image: 'lyra-mind-map', alt: 'Lyra mind map screen' },
      ],
    },
    nextTitle: 'Lyra: an AI tutor that helps students develop critical thinking',
    nextSummary:
      'Leading a 4-person team to design an AI study companion that asks Socratic questions instead of handing out answers.',
  },
  {
    slug: 'bucketize',
    title: 'Bucketize',
    summary:
      'An AI knowledge system that sorts a professor\'s index cards and notes into searchable "buckets" of peer advice for students.',
    tags: [{ label: 'AI · Knowledge sharing', variant: 'accent' }],
    role: 'UX Designer',
    team: '4 students',
    timeline: '3 weeks',
    tint: 'mint',
    thumb: {
      kind: 'screens',
      images: [
        { image: 'bucketize-welcome', alt: 'Bucketize welcome screen' },
        { image: 'bucketize-scan', alt: 'Scanning an index card' },
        { image: 'bucketize-tags', alt: 'AI-generated tags screen' },
        { image: 'bucketize-bucket', alt: 'The organized Personas bucket' },
      ],
    },
    nextTitle: 'Bucketize: passing down what past students learned',
    nextSummary:
      "An AI system that sorts a professor's notes into searchable buckets, reshaped by usability tests with 6 users.",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)!;
