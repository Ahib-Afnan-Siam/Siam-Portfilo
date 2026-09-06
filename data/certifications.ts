export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  description: string
  credential?: string
  credentialText?: string
  credentialId?: string
  color: 'blue' | 'orange' | 'green' | 'purple' | 'cyan' | 'gold'
  specialBg?: 'mission' | 'ielts'
  featured?: boolean
}

export const CERTS: Certification[] = [
  {
    id: '1',
    name: 'Mission OZ 2022 — Top 5 Worldwide',
    featured: true,
    issuer: 'Space Teams · STEMX 365',
    date: '2022',
    description:
      'Ranked among the Top 5 worldwide and completed a space science and engineering program covering planetary science, spacecraft design, orbital mechanics, remote sensing, entry-descent-landing, extraterrestrial habitats, and human-robotic exploration. Certificate signed by NASA astronaut and aerospace engineering professor Gregory Chamitoff, Ph.D.',
    credential:
      'https://drive.google.com/file/d/1lkfS9niXuzvHIO6h3YNKETxFuZ3J0Csl/view?usp=sharing',
    credentialText: 'View Credential',
    color: 'purple',
    specialBg: 'mission',
  },
  {
    id: '2',
    name: 'IELTS Academic — Overall Band 7.5',
    featured: true,
    issuer: 'British Council / IDP / Cambridge English',
    date: 'Band 7.5',
    description:
      'Demonstrated strong English communication proficiency across listening, reading, writing, and speaking, supporting professional collaboration, documentation, research writing, and global communication.',
    credentialText: 'Certificate available upon request',
    color: 'cyan',
    specialBg: 'ielts',
  },
  {
    id: '3',
    name: 'Certificate of Accomplishment in Software Engineer',
    featured: true,
    issuer: 'HackerRank',
    date: 'Oct 2024',
    credentialId: 'CF5B58274C39',
    description:
      'Validated practical software engineering skills across problem-solving, Python, SQL, and REST API development, demonstrating readiness for backend and full-stack engineering workflows.',
    credential: 'https://www.hackerrank.com/certificates/iframe/cf5b58274c39',
    credentialText: 'View Credential',
    color: 'green',
  },
  {
    id: '4',
    name: 'Certificate of Accomplishment in Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '6C57FAE14D09',
    description:
      'Certified foundational software engineering ability with focus on problem solving, Python, and SQL — covering core programming and database concepts required for technical roles.',
    credential: 'https://www.hackerrank.com/certificates/iframe/6c57fae14d09',
    credentialText: 'View Credential',
    color: 'green',
  },
  {
    id: '5',
    name: 'Certificate of Accomplishment in Python (Basic)',
    issuer: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '6AC36B44D0F0',
    description:
      'Demonstrated Python fundamentals including scalar types, operators, control flow, strings, collections, iteration, modularity, objects, types, and classes.',
    credential: 'https://www.hackerrank.com/certificates/iframe/6ac36b44d0f0',
    credentialText: 'View Credential',
    color: 'blue',
  },
  {
    id: '6',
    name: 'Certificate of Accomplishment in Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'Mar 2024',
    credentialId: 'AF4F6EACE87F',
    description:
      'Validated foundational algorithmic problem-solving skills, including essential data structures such as arrays and strings, along with core algorithms like sorting and searching.',
    credential: 'https://www.hackerrank.com/certificates/iframe/af4f6eace87f',
    credentialText: 'View Credential',
    color: 'orange',
  },
]

