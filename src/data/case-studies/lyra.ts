import type { CaseStudy } from '../types';

export const lyra: CaseStudy = {
  slug: 'lyra',
  tint: 'lavender',
  eyebrow: 'Case study · AI · EdTech',
  title: 'Designing an AI tutor that makes room for thinking.',
  lede: 'Lyra is an AI learning companion that asks students to explain, reflect and make connections before it gives them an answer.',
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
          text: 'Students did not need another tool that could produce an answer. They needed a reason to slow down before accepting one.',
        },
        {
          t: 'p',
          text: 'Students were already using AI to get through difficult assignments. The problem was not simply that they used it; it was that an immediate answer could hide whether they understood the work. Professors saw the consequences when students submitted polished responses but struggled to explain them without AI.',
        },
        { t: 'callout', label: 'How might we', text: 'How might we design an AI tool that supports learning without taking over the thinking?' },
      ],
    },
    {
      number: '02',
      title: 'Understanding the gap',
      blocks: [
        {
          t: 'statement',
          text: 'The research showed a gap between what students wanted from AI and what learning required from them.',
        },
        {
          t: 'stats',
          items: [
            { value: '60+', label: 'students surveyed about AI use and learning pain points' },
            { value: '82%', label: 'use AI primarily for speed and efficiency' },
            { value: '3.6%', label: 'use AI intentionally to deepen understanding' },
          ],
        },
        { t: 'h3', text: 'How I investigated the problem' },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Literature review', text: 'I reviewed AI education tools such as Khanmigo and Duolingo AI tutors to understand how they addressed learning, confirmation bias and automation bias.' },
            { title: 'Student survey', text: 'I surveyed 60+ students about when they use AI, what they use it for and whether they feel confident explaining work they completed with its help.' },
            { title: 'Professor interviews', text: 'I spoke with professors about the changes they were seeing in students’ questions, submitted work and willingness to work through uncertainty.' },
          ],
        },
        { t: 'h3', text: 'The patterns that emerged' },
        {
          t: 'themes',
          items: [
            { title: 'Speed came first', note: 'Students often used AI to finish work efficiently, even when they were not sure they understood the result.' },
            { title: 'AI hid the struggle', note: 'When AI supplied the next step, students lost the productive struggle that could have helped them learn.' },
            { title: 'The feedback loop broke', note: 'AI-generated work made it harder for professors to tell what a student understood and where they needed help.' },
            { title: 'AI was a symptom, too', note: 'Some students may have been turning to AI because assignments felt difficult, motivation was low or asking for help felt uncomfortable.' },
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
          text: 'The strongest direction was not to make Lyra answer better. It was to make Lyra ask better questions.',
        },
        { t: 'p', text: 'I translated the research into three principles for the team to design against.' },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Slow down the process', text: 'Give students a moment to think before the system responds.' },
            { title: 'Make thinking visible', text: 'Help students see how ideas connect instead of treating each answer as a dead end.' },
            { title: "Guide, don't solve", text: 'Use follow-up questions to help students reach an answer they can explain.' },
          ],
        },
        { t: 'h3', text: 'Prioritizing what to build' },
        {
          t: 'p',
          text: 'We grouped ideas by whether they encouraged learning, supported review or discouraged shortcuts. An impact-effort matrix helped us choose what to build first and keep the scope realistic.',
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
          text: 'We prioritized adaptive chat modes, guiding responses and a confidence check at the end of a session. We also made one larger bet: connecting the mind map directly to the conversation instead of treating it as a separate feature.',
        },
      ],
    },
    {
      number: '04',
      title: 'From flow to prototype',
      blocks: [
        {
          t: 'statement',
          text: 'Before polishing the interface, I wanted to know whether the learning flow made sense.',
        },
        {
          t: 'p',
          text: 'We mapped the journey from onboarding through each chat mode and into the mind map. Wireframes established the basic layout, and paper prototypes let us test the core interaction before we committed to a visual direction. Once the flow held together, we moved into a digital prototype and refined the moments where users needed more context or feedback.',
        },
        {
          t: 'steps',
          cols: 2,
          items: [
            { title: '1. Map the flow', text: 'We defined the decision points from onboarding and the learning-style quiz through the chat modes and mind map.' },
            { title: '2. Wireframe', text: 'We established the layout and interaction patterns before spending time on visual polish.' },
            { title: '3. Paper prototype', text: 'We tested the core concepts with diverse users and checked whether the interaction made sense without a finished interface.' },
            { title: '4. Build the digital prototype', text: 'We brought the strongest ideas into Figma, then iterated on transitions, navigation, feedback and reflection prompts.' },
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
          text: 'The resulting concept was an AI tutor that asks a question before giving an answer, keeps the active mode visible and turns the conversation into a mind map students can return to.',
        },
        { t: 'walkthrough' },
      ],
    },
    {
      number: '05',
      title: 'Testing the direction',
      blocks: [
        {
          t: 'statement',
          text: 'Testing did not change the premise. It showed us where the premise was getting lost in the interface.',
        },
        {
          t: 'table',
          head: ['What testing showed', 'What we changed'],
          rows: [
            {
              found: 'Onboarding was intuitive',
              foundText: 'Participants could navigate onboarding and complete the learning-style quiz without much help.',
              change: 'We streamlined the assessment and filled in missing steps so the flow stayed focused.',
            },
            {
              found: 'Mode transitions needed feedback',
              foundText: 'Participants understood the chat modes, but transitions and feedback did not always make the current state clear.',
              change: 'We added visual indicators, clearer navigation and smoother transitions.',
            },
            {
              found: 'Mind maps needed a stronger connection',
              foundText: 'Users liked using mind maps to organize knowledge, but they were difficult to reach and felt separate from the chat.',
              change: 'We added detail and interactivity, then connected mind-map content to chat responses.',
            },
            {
              found: 'Reflection prompts worked',
              foundText: 'Users responded well to interactions that asked them to analyze and reflect.',
              change: 'We added confidence checks, animations and micro-interactions to reinforce self-assessment.',
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
          text: 'The most important insight was not that students used AI. It was that AI could make understanding look complete before it actually was.',
        },
        {
          t: 'quote',
          text: "The hardest part wasn't designing Lyra. It was choosing to build something students hadn't asked for, because what they wanted in the moment wasn't what was going to help them.",
          attribution: 'What Lyra taught me',
        },
        {
          t: 'p',
          text: "That gap shaped Lyra’s central interaction: ask students to make their thinking visible before the system helps them move forward. I left the project more skeptical of answers that arrive too easily. In future work, I want to test not only whether someone can complete a task, but whether the experience helped them understand what they were doing.",
        },
        { t: 'h3', text: 'Challenges' },
        {
          t: 'p',
          text: 'The project moved quickly, so we had to make decisions with limited time for deep interviews. We balanced the survey and literature findings with professor perspectives, then used paper prototypes to test the most important interaction before building it out. Connecting the chat modes and mind map took several iterations because both features had to support the same learning process.',
        },
      ],
    },
  ],
};
