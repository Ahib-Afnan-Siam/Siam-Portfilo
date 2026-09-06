export interface LeadershipRole {
  id: string
  title: string
  organisation: string
  period: string
  description: string
  impact: string[]
  icon: 'users' | 'trophy' | 'star'
}

export const ROLES: LeadershipRole[] = [
  {
    id: '1',
    title: 'Team Lead, AI & Autonomous Team',
    organisation: 'BRACU Ognibir — Autonomous Fire Extinguishing Robot',
    period: 'Mar 2023 – Apr 2024',
    description:
      'Led the AI and autonomous systems team for BRACU Ognibir, focusing on building an autonomous fire-extinguishing robot that combined robotics, sensing, control logic, and intelligent decision-making.',
    impact: [
      'Led technical planning and team coordination for the autonomous robot development workflow.',
      'Worked on AI-assisted navigation, sensor-based decision-making, and autonomous fire response logic.',
      'Coordinated hardware, software, and robotics tasks across team members to keep development aligned.',
      'Helped bridge research, prototyping, and practical implementation for a real-world robotics use case.',
    ],
    icon: 'trophy',
  },
  {
    id: '2',
    title: 'Director, Human Resources',
    organisation: 'Robotics Club of BRAC University',
    period: 'Feb 2023 – Feb 2024',
    description:
      'Led the HR department of the Robotics Club of BRAC University while also supporting database administration, IT services, technical training, and robotics-focused member development.',
    impact: [
      'Organized and managed recruitment, onboarding, and team coordination for club members.',
      'Assisted in building and maintaining club databases and IT services for smoother operations.',
      'Trained members in basic robotics, database management, IT management, and software development.',
      'Supported robotics projects using Arduino and Raspberry Pi, including SoccerBot, line-following robots, and other prototypes.',
    ],
    icon: 'users',
  },
  {
    id: '3',
    title: 'Executive, Communication and Marketing',
    organisation: 'BRAC University Computer Club',
    period: 'Dec 2022 – Dec 2023',
    description:
      'Worked in communication and marketing for one of BRAC University’s major technology clubs, supporting outreach, event promotion, member engagement, and cross-team communication.',
    impact: [
      'Supported communication strategies for club events, campaigns, and technical programs.',
      'Helped promote activities to improve student participation and visibility across campus.',
      'Coordinated with internal teams to ensure clear messaging, event updates, and smooth information flow.',
      'Contributed to building a more active and connected student technology community.',
    ],
    icon: 'star',
  },
  {
    id: '4',
    title: 'Vice President',
    organisation: 'Notre Dame Eco & Space Club',
    period: 'Aug 2018 – Aug 2019',
    description:
      'Served as Vice President of Notre Dame Eco & Space Club, contributing to leadership, planning, and student engagement around science, environment, astronomy, and space-focused activities.',
    impact: [
      'Helped lead club operations, activity planning, and member coordination.',
      'Supported science and space-related programs that encouraged curiosity beyond the classroom.',
      'Worked with members and organizers to execute club initiatives and student activities.',
      'Built early leadership experience through teamwork, communication, and event ownership.',
    ],
    icon: 'trophy',
  },
  {
    id: '5',
    title: 'Secretary',
    organisation: 'Notre Dame English Club',
    period: 'Sep 2018 – Sep 2019',
    description:
      'Served as Secretary of Notre Dame English Club, supporting communication, documentation, event organization, and club-level coordination for language and public-speaking activities.',
    impact: [
      'Managed communication, documentation, and coordination for club activities.',
      'Supported events focused on English communication, writing, presentation, and public speaking.',
      'Helped maintain smooth collaboration between members, organizers, and leadership teams.',
      'Strengthened interpersonal communication, organization, and leadership skills from an early stage.',
    ],
    icon: 'star',
  },
]

