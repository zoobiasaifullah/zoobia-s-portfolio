import type { CaseStudy } from '../types';

export const bucketize: CaseStudy = {
  slug: 'bucketize',
  tint: 'mint',
  eyebrow: 'Case study · AI · Knowledge sharing',
  title: 'Professors have years of wisdom for students, but too much on their plate to reach everyone.',
  lede: "Bucketize is an AI-powered system that turns a professor's years of notes into buckets of peer wisdom, so what past students learned reaches the ones coming after them.",
  tags: ['AI', 'Education', 'Usability testing'],
  meta: {
    role: 'UX Designer',
    team: '4 students',
    timeline: '3 weeks',
    tools: 'Figma, FigJam, Miro, Google Workspace',
  },
  next: 'k2-practice-games',
  sections: [
    {
      number: '01',
      title: 'The challenge',
      blocks: [
        {
          t: 'p',
          text: 'Professors accumulate years of valuable insight from the students who came before, through index cards, reports and conversations. Organizing and sharing it by hand takes so much time that it rarely reaches the students who could use it next.',
        },
        {
          t: 'callout',
          label: 'How might we',
          text: "How might we connect what past students learned to the students learning it next, without adding to a professor's workload?",
        },
      ],
    },
    {
      number: '02',
      title: 'Research',
      blocks: [
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Professor interview', text: 'A 1-hour in-depth interview on current workflows and pain points.' },
            { title: 'Student survey', text: '28 students on support needs beyond coursework: mentorship, skill gaps and career opportunities.' },
            { title: 'Affinity mapping', text: 'Organized user data points into patterns and opportunities.' },
          ],
        },
        {
          t: 'figure',
          image: 'bucketize-affinity-map',
          alt: 'Affinity map of the professor interview and student survey data points',
          caption: 'Affinity mapping across the professor interview and student survey.',
          tint: 'mint',
        },
        {
          t: 'lists',
          items: [
            {
              title: 'What the professor told us',
              bullets: [
                'Wants “Knowledge Buckets” that combine index cards, reports and insights',
                'Spends too much time categorizing information by hand',
                'Struggles to keep continuity between past and current students',
              ],
            },
            {
              title: 'What students told us',
              bullets: [
                'Want connections with past students and alumni for guidance',
                'Need help identifying relevant skills, tools and career paths',
                'Struggle to reach knowledge professors have built up over years',
              ],
            },
          ],
        },
        {
          t: 'callout',
          label: 'Core problem',
          text: "Sorting years of notes by hand took enough of a professor's time that wisdom built up over years of teaching rarely reached the next class of students who needed it.",
        },
      ],
    },
    {
      number: '03',
      title: 'Design direction',
      blocks: [
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Automate organization', text: 'Let AI categorize and tag content without manual effort.' },
            { title: 'Preserve connection', text: 'Keep the connection between past and current students, while cutting the busywork.' },
            { title: 'Enable discovery', text: 'Give students an intuitive way to find the knowledge past students already worked out.' },
          ],
        },
        {
          t: 'p',
          text: "Primary users: professors who want to pass on years of accumulated knowledge without it taking over their time. Secondary: students looking for guidance from the people who sat where they're sitting now.",
        },
      ],
    },
    {
      number: '04',
      title: 'The solution',
      blocks: [
        {
          t: 'p',
          text: 'Bucketize scans a professor’s materials, sorts them into thematic buckets, and lets students discover and request knowledge that past students already worked out.',
        },
        {
          t: 'steps',
          cols: 2,
          items: [
            { title: 'AI content scanning', text: 'Detects keywords in uploaded index cards, reports and notes, and builds organized collections.' },
            { title: 'Context-aware search', text: 'Understands intent beyond keywords to surface buckets that fit a student’s course and situation.' },
            { title: 'Personalized collections', text: 'AI-generated groupings like “First-year motivation,” “Career guidance” and “Study strategies.”' },
            { title: 'Interactive engagement', text: 'Students request content and discuss shared knowledge without overwhelming the professor.' },
          ],
        },
        {
          t: 'figure',
          video: 'bucketize-prototype',
          alt: 'Scanning index cards on mobile and turning them into organized buckets',
          caption: 'Scanning index cards on mobile and turning them into organized buckets.',
          tint: 'mint',
        },
      ],
    },
    {
      number: '05',
      title: 'Usability testing',
      blocks: [
        {
          t: 'p',
          text: 'We tested with 6 users, including a professor, on three tasks: scanning and uploading index cards, sending AI-recommended collections to students, and generating course-specific buckets.',
        },
        {
          t: 'table',
          head: ['What testing showed', 'What we changed'],
          rows: [
            {
              found: 'Navigation confusion',
              foundText: 'Similar icons for “Bucket Cards” and “Bucket AI” disrupted the workflow.',
              change: 'Redesigned the navigation so each function has a distinct icon.',
            },
            {
              found: 'AI entry point mismatch',
              foundText: 'Users expected to ask the AI through the search bar, not a separate tab.',
              change: 'Moved AI interaction into the search pattern users already expected.',
            },
            {
              found: 'Weak visual feedback',
              foundText: 'Gray placeholder text looked inactive, so users skipped it.',
              change: 'Strengthened contrast and visual hierarchy across the interface.',
            },
            {
              found: 'Sharing pattern mismatch',
              foundText: 'Users reached for the three-dot menu instead of the mail icon.',
              change: 'Adopted familiar sharing conventions.',
            },
          ],
        },
      ],
    },
    {
      number: '06',
      title: 'Reflection',
      blocks: [
        {
          t: 'quote',
          text: "It's easy to keep designing for the model in your head long after the people testing it have shown you a different one.",
          attribution: 'What Bucketize taught me',
        },
        {
          t: 'p',
          text: 'Watching users click the search bar again and again when asked to “ask the AI” showed me how familiarity with our own design can blind us to how people actually behave. Now I ask “does this match how users naturally think?” instead of “does this work for us?”',
        },
        { t: 'h3', text: 'Challenges' },
        {
          t: 'p',
          text: 'Scope: we started too broad and had to refocus on core user needs. Assumptions: our design intuitions and real user behavior differed more than we expected. Coordination: a tight timeline and different schedules needed structured communication and clear roles.',
        },
        {
          t: 'p',
          text: "That's the point of Bucketize: what one class of students learns shouldn't have to be relearned from scratch by the next one.",
        },
      ],
    },
  ],
};
