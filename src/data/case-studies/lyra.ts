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
    tools: 'Figma, FigJam, Photoshop, Trello, Google Workspace',
  },
  next: 'bucketize',
  sections: [
    {
      number: '01',
      title: 'The challenge',
      blocks: [
        {
          t: 'statement',
          text: 'Students were not treating AI as a collaborator. They were treating it as a way to finish the assignment.',
        },
        {
          t: 'p',
          text: 'Students are increasingly turning to AI for quick academic solutions, but that convenience can come at the cost of critical thinking and deep understanding. Professors described students submitting work they could not explain once the AI was removed from the process.',
        },
        { t: 'callout', label: 'How might we', text: 'How might we design an AI tool that enhances learning rather than replacing the thinking process?' },
      ],
    },
    {
      number: '02',
      title: 'Research and synthesis',
      blocks: [
        {
          t: 'statement',
          text: 'The research pointed to a clear tension: students wanted speed, while educators needed a process that made thinking visible.',
        },
        {
          t: 'stats',
          items: [
            { value: '60+', label: 'students surveyed about AI use and learning pain points' },
            { value: '82%', label: 'use AI primarily for speed and efficiency' },
            { value: '3.6%', label: 'use AI intentionally to deepen understanding' },
          ],
        },
        { t: 'h3', text: 'Research approach' },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Literature review', text: 'Reviewed AI education tools including Khanmigo and Duolingo AI tutors, looking for patterns such as confirmation bias and automation bias.' },
            { title: 'Student survey', text: 'Examined how students currently use AI, what they find frustrating, and whether they feel they understand work they submit with AI assistance.' },
            { title: 'Professor interviews', text: 'Learned how educators see AI changing student thinking, questioning and the feedback loop between student and teacher.' },
          ],
        },
        { t: 'h3', text: 'What we heard, clustered' },
        {
          t: 'themes',
          items: [
            { title: 'Speed beats depth', note: 'Students use AI to get through work efficiently, even when they are unsure whether they understand the result.' },
            { title: 'AI hides the struggle', note: 'When AI supplies the answer, students lose the productive struggle that helps them learn.' },
            { title: 'The feedback loop breaks', note: 'AI-generated work makes it harder for professors to see what a student actually understands and where they need help.' },
            { title: 'The tool is not the whole problem', note: 'AI may be responding to assignments that feel too difficult, low motivation or a lack of confidence asking for help.' },
          ],
        },
        { t: 'h3', text: 'What participants said' },
        {
          t: 'quote',
          text: "Students don't think AI is a collaboration tool — they think of it as a do-my-homework tool.",
          attribution: 'Professor interview',
        },
        {
          t: 'quote',
          text: 'I ask questions, then follow up with more questions — that’s how students start thinking. AI skips that process.',
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
          text: 'We designed Lyra around the part of teaching that generic AI skips: asking the next useful question.',
        },
        { t: 'h3', text: 'Design principles' },
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
          text: 'We grouped ideas around encouraging learning, encouraging review and discouraging shortcuts, then used an impact-effort matrix to focus our limited time on changes that could make the learning process more visible.',
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
      title: 'From flow to prototype',
      blocks: [
        {
          t: 'statement',
          text: 'The prototype moved from a mapped user flow to a tested learning companion, one interaction at a time.',
        },
        {
          t: 'p',
          text: 'We mapped the journey from onboarding through each chat mode and into the mind map before moving into digital screens. Paper prototypes helped us test the core interaction early; later iterations focused on making reflection feel like part of the flow rather than an extra task.',
        },
        {
          t: 'steps',
          cols: 2,
          items: [
            { title: '1. Map the flow', text: 'Defined the decision points from onboarding and the learning-style quiz through chat modes and mind-map visualization.' },
            { title: '2. Wireframe', text: 'Established the layout and interaction patterns before spending time on visual polish.' },
            { title: '3. Paper prototype', text: 'Tested the core concepts with diverse users and checked whether the interaction made sense without a finished interface.' },
            { title: '4. Build the digital prototype', text: 'Carried the strongest ideas into Figma, then iterated on transitions, navigation, feedback and reflection prompts.' },
          ],
        },
        {
          t: 'lists',
          items: [
            {
              title: 'What changed in the prototype',
              bullets: [
                'Streamlined the learning-style assessment and onboarding.',
                'Added clearer mode transitions, visual indicators and missing navigation steps.',
                'Connected mind maps more directly to chat responses and made them more interactive.',
                'Added animations, micro-interactions and confidence checks to support reflection.',
              ],
            },
          ],
        },
        {
          t: 'p',
          text: 'Lyra asks a question before giving an answer, keeps the active mode visible, and turns the conversation into a mind map students can return to. Step through the walkthrough below.',
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
          text: 'Early testing showed that the concept was understandable; the work was in making the connections and transitions feel obvious.',
        },
        {
          t: 'table',
          head: ['What testing showed', 'What we changed'],
          rows: [
            {
              found: 'The core flow was intuitive',
              foundText: 'Participants could navigate onboarding and complete the learning-style quiz without much help.',
              change: 'Streamlined the assessment and filled in missing steps so the flow stayed focused.',
            },
            {
              found: 'Mode transitions needed feedback',
              foundText: 'Participants understood the chat modes, but transitions and feedback did not always make the current state clear.',
              change: 'Added visual indicators, clearer navigation and smoother transitions.',
            },
            {
              found: 'Mind maps needed a stronger connection',
              foundText: 'Users liked using mind maps to organize knowledge, but they were difficult to reach and felt separate from the chat.',
              change: 'Added detail and interactivity, then connected mind-map content to chat responses.',
            },
            {
              found: 'Reflection prompts worked',
              foundText: 'Users responded well to interactions that asked them to analyze and reflect.',
              change: 'Added confidence checks, animations and micro-interactions to reinforce self-assessment.',
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
