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
          text: 'Students were getting answers faster than they could understand them.',
        },
        {
          t: 'p',
          text: 'Students were already using AI to get through difficult assignments. An immediate answer could hide whether they understood the work. Professors saw the consequences when students submitted polished responses but struggled to explain them without AI.',
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
          text: 'Students wanted speed. Learning needed friction.',
        },
        {
          t: 'stats',
          items: [
            { value: '[N]', label: 'students surveyed about AI use and learning pain points' },
            { value: '82%', label: 'use AI primarily for speed and efficiency' },
            { value: '[X] of [N]', label: 'students said they use AI to deepen understanding' },
          ],
        },
        { t: 'h3', text: 'How I investigated the problem' },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'Literature review', text: 'I reviewed AI education tools such as Khanmigo and Duolingo AI tutors to understand how they addressed learning, confirmation bias, automation bias and prompting.' },
            { title: 'Student survey', text: 'I surveyed [N] students about why they turn to AI and whether they feel confident explaining work they completed with its help.' },
            { title: 'Professor interviews', text: 'I spoke with professors about changes they were seeing in students’ questions and submitted work, along with students’ willingness to work through uncertainty.' },
          ],
        },
        { t: 'h3', text: 'The patterns that emerged' },
        {
          t: 'themes',
          items: [
            { title: 'Speed came first', note: 'Students often used AI to finish work efficiently, even when they were not sure they understood the result.' },
            { title: 'AI hid the struggle', note: 'When AI supplied the next step, students lost the productive struggle that could have helped them learn.' },
            { title: 'The feedback loop broke', note: 'AI-generated work made it harder for professors to tell what a student understood and where they needed help.' },
            { title: 'A question we kept coming back to', note: 'We suspected some students turned to AI because assignments felt difficult or asking for help felt uncomfortable.' },
            { title: 'Some felt guilty', note: "Some students said they felt guilty submitting AI work they did not fully understand." },
            { title: "AI wasn't even reliable", note: 'Students also complained about inaccurate answers and not knowing how to prompt well.' },
          ],
        },
        { t: 'h3', text: 'What participants said' },
        {
          t: 'quote',
          text: "Students don't think AI is a collaboration tool, they think of it as a do-my-homework tool.",
          attribution: 'Professor interview',
        },
        {
          t: 'quote',
          text: 'I ask questions, then follow up with more questions. That’s how students start thinking. AI skips that process.',
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
          text: 'We grouped ideas by whether they encouraged learning, supported review, prompted reflection or discouraged shortcuts. An impact-effort matrix helped us choose what to build first and keep the scope realistic.',
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
            { ideas: [{ text: '[low-impact idea]' }] },
          ],
          caption: 'Ideas prioritized for the prototype',
        },
        {
          t: 'p',
          text: 'We prioritized adaptive chat modes, guiding responses, confidence checks and clearer links between the chat and mind map. We also made one larger bet: connecting the mind map directly to the conversation instead of treating it as a separate feature.',
        },
        { t: 'h3', text: 'What Lyra does' },
        {
          t: 'lists',
          items: [
            {
              title: 'Four chat modes',
              bullets: [
                'Creative: asks open-ended questions to explore new ideas.',
                'Analytical: helps break a problem into smaller parts.',
                'Reflective: prompts students to look back at their work and spot gaps.',
                'Critical: pushes students to look at a topic from other perspectives.',
              ],
            },
          ],
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
          text: 'We mapped the flow from onboarding through each chat mode and into the mind map. Wireframes established the basic layout, and paper prototypes let us test the core interaction before we committed to a visual direction. Once the flow held together, we moved into a digital prototype and refined the moments where users needed more context or feedback.',
        },
        {
          t: 'steps',
          cols: 2,
          items: [
            { title: 'Map the flow', text: 'We defined the decision points from onboarding and the learning-style quiz through the chat modes and mind map.' },
            { title: 'Wireframe', text: 'We established the layout and interaction patterns before spending time on visual polish.' },
            { title: 'Paper prototype', text: 'We tested the core concepts with [N] students and checked whether the interaction made sense without a finished interface.' },
            { title: 'Build the digital prototype', text: 'We brought the strongest ideas into Figma, then iterated on transitions, navigation, feedback and reflection prompts.' },
          ],
        },
        {
          t: 'p',
          text: '[One moment from paper testing that changed the design]',
        },
        {
          t: 'p',
          text: 'Midway through, we pivoted from [original direction] to [new direction] because [reason].',
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
          text: 'Testing confirmed the idea and showed where the interface got in the way.',
        },
        { t: 'p', text: 'We tested the digital prototype with [N] students.' },
        {
          t: 'table',
          head: ['What testing showed', 'What we changed'],
          rows: [
            {
              found: 'Onboarding was intuitive',
              foundText: 'Participants could navigate onboarding and complete the learning-style quiz without much help.',
              change: 'We kept the flow and shortened the learning-style quiz to [N] questions.',
            },
            {
              found: 'Mode transitions needed feedback',
              foundText: 'Participants understood the chat modes, but transitions and feedback did not always make the current state clear.',
              change: 'We added visual indicators, clearer navigation, animations and micro-interactions.',
            },
            {
              found: 'Mind maps needed a stronger connection',
              foundText: 'Users liked using mind maps to organize knowledge, but they were difficult to reach and felt separate from the chat.',
              change: 'We added detail and interactivity, then connected mind-map content to chat responses.',
            },
            {
              found: 'Reflection prompts worked',
              foundText: 'Users responded well to interactions that asked them to analyze and reflect.',
              change: 'We added a confidence check at the end of each session so reflection happened every time, not only when students chose a reflective mode.',
            },
          ],
        },
        { t: 'h3', text: 'Results' },
        {
          t: 'stats',
          items: [
            { value: '[X] of [N]', label: 'rated account setup 5/5 for ease of use' },
            { value: '[X] of [N]', label: 'successfully reviewed concepts they learned in Lyra' },
            { value: '[N] of [N]', label: 'found the mind maps useful for review' },
            { value: '[N] of [N]', label: 'could break down an answer using the prompted chat mode' },
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
          text: 'AI can make understanding look finished before it is.',
        },
        {
          t: 'quote',
          text: "The hardest call was building something students hadn't asked for, because what they wanted in the moment wasn't what would help them learn.",
          attribution: 'What Lyra taught me',
        },
        {
          t: 'p',
          text: "Students said they understood AI-generated answers, while professors watched those same students struggle to explain them in class. Familiarity can feel like understanding, creating an illusion of knowing. That gap shaped Lyra’s central interaction: ask students to make their thinking visible before the system helps them move forward.",
        },
        { t: 'h3', text: 'Challenges' },
        {
          t: 'p',
          text: 'We pivoted from [original direction] to [new direction] under a tight deadline, then used paper prototypes to test the most important interaction before building it out.',
        },
      ],
    },
  ],
};
