export interface Publication {
  id: string
  title: string
  year?: string
  summary: string
  link?: string
  category: string
  type: 'Research Paper' | 'Blog'
  actionLabel?: string
  status?: string
  featured?: boolean
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'r1',
    title:
      'Transitioning to Involutional Neural Network for Resource Efficient Federated Plant Disease Classification',
    summary:
      'This study proposes using Involutional Neural Networks with federated learning to classify plant diseases in a decentralized, privacy-preserving manner. By using location-specific and channel-agnostic kernels, InvNets address the computational inefficiencies and privacy risks of traditional CNN-based approaches such as ResNet50 and VGG16. While ResNet50 achieved the highest overall accuracy, InvNets provided a stronger balance of performance and resource efficiency for scalable early disease detection in resource-constrained agricultural environments.',
    category: 'Federated Learning',
    type: 'Research Paper',
    status: 'Under Review — Computers and Electronics in Agriculture',
  },
  {
    id: 'b1',
    title: 'Federated Learning: The Future of Privacy-Preserving AI',
    year: '2025',
    summary:
      'Explains federated learning as a privacy-first AI approach where models are trained directly on user devices instead of sending raw data to centralized servers. The article highlights how local learning protects sensitive data while still contributing to a smarter global model.',
    link: 'https://medium.com/@ahibafnan99/federated-learning-the-future-of-privacy-preserving-ai-a246d9230345?sharedUserId=ahibafnan99',
    category: 'Privacy AI',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b2',
    title: 'Edge Computing: Bringing Data Processing Closer to the Source',
    year: '2025',
    summary:
      'Introduces edge computing as a decentralized computing model that processes data near its source, such as sensors, gateways, or local servers. The article explains how edge computing reduces dependency on distant cloud systems and improves speed, reliability, and efficiency.',
    link: 'https://medium.com/@ahibafnan99/edge-computing-bringing-data-processing-closer-to-the-source-757a974c24f2?sharedUserId=ahibafnan99',
    category: 'Edge Computing',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b3',
    title: 'Google’s New Programming Language “Mangle”: Is This the Next Big Shift?',
    year: '2025',
    summary:
      'Covers Google’s open-source deductive database programming language, Mangle, and its potential to unify fragmented data across APIs, databases, and files. The article explains how logic-based rules can help developers query and reason over complex data more cohesively.',
    link: 'https://medium.com/@ahibafnan99/googles-new-programming-language-mangle-is-this-the-next-big-shift-9615c892113b?sharedUserId=ahibafnan99',
    category: 'Programming Language',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b4',
    title: 'LLMs as Database Interfaces: Can Natural Language Replace SQL?',
    featured: true,
    year: '2025',
    summary:
      'Explores how Large Language Models can reduce the barrier between business users and databases by allowing natural-language queries instead of complex SQL. The article discusses how NL2SQL systems can make enterprise data access faster and more accessible.',
    link: 'https://medium.com/@ahibafnan99/llms-as-database-interfaces-can-natural-language-replace-sql-8dac8d9e46af?sharedUserId=ahibafnan99',
    category: 'NL2SQL',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b5',
    title: 'Talk, Don’t Type: The Rise of Vibe Coding',
    year: '2025',
    summary:
      'Discusses vibe coding, a software development shift where natural language becomes the primary interface for building applications. The article explains how LLM-powered tools help developers and non-developers describe, generate, refine, and debug software more naturally.',
    link: 'https://medium.com/@ahibafnan99/talk-dont-type-the-rise-of-vibe-coding-94352d83a6e8?sharedUserId=ahibafnan99',
    category: 'AI Coding',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b6',
    title: 'RAG (Retrieval-Augmented Generation): How It’s Transforming AI Applications',
    featured: true,
    year: '2025',
    summary:
      'Explains how Retrieval-Augmented Generation connects LLMs with external knowledge sources to reduce hallucinations and outdated responses. The article presents RAG as a practical way to build accurate, context-aware, and verifiable AI applications without constant model retraining.',
    link: 'https://medium.com/@ahibafnan99/rag-retrieval-augmented-generation-how-its-transforming-ai-applications-f987aae753ad?sharedUserId=ahibafnan99',
    category: 'RAG',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
  {
    id: 'b7',
    title: 'Why RAG Is Replacing Fine-Tuning for Enterprise AI',
    featured: true,
    year: '2025',
    summary:
      'Compares RAG with fine-tuning in enterprise AI systems, highlighting why RAG is often more flexible, scalable, and cost-effective. The article explains how retrieval-based systems keep AI applications updated without repeated retraining and compliance-heavy model changes.',
    link: 'https://medium.com/@ahibafnan99/why-rag-is-replacing-fine-tuning-for-enterprise-ai-87e8844f16f1?sharedUserId=ahibafnan99',
    category: 'Enterprise AI',
    type: 'Blog',
    actionLabel: 'Read Blog',
  },
]
