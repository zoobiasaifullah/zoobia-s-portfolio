import type { CaseStudy } from '../types';

export const lyra: CaseStudy = {
  slug: 'lyra',
  tint: 'lavender',
  eyebrow: 'Case study · AI · EdTech',
  title: 'Designing AI that helps people think, not think for them.',
  lede: 'Lyra is an AI learning companion that uses Socratic questioning and interactive mind maps, so students build understanding instead of copying answers.',
  tags: ['AI', 'EdTech', 'Team lead'],
  meta: {
    role: 'UX Design Team Lead',
    team: '4 students',
    timeline: '4 weeks',
    tools: 'Figma, FigJam, Photoshop, Trello',
  },
  next: 'bucketize',
  sections: [
    {
      number: '01',
      title: 'The challenge',
      blocks: [
        {
          t: 'statement',
          text: 'Every student we talked to already had access to AI. None of them had a reason to think before asking it something.',
        },
        {
          t: 'p',
          text: 'Students increasingly turn to AI for quick academic answers. Professors report weaker critical thinking and surface-level learning as students depend on AI-generated work instead of developing real understanding.',
        },
        { t: 'callout', label: 'How might we', text: 'How might we get students to think before AI answers, instead of after?' },
      ],
    },
    {
      number: '02',
      title: 'Research and synthesis',
      blocks: [
        {
          t: 'statement',
          text: "The four themes kept circling the same gap: students weren't short on answers, they were short on reasons to slow down first.",
        },
        {
          t: 'stats',
          items: [
            { value: '82%', label: 'of surveyed students use AI mainly for speed and efficiency' },
            { value: '3.6%', label: 'use AI intentionally to deepen their understanding' },
          ],
        },
        { t: 'h3', text: 'What we heard, clustered' },
        {
          t: 'themes',
          items: [
            { title: 'AI hides the struggle', note: 'Professors hold 15 to 16 office hours a week, and students still avoid asking for help' },
            { title: 'Speed beats depth', note: 'Students try to finish as quickly as possible, but thoughtful work needs time and space' },
            { title: 'The feedback loop breaks', note: 'Loss of the student’s authentic voice makes it hard to personalize teaching' },
            { title: 'AI is a symptom', note: 'AI may not be the root issue: assignments may be too hard, or motivation may be missing' },
          ],
        },
        { t: 'h3', text: 'What participants said' },
        // TODO: replace this placeholder with the real quote. It is visible on purpose so it is not forgotten.
        {
          t: 'quote',
          text: 'Swap in: the real quote, on asking questions to build understanding',
          attribution: 'Professor interview',
        },
      ],
    },
    {
      number: '03',
      title: 'Direction and priorities',
      blocks: [
        {
          t: 'statement',
          text: 'The direction came down to three habits we wanted Lyra to have: slow down, show its thinking, and guide rather than solve.',
        },
        { t: 'p', text: 'The research gave us three principles to design against.' },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Slow down the process', text: 'Encourage reflection before giving answers.' },
            { title: 'Make thinking visible', text: 'Help students see how concepts connect.' },
            { title: "Guide, don't solve", text: 'Use Socratic questioning to build understanding.' },
          ],
        },
        { t: 'h3', text: 'Prioritizing what to build' },
        {
          t: 'p',
          text: 'The framing was simple: make AI more of a tool than a separate brain. Ideas split into encouraging learning, encouraging review and discouraging shortcuts, then went onto an impact-effort matrix.',
        },
        {
          t: 'matrix',
          // Order: top-left (high impact, low effort), top-right (high impact, high effort),
          // bottom-left (low impact, low effort), bottom-right (low impact, high effort)
          quadrants: [
            {
              ideas: [
                { text: 'Adaptive chat modes', shipped: true },
                { text: 'Guiding responses: “you’re close, try this direction”', shipped: true },
                { text: 'Confidence check at the end of a session', shipped: true },
              ],
            },
            { ideas: [{ text: 'Mind map stays in sync with the chat', shipped: true }, { text: 'Swap one chat topic for maths or code' }] },
            { ideas: [{ text: 'Clear titles for every screen' }, { text: 'Scrollable chats' }, { text: 'Back button between modes' }] },
            { ideas: [{ text: 'Curvy display type' }, { text: 'Assets tidied into frames' }] },
          ],
          caption: 'Highlighted ideas shipped in the prototype',
        },
        {
          t: 'p',
          text: 'The top-left cluster became the sprint: adaptive chat modes, guiding responses and an end-of-session confidence check, plus the one high-effort bet worth making, keeping the mind map in sync with the chat.',
        },
      ],
    },
    {
      number: '04',
      title: 'The solution',
      blocks: [
        {
          t: 'statement',
          text: 'Two things carried the build: chat modes that ask before they answer, and a mind map that remembers the thread between sessions.',
        },
        {
          t: 'p',
          text: 'Lyra answers with a question first, keeps the active mode visible while you work, and turns the conversation into a mind map you can come back to. Step through the walkthrough below.',
        },
        { t: 'walkthrough' },
      ],
    },
    {
      number: '05',
      title: 'Testing and results',
      blocks: [
        {
          t: 'statement',
          text: "Testing settled one thing fast: the mind map only earns its place if it's wired to the conversation, not sitting next to it.",
        },
        {
          t: 'table',
          head: ['What testing showed', 'What we changed'],
          rows: [
            {
              found: 'Mode switching was unclear',
              foundText: 'Chat modes made sense, but transitions and feedback were weak.',
              change: 'Added visual indicators and clearer transitions between modes.',
            },
            {
              found: 'Mind maps felt detached',
              foundText: 'Useful for organizing knowledge, but hard to reach and not linked to chats.',
              change: 'Integrated mind maps with chat responses and added more detail.',
            },
            {
              found: 'Onboarding worked, with room to trim',
              foundText: 'Participants got through onboarding and the learning style quiz on their own, but some steps could go.',
              change: 'Streamlined the learning style assessment and filled missing steps.',
            },
            {
              found: 'Reflection needed a nudge',
              foundText: 'Users responded well to prompts that asked them to reflect.',
              change: 'Added confidence checks and micro-interactions throughout.',
            },
          ],
        },
        { t: 'h3', text: 'Final testing' },
        {
          t: 'stats',
          items: [
            { value: '+48%', label: 'task success in usability testing' },
            { value: '2x', label: 'perceived usefulness' },
            { value: '60+', label: 'users in surveys, interviews and task analysis' },
            { value: '4 weeks', label: 'from research to a tested prototype' },
          ],
        },
      ],
    },
    {
      number: '06',
      title: 'Reflection',
      blocks: [
        {
          t: 'statement',
          text: 'The gap between what students said and what their professors saw is the part I keep coming back to.',
        },
        {
          t: 'quote',
          text: "The hardest part wasn't designing Lyra. It was choosing to build something students hadn't asked for, because what they wanted in the moment wasn't what was going to help them.",
          attribution: 'What Lyra taught me',
        },
        {
          t: 'p',
          text: "Students told us they understood the material AI had helped them with. Their professors saw confusion once those same students had to work without it. That gap between the two is what pushed the whole direction toward Lyra asking questions instead of answering them, and I still check for it on every project now: what someone says they know isn't always what shows up when you actually test them on it.",
        },
        { t: 'h3', text: 'Challenges' },
        {
          t: 'p',
          text: 'A pivot under tight deadlines meant fast strategy shifts and flexible coordination. Limited time for deep interviews, so we leaned on surveys and literature. Aligning chat modes with mind maps took several iterations.',
        },
      ],
    },
  ],
};
