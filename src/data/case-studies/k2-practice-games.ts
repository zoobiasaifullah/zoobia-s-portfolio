import type { CaseStudy } from '../types';

// NDA reminder: keep this page free of participant counts, product or people names beyond what is here,
// usage metrics and strategy. Full findings stay confidential.
export const k2PracticeGames: CaseStudy = {
  slug: 'k2-practice-games',
  tint: 'blue',
  eyebrow: 'Case study · UX research · Amplify, Summer 2026',
  title: 'How might we design for connection in early digital learning?',
  lede: 'A post-release study with K–2 teachers on how a practice feature fits into the school day, and what would help teachers use it more often.',
  tags: ['UX research', 'EdTech', 'K–2 teachers'],
  meta: {
    role: 'UX Research Intern',
    team: 'Mentored by a Senior UX Researcher',
    timeline: '4 weeks, Summer 2026',
    tools: 'Dovetail, Miro, Rally, Google Suite',
  },
  heroImage: 'amplify-thumbnail-goblin',
  next: 'lyra',
  sections: [
    {
      number: '01',
      title: 'The challenge',
      blocks: [
        {
          t: 'p',
          text: 'Amplify is a leading EdTech company that makes curriculum and assessment tools for K–12 classrooms. About a year before I joined, the team released short practice games that teachers could use as supplemental practice tied to specific lessons. The goal was to give students targeted practice that requires little prep from teachers, and gives them some insight for instructional decisions.',
        },
        {
          t: 'p',
          text: 'A year after release, the team was curious about the user experience of the feature. Analytics could show how often teachers assigned the games, but not why some kept coming back, some stopped, and many never tried the feature.',
        },
      ],
    },
    {
      number: '02',
      title: 'Research goals',
      blocks: [
        {
          t: 'p',
          text: 'My role was to help fill these gaps in knowledge and context to improve the user experience. Working with the product team, I turned their questions into four research questions.',
        },
        {
          t: 'questions',
          items: [
            'How do teachers fit the games into their day?',
            'Are the games worth the effort compared with the activity books teachers already use?',
            'Where does the experience break down?',
            'What would get non-users to try the games?',
          ],
        },
        {
          t: 'callout',
          label: 'How might we',
          text: "How might we understand where this feature fits into a teacher's day, and what would make it worth using more often?",
        },
      ],
    },
    {
      number: '03',
      title: 'Research and synthesis',
      blocks: [
        {
          t: 'p',
          text: 'To hear from teachers who used the games in very different ways, we started with the platform data. We used it to sort teachers into three groups by how they actually used the feature. That let us compare what kept some teachers coming back with what led others to stop or never start.',
        },
        {
          t: 'p',
          text: 'A feature can fit one classroom and not another, so I also looked at who the teachers were teaching. I researched each district’s socioeconomic background, along with the share of students with accessibility needs and multilingual learners (MLLs). Resources, student needs and language support all change how a product fits into a user’s daily routine. I used this in the screener so the teachers came from low-, mid- and high-resource schools with a range of student populations.',
        },
        {
          t: 'groups',
          label: 'User segments',
          items: [
            { title: 'Regular users', text: 'Assign the games regularly. What keeps them coming back?' },
            { title: 'Lapsed users', text: 'Tried the games and stopped. What changed?' },
            { title: 'Non-users', text: 'Have access but never used them. What got in the way?' },
          ],
        },
        {
          t: 'chips',
          label: 'Sampling considerations',
          items: ['District socioeconomic background', 'Students with accessibility needs', 'Multilingual learners'],
        },
        {
          t: 'steps',
          cols: 3,
          items: [
            { title: 'A typical day', text: 'Teachers described their classroom routine before I mentioned the games.' },
            { title: 'The game experience', text: 'How and when they used them. Non-users saw a short walkthrough.' },
            { title: 'What gets in the way', text: 'Barriers, and what would make the games worth using.' },
          ],
        },
        {
          t: 'p',
          text: 'Then, I led synthesis in Dovetail and Miro. I pulled quotes and observations from every transcript, clustered them over several passes, and compared how regular and lapsed users described the same moments.',
        },
        {
          t: 'flow',
          items: [
            { title: 'Interview notes', text: 'Observations from each conversation, captured in teachers’ own words.' },
            { title: 'Coded observations', text: 'Tagged against the four research questions.' },
            { title: 'Themes', text: 'Grouped across usage groups and school contexts, re-sorted over several rounds.' },
            { title: 'Core insight', text: 'Interaction between students is a developmental priority for teachers.', highlight: true },
          ],
        },
      ],
    },
    {
      number: '04',
      title: 'Findings and recommendations',
      blocks: [
        { t: 'note', text: 'Full findings are confidential. Shared here in summary only' },
        {
          t: 'p',
          text: 'Across interviews, teachers described classroom time as where young children learn to talk, share and work through things together. They were deliberate about protecting it, and it shaped how they judged any new activity.',
        },
        {
          t: 'callout',
          label: 'Core insight',
          text: 'For teachers of young children, interaction between students is a developmental priority, and they favor activities that support it.',
        },
        {
          t: 'p',
          text: 'This showed me where the games can grow. Lesson minutes are limited, and teachers give them to activities that support interaction, so the more a game builds on that, the easier it is to bring into the day.',
        },
        {
          t: 'p',
          text: 'The games currently give students focused, independent practice with little prep required from the teacher’s end, which teachers value. But what teachers need most is a tool that molds into their classroom environments.',
        },
        {
          t: 'p',
          text: 'Based on this, I proposed a future design direction that helps the games fit more K-2 classrooms by centering the social side of learning: students working together and staying active during play. For teachers, this would allow for practice that brings students together. For the team, it gives the games more ways to fit into a classroom day.',
        },
        {
          t: 'p',
          text: 'I shared this direction with product, design, curriculum and research stakeholders as a starting point to add on the product roadmap. It keeps the next step tied to what teachers told us about their classrooms, and gives the team a clear way to make the games a natural part of the school day.',
        },
      ],
    },
    {
      number: '05',
      title: 'Reflection',
      blocks: [
        {
          t: 'quote',
          text: 'Research and design matter most when they connect to what the business is trying to achieve.',
          attribution: 'Biggest takeaway',
        },
        {
          t: 'p',
          text: 'The biggest thing I learned is that research and design do not stand on their own. They earn their place when they connect to a business goal. The team wanted more teachers to adopt the games and keep using them, so the most useful finding was not only what teachers said, but what it showed about getting the games used more. When I framed my recommendation around that goal and its impact for teachers and the team, the work became easier to act on. Next time I would learn the business goals even earlier, so the questions I ask and the directions I propose are tied to business impact from the start.',
        },
      ],
    },
  ],
};
