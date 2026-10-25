
export interface Testimonial {
  id: string
  name: string
  role?: string
  relationship: string
  date: string
  source: 'LinkedIn'
  profileUrl?: string
  recommendationUrl?: string
  avatarUrl?: string
  headline?: string
  featuredQuote: string
  paragraphs: string[]
  themes?: string[]
  featured: boolean
  displayOrder?: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sayem-biswas-2026-07-23',
    name: 'Sayem Biswas',
    role: 'Manager – MIS (AI) · PRAN-RFL Group',
    relationship: 'Direct Manager',
    date: '2026-07-23',
    source: 'LinkedIn',

    profileUrl:
      'https://www.linkedin.com/in/sayem-biswas-752016213/',

    recommendationUrl:
      'https://www.linkedin.com/in/ahib-afnan-siam/details/recommendations/',

    avatarUrl: '/images/testimonials/sayem-biswas.jpeg',

    headline: 'Technical depth. Ownership. Professional maturity.',

    featuredQuote:
      'Seeing Ahib evolve from an intern into a dependable AI Software Engineer has been a highlight of my tenure; he is now someone who takes full ownership of complex challenges and delivers results with minimal oversight.',

    paragraphs: [
      'I have had the pleasure of managing Ahib Afnan Siam at PRAN-RFL Group for over a year. During this time, he has consistently impressed me with his technical acumen, professional maturity, and an unwavering commitment to high-quality work. Seeing Ahib evolve from an intern into a dependable AI Software Engineer has been a highlight of my tenure; he is now someone who takes full ownership of complex challenges and delivers results with minimal oversight.',

      'Ahib stands out because he balances software engineering fundamentals with practical AI expertise. He played a key role in several of our enterprise AI initiatives, including a natural language-to-SQL assistant, an automated recruitment platform, semantic search systems, and an intelligent meeting assistant. These projects demanded more than just a grasp of machine learning and LLMs; they required the ability to build scalable backends, integrate cutting-edge tech, and focus on solving actual business problems.',

      'What truly sets Ahib apart is his intellectual curiosity and initiative. He dives into unfamiliar technologies with confidence, masters them quickly, and is always looking for ways to refine our existing systems. Whether he is debugging a stubborn issue, optimizing an AI pipeline, or architecting a feature from scratch, he maintains a solution-oriented mindset and a deep sense of responsibility.',

      'Technical skills aside, Ahib is a reliable and collaborative partner. He is an effective communicator who welcomes feedback and works seamlessly across different teams. His positive attitude and professional demeanor have earned him my full trust with our most important responsibilities.',

      'I have no doubt that Ahib possesses the skill set, work ethic, and growth mindset to excel in any AI or software engineering capacity. I highly recommend him to any organization looking for an engineer who pairs technical depth with a genuine passion for problem-solving. It has been a privilege to work with him, and I am excited to see the impact he will undoubtedly make in his career.',
    ],

    themes: ['AI Engineering', 'Ownership', 'Problem Solving'],

    featured: true,
    displayOrder: 1,
  },
  {
    id: 'zakir-hossen-2026-10-25',
    name: 'Zakir Hossen',
    role: 'Senior Oracle Apps DBA · OCI Architect · AI Team Lead · PRAN-RFL Group',
    relationship: 'Direct Manager / Team Leader',
    date: '2026-10-25',
    source: 'LinkedIn',

    profileUrl:
      'https://www.linkedin.com/in/zakir-hossen-8243ba11b/?isSelfProfile=false',

    recommendationUrl:
      'https://www.linkedin.com/in/ahib-afnan-siam/details/recommendations/',

    avatarUrl: '/images/testimonials/zakir-hossen.jpeg',
    
    headline: 'Adaptability. Innovation. Business-focused AI.',

    featuredQuote:
      'What sets Ahib apart is his ability to quickly learn emerging technologies and transform complex technical challenges into intelligent, practical, and business-focused AI solutions.',

    paragraphs: [
      'I’m pleased to work with Ahib Afnan Siam at PRAN-RFL Group. He is a talented, dedicated, and quick-learning AI Engineer with strong expertise in Machine Learning, LLMs, RAG, NL2SQL, Computer Vision, Python, FastAPI, and React.',

      'What sets Ahib apart is his ability to quickly learn emerging technologies and transform complex technical challenges into intelligent, practical, and business-focused AI solutions. He actively contributes to innovative AI-powered projects at PRAN-RFL Group, demonstrating strong analytical thinking, technical versatility, and a genuine passion for Artificial Intelligence.',

      'As a team leader, I value his dedication, adaptability, problem-solving skills, and commitment to continuous learning. He is a valuable member of our team, and I highly recommend him as a capable AI Engineer with a strong innovative mindset and the potential to make a meaningful impact in the AI industry.',
    ],

    themes: ['AI Engineering', 'Adaptability', 'Problem Solving'],

    featured: true,
    displayOrder: 2,
  },
]

// Use lower numbers first. Entries without displayOrder keep their array order.
TESTIMONIALS.sort(
  (a, b) =>
    (a.displayOrder ?? Number.MAX_SAFE_INTEGER) -
    (b.displayOrder ?? Number.MAX_SAFE_INTEGER)
)

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter(
  (testimonial) => testimonial.featured
)
