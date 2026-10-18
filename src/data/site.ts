// Site-wide content. Edit here, not in components.
// TODO(links): replace every value marked TODO before launch (see README "Before you launch").

export const site = {
  name: 'Zoobia Saifullah',
  initial: 'Z',
  title: 'Zoobia Saifullah · UX researcher + designer',
  description:
    'UX researcher and designer studying human-computer interaction at NJIT. Case studies in UX research, AI product design and accessibility.',
  email: 'zoobias.saif@gmail.com',
  copyright: '© 2026 Zoobia Saifullah · zs295@njit.edu',
  links: {
    github: 'https://github.com/zoobiasaifullah',
    linkedin: 'https://www.linkedin.com/in/zoobia-saifullah-syeda/', // TODO: your LinkedIn URL
    x: '#', // TODO: your X URL (or delete the X button in ContactCard.astro)
    resume: '#', // TODO: path to your PDF in /public (for example '/zoobia-saifullah-resume.pdf')
    paper: '#', // TODO: ACM link to "Like, Comment & Caption"
  },
} as const;

export const navLinks = [
  { label: 'Work', href: '/#work', section: 'work' },
  { label: 'Research', href: '/#research', section: 'research' },
  { label: 'About', href: '/#about', section: 'about' },
] as const;

export const hero = {
  chip: 'UX researcher + designer · HCI at NJIT',
  headline: 'Making technology useful for everyone.',
  intro:
    "Hi, I'm Zoobia! I study human-computer interaction at NJIT's Albert Dorman Honors College and spent this summer as a UX Research Intern at Amplify. I make apps that are user-friendly, solve problems, and never make you scream into the void.",
};

export const research = {
  eyebrow: 'Research · NJIT',
  title: 'Making captions accessible for everyone',
  body: 'I co-authored “Like, Comment & Caption,” a systematic review of a decade of research (2015–2025) on captions in social media video, mapping accessibility barriers that affect 1B+ social media users. It received an Honorable Mention at ACM CHI 2026, an award for the top 5% of accepted papers.',
  venue: 'ACM CHI 2026 · Honorable Mention',
  role: 'Co-author',
  highlights: [
    { value: '36', label: 'peer-reviewed studies synthesized across HCI, media, education and language learning' },
    { value: '900+', label: 'data points synthesized through thematic analysis and affinity mapping' },
    { value: 'Top 5%', label: 'of accepted CHI 2026 papers, recognized with an Honorable Mention Award' },
  ],
  exploring: [
    {
      title: 'AI in design',
      body: 'Testing AI tools for ideation, synthesis and prototyping, and learning where they help without replacing critical thinking.',
    },
    {
      title: 'Interaction design',
      body: 'Sharpening microinteractions, motion and spatial hierarchy so interfaces feel more fluid and engaging.',
    },
  ],
};

export const about = {
  title: 'I value the small moments',
  lead: "I'm an HCI student at NJIT's Albert Dorman Honors College. I spend a lot of time thinking about the small moments that shape how people experience technology, and how to make them better.",
  body: "In usability tests and interviews I watch for the micro-hesitations, the slight confusion in someone's voice, the moment something just clicks. Lately that curiosity points at AI - I want to build technology experiences people can actually trust.",
  location: 'Based in NYC / NJ',
  tools: [
    'Figma', 'Framer', 'Dovetail', 'Miro', 'Maze', 'Rally',
    'Qualtrics', 'SurveyMonkey', 'MAXQDA', 'Looker', 'SPSS', 'Adobe Suite',
  ],
  // Image names resolve to files in src/assets/images (see assets/images/README.md).
  // d = desktop position inside the 480x600 collage, m = mobile position inside the 358x500 collage.
  // "me" shows in the hero on desktop and joins the collage on mobile.
  polaroids: [
    { id: 'me', caption: "that's me!", image: 'hero-polaroid-swing', alt: 'Zoobia on a swing at sunset', mobileOnly: true, d: { x: 0, y: 0, rot: 0 }, m: { x: 6, y: 6, rot: -3 } },
    { id: 'lens', caption: 'through my lens', image: 'about-times-square', alt: 'Times Square at night', d: { x: 0, y: 8, rot: -4 }, m: { x: 184, y: 26, rot: 3 } },
    { id: 'creating', caption: 'creating', image: 'about-painting', alt: 'Zoobia painting outdoors', d: { x: 236, y: 56, rot: 3 }, m: { x: 10, y: 252, rot: 2 } },
    { id: 'friends', caption: 'i love making new friends', image: 'about-cat', alt: 'Zoobia petting a gray cat', d: { x: 108, y: 318, rot: -2 }, m: { x: 180, y: 268, rot: -2 } },
  ],
};

export const experience = {
  title: "Where I've worked",
  roles: [
    {
      role: 'UX Research Intern',
      org: 'Amplify Education',
      dates: 'Jun – Aug 2026',
      // NDA: remove participant counts and survey details before launch (flagged in the brief).
      description:
        'Led a post-launch study of a K–2 practice feature: 12 teacher interviews, synthesis in Dovetail and Miro, and a shareout to product, design and curriculum. Also coded 100+ NPS comments and designed a statewide survey.',
    },
    {
      role: 'UX Accessibility Researcher',
      org: 'New Jersey Institute of Technology',
      dates: 'Jun – Apr 2026',
      description:
        'Co-authored a CHI 2026 paper (Honorable Mention, top 5%) on caption accessibility and synthesized 900+ data points through thematic analysis.',
    },
    {
      role: 'UX Design Tutor',
      org: 'Norma J. Clayton Learning Center, NJIT',
      dates: 'Oct 2024 – May 2026',
      description: 'Led 20+ UX heuristic evaluations and coached 10+ students on usability, WCAG and rapid prototyping.',
    },
  ],
  earlier: [
    { role: 'UX Research & Design Lead', org: 'Social X Lab, NJ', dates: '2024' },
    { role: 'Sales & Marketing Intern', org: 'EFU Life, Pakistan', dates: '2023' },
    { role: 'Content Marketing Intern', org: 'Cancer Foundation Hospital, Pakistan', dates: '2022' },
  ],
};

export const contact = {
  handwritten: 'say hi!',
  title: "Let's connect.",
  body: "Have a role, project or research idea in mind? I'd love to hear about it.",
};
