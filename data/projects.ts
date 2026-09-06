import type { StaticImageData } from 'next/image'

import uttoronImage from '@/assets/images/Uttoron 1-01.png'
import meetosImage from '@/assets/images/meetos.png'
import recruitmentImage from '@/assets/images/Recruitement.jpeg'
import aluminumDefectImage from '@/assets/images/aluminum_defect.png'
import drishtyImage from '@/assets/images/Drishti.png'
import facebookImage from '@/assets/images/facebook.png'
import carImage from '@/assets/images/car.png'
import footballImage from '@/assets/images/football.png'

export type DeploymentType = 'public' | 'internal' | 'none'

export interface Project {
  _id: string
  title: string
  subtitle?: string
  description: string
  technologies: string[]
  deployment: DeploymentType
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
  codeText?: string
  imageUrl: string | StaticImageData
  featured: boolean
  order: number
}

export const PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'PRAN-RFL AI Assistant — Uttoron',
    subtitle: 'Enterprise NL2SQL & Analytics Assistant',
    description:
      'An enterprise natural-language-to-SQL AI assistant for analytics and reporting. It uses schema-aware RAG, semantic retrieval, Oracle SQL generation, and LLM-powered reasoning to enable real-time querying across large enterprise datasets.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'ChromaDB',
      'Oracle',
      'Sentence Transformers',
      'RAG',
      'NL2SQL',
      'Ollama',
      'OpenRouter',
    ],
    deployment: 'internal',
    codeText: 'Private Enterprise Project',
    imageUrl: uttoronImage,
    featured: true,
    order: 1,
  },

  {
    _id: '2',
    title: 'PRAN-RFL Meeting Assistant — MeetOS',
    subtitle: 'AI Meeting Intelligence Agent',
    description:
      'An AI meeting agent for Google Meet and Microsoft Teams that auto-joins meetings, tracks participants, captures captions, records audio, transcribes with Whisper, and generates structured AI summaries and PDF reports.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Playwright',
      'Whisper',
      'DeepSeek LLM',
      'Oracle 26ai',
      'Redis',
      'DigitalOcean Spaces',
    ],
    deployment: 'internal',
    codeText: 'Private Enterprise Project',
    imageUrl: meetosImage,
    featured: true,
    order: 2,
  },

  {
    _id: '3',
    title: 'Hire360 — PRAN-RFL Group',
    subtitle: 'AI Recruitment Intelligence Platform',
    description:
      'A full-stack enterprise recruitment intelligence platform for CV ingestion, structured profile extraction, semantic candidate search, hybrid job matching, recruiter review, shortlisting, ghost profiles, and end-to-end hiring workflows.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Oracle 26ai',
      'Oracle VECTOR',
      'Sentence Transformers',
      'MiniLM',
      'Semantic Search',
      'Cross-Encoder Reranking',
      'LLM Review',
      'Async Workers',
    ],
    deployment: 'public',
    liveUrl: 'https://hire360.prangroup.com/',
    liveLabel: 'Visit Hire360',
    codeText: 'Private Enterprise Project',
    imageUrl: recruitmentImage,
    featured: true,
    order: 3,
  },

  {
    _id: '4',
    title: 'Aluminum Defect Detection',
    subtitle: 'Industrial Computer Vision System',
    description:
      'A real-time industrial defect detection system using YOLOv8 on 2,000+ labeled samples for cracks, pits, and scratches. It processes dual camera feeds, communicates with a Siemens PLC, and logs detected defects for operators.',
    technologies: [
      'Python',
      'YOLOv8-Seg',
      'EfficientAD',
      'PyTorch',
      'OpenCV',
      'python-snap7',
      'Siemens S7',
      'Roboflow',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Aluminum-Defecr-Detection.git',
    imageUrl: aluminumDefectImage,
    featured: false,
    order: 4,
  },

  {
    _id: '5',
    title: 'Drishty — Facial Recognition Monitoring System',
    subtitle: 'Enterprise Computer Vision & Identity Monitoring',
    description:
      'An enterprise facial recognition monitoring system with multi-camera tracking, face detection, embedding generation, FAISS search, HRIS-integrated authentication, approval workflows, and attendance reporting.',
    technologies: [
      'Python',
      'FastAPI',
      'YOLOv8',
      'MobileFaceNet',
      'FAISS',
      'Oracle Database',
      'Flask',
      'Docker',
      'OpenCV',
      'HRIS API',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Drishty-PRAN-RFL-Facial-Recognition-Monitoring-System.git',
    imageUrl: drishtyImage,
    featured: false,
    order: 5,
  },

  {
    _id: '6',
    title: 'Facebook AI Reply Automation — Engage360',
    subtitle: 'Enterprise Social Automation Platform',
    description:
      'A Facebook automation platform for page connection, OAuth authorization, approval workflows, webhook subscriptions, post management, JWT authentication, and AI-assisted engagement workflows.',
    technologies: [
      'Flask',
      'Oracle DB',
      'SQLAlchemy',
      'JWT',
      'Facebook OAuth',
      'Pydantic',
      'Uvicorn',
      'python-dotenv',
    ],
    deployment: 'public',
    liveUrl: 'https://uttoron.prangroup.com/fbfnt/',
    liveLabel: 'Visit Platform',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Engage360-Facebook-AI-Reply-Automation.git',
    imageUrl: facebookImage,
    featured: true,
    order: 6,
  },

  {
    _id: '7',
    title: 'Car Price Prediction',
    subtitle: 'Machine Learning Classification Project',
    description:
      'A machine learning project that predicts car price categories using vehicle year, fuel type, seller type, transmission, ownership history, and other engineered features across multiple classifiers.',
    technologies: [
      'KNN',
      'Logistic Regression',
      'SVM',
      'Decision Tree',
      'Machine Learning',
      'Classification',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Car-Price-Predition.git',
    imageUrl: carImage,
    featured: false,
    order: 7,
  },

  {
    _id: '8',
    title: 'Football Match Result Prediction',
    subtitle: 'Predictive Machine Learning Project',
    description:
      'A football match outcome prediction system that classifies results as Home Win, Draw, or Away Win using historical match data, betting odds, team statistics, and engineered features. Gradient Boosting achieved 75.48% accuracy.',
    technologies: [
      'Gradient Boosting',
      'Random Forest',
      'Decision Tree',
      'SVM',
      'KNN',
      'Logistic Regression',
    ],
    deployment: 'none',
    githubUrl:
      'https://github.com/Ahib-Afnan-Siam/Football-Match-Result-Prediciton.git',
    imageUrl: footballImage,
    featured: false,
    order: 8,
  },
]
