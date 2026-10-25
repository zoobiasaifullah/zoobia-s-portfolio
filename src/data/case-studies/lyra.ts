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
    timeline: '6 weeks',
    tools: 'Figma, FigJam, Photoshop, Trello',
  },
  next: 'bucketize',
  sections: [
    {
      number: '01',
      title: 'The challenge',
      blocks: [
        {
          t: 'p',
          text: 'Students are increasingly turning to AI for quick academic solutions, but this convenience comes at a cost. Professors report declining critical thinking skills and surface-level learning as students become dependent on AI-generated answers rather than developing deep understanding.',
        },
        { t: 'callout', label: 'How might we', text: 'How might we design an AI tool that enhances learning rather than replacing the thinking process?' },
      ],
    },
    {
      number: '02',
      title: 'Research approach',
      blocks: [
        { t: 'p', text: 'We conducted mixed-methods research to understand both sides of this educational challenge:' },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Literature review', text: "Analyzed existing AI education tools, including Khanmigo and Duolingo's AI tutors, and identified key issues including confirmation bias and automation bias." },
            { title: 'Student survey', text: 'Surveyed 60+ participants about current AI usage patterns in learning and their pain points.' },
            { title: 'Professor interviews', text: "Explored educator perspectives on AI's impact on learning." },
          ],
        },
        { t: 'h3', text: 'Key insights' },
        { t: 'h3', text: 'Students revealed' },
        {
          t: 'stats',
          items: [
            { value: '82%', label: 'use AI primarily for speed and efficiency' },
            { value: '3.6%', label: 'use AI intentionally to deepen understanding' },
          ],
        },
        {
          t: 'themes',
          items: [
            { title: 'Some feel guilty', note: "Some students feel guilty submitting AI work they do not fully comprehend." },
            { title: "AI isn't always reliable", note: 'Pain points include inaccurate answers and ineffective prompting.' },
          ],
        },
        { t: 'h3', text: 'Professors emphasized' },
        {
          t: 'quote',
          text: "Students don't think AI is a collaboration tool, they think of it as a do-my-homework tool.",
          attribution: 'Professor interview',
        },
        {
          t: 'quote',
          text: "I ask questions, then follow up with more questions, that's how students start thinking. AI skips that process.",
          attribution: 'Professor interview',
        },
        { t: 'callout', label: 'The core problem', text: 'AI tools provide immediate answers without fostering the reflective questioning process essential for deep learning.' },
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
            { value: '78%', label: 'rated account setup highly intuitive (5/5)' },
            { value: '82%', label: 'successfully reviewed learned concepts' },
            { value: '100%', label: 'found the mind maps useful for review' },
            { value: '100%', label: 'broke down answers using a prompted chat mode' },
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
