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
          t: 'list',
          ordered: true,
          items: [
            'Literature review: Analyzed existing AI education tools, including Khanmigo and Duolingo’s AI tutors, and identified key issues including confirmation bias and automation bias.',
            'Student survey (60+ participants): Explored current AI usage patterns in learning and pain points.',
            'Professor interviews: Examined educator perspectives on AI’s impact on learning.',
          ],
        },
        { t: 'p', text: 'The literature review helped us understand the risks and possibilities already identified in AI-supported education before we designed our own research. Existing guidance and research describe how AI can support feedback and personalized practice, while also warning that people may over-trust automated output when they cannot easily evaluate it [1][2].' },
        { t: 'link', text: '[1] UNESCO, Guidance for generative AI in education and research', href: 'https://unesdoc.unesco.org/ark:/48223/pf0000386693' },
        { t: 'link', text: '[2] Kasneci et al., ChatGPT for good? On opportunities and challenges of large language models for education', href: 'https://doi.org/10.1016/j.lindif.2023.102274' },
        { t: 'h3', text: 'Key insights' },
        {
          t: 'list',
          items: [
            '82% of students use AI primarily for speed and efficiency.',
            'Only 3.6% use AI intentionally to deepen understanding.',
            'Some students feel guilty submitting AI work they do not fully comprehend.',
            'Pain points include AI inaccuracies and ineffective prompting.',
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
      title: 'Design direction',
      blocks: [
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
        {
          t: 'p',
          text: 'We focused the solution on two connected parts: chat modes that ask before they answer, and a mind map that remembers the thread between sessions. Lyra keeps the active mode visible while you work and turns the conversation into a mind map you can return to.',
        },
        { t: 'walkthrough' },
        {
          t: 'figure',
          video: 'lyra-demo',
          alt: 'Lyra interactive learning companion demo',
          caption: 'Lyra prototype demo.',
        },
      ],
    },
    {
      number: '04',
      title: 'Design process',
      blocks: [
        { t: 'p', text: 'We moved from the principles into a focused process: map the learning flow, test the structure early, then prioritize what was worth building.' },
        {
          t: 'steps',
          cols: 2,
          items: [
            { title: 'Map the flow', text: 'We mapped how a student would move from a question to a response, reflection, and review.' },
            { title: 'Wireframe', text: 'We turned the principles into a chat flow, mode selection, and a mind map that could carry context forward.' },
            { title: 'Paper prototype', text: 'We tested the flow with students before committing to a digital interface.' },
            { title: 'Digital prototype', text: 'We brought the strongest direction into Figma and tested how the pieces worked together.' },
          ],
        },
        {
          t: 'figure',
          image: 'lyra-user-flow',
          alt: 'Lyra user flow showing onboarding, chat modes, quiz, settings, and mind map paths',
          caption: 'User flow mapping the main route through onboarding, chat, and review.',
        },
        {
          t: 'figure',
          image: 'lyra-wireframes',
          alt: 'Lyra wireframes showing onboarding, chat, mind map, settings, and supporting interface concepts',
          caption: 'Early wireframes for the onboarding, chat, mind map, and settings flows.',
        },
        { t: 'h3', text: 'Prioritizing what to build' },
        {
          t: 'p',
          text: 'We sorted the remaining ideas by impact and effort, then used the matrix to decide what belonged in the prototype.',
        },
        {
          t: 'figure',
          image: 'lyra-impact-effort',
          alt: 'Impact and effort matrix used to prioritize Lyra design ideas',
          caption: 'Impact-effort matrix used to prioritize the prototype scope.',
        },
        {
          t: 'p',
          text: 'The top-left cluster became the sprint: adaptive chat modes, guiding responses and an end-of-session confidence check, plus the one high-effort bet worth making, keeping the mind map in sync with the chat.',
        },
      ],
    },
    {
      number: '05',
      title: 'Testing and results',
      blocks: [
        { t: 'p', text: 'Testing showed that the mind map needed to stay connected to the conversation to be useful.' },
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
            { value: '78%', label: 'of students rated account setup highly intuitive (5/5)' },
            { value: '82%', label: 'of students successfully reviewed learned concepts' },
            { value: '100%', label: 'of students found the mind maps useful for review' },
            { value: '100%', label: 'of students broke down answers using a prompted chat mode' },
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
