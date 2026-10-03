export interface CommunityStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface CommunityPrinciple {
  id: string;
  title: string;
  description: string;
  iconName: 'BookOpen' | 'Hammer' | 'Share2' | 'TrendingUp';
  highlight: string;
}

export interface WhatWeDoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'BookOpen' | 'Sparkles' | 'Users' | 'Share2';
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  highlightText: string;
  normalText: string;
  column: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  category: 'web' | 'tools' | 'open-source';
  status: 'Live' | 'In Development' | 'Open for Contribution';
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
  features: string[];
  summary: string;
}

export interface CommunityValue {
  id: string;
  name: string;
  tagline: string;
  description: string;
  number: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: 'github' | 'discord' | 'instagram' | 'youtube' | 'mail';
  active: boolean;
  username: string;
}

export const COMMUNITY_CONFIG = {
  brand: {
    name: 'Codryn Community',
    shortName: 'Codryn',
    slogan: 'Where Developers Come Together to Learn, Create, Share, and Build Something Meaningful.',
    headline: 'Where Developers Come Together to Build Something Meaningful.',
    shortDescription: 'Codryn is a developer community for learning, sharing knowledge, collaborating on ideas, and building meaningful technology together.',
    indonesianDescription: 'Codryn Community adalah komunitas developer yang menjadi tempat untuk belajar programming, berbagi pengetahuan, berdiskusi, berkolaborasi, dan membangun berbagai project teknologi bersama.',
    badgeText: 'DEVELOPER COMMUNITY',
    accentColor: '#168BFF',
    backgroundColor: '#050505',
    yearEstablished: 2026,
    mottoSecondary: 'Learn. Create. Share. Grow.',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Values', href: '#values' },
  ],

  stats: [
    {
      id: 'stat-community',
      value: '01',
      label: 'Community',
      description: 'One united space for passionate engineers and creators.',
    },
    {
      id: 'stat-learning',
      value: '24/7',
      label: 'Learning',
      description: 'Continuous asynchronous discussions and collective study.',
    },
    {
      id: 'stat-ideas',
      value: '∞',
      label: 'Ideas',
      description: 'Uncapped curiosity from prototype to production.',
    },
    {
      id: 'stat-driven',
      value: '100%',
      label: 'Community Driven',
      description: 'Built by developers, moderated by peers, open for all.',
    },
  ] as CommunityStat[],

  principles: [
    {
      id: 'principle-learn',
      title: 'Learn Together',
      description: 'Dive deep into real-world code, architectures, modern frameworks, and engineering fundamentals alongside peers.',
      iconName: 'BookOpen',
      highlight: 'Continuous Growth',
    },
    {
      id: 'principle-build',
      title: 'Build Together',
      description: 'Turn ideas into shipped software through community sprints, collaborative side projects, and open-source repos.',
      iconName: 'Hammer',
      highlight: 'Hands-on Shipping',
    },
    {
      id: 'principle-share',
      title: 'Share Knowledge',
      description: 'Demystify complex tech, publish technical breakdowns, share curated roadmaps, and exchange real-world lessons.',
      iconName: 'Share2',
      highlight: 'Transparent Insights',
    },
    {
      id: 'principle-grow',
      title: 'Grow Together',
      description: 'Friendly peer reviews, constructive code critiques, career insights, and an encouraging developer ecosystem.',
      iconName: 'TrendingUp',
      highlight: 'Mutual Support',
    },
  ] as CommunityPrinciple[],

  whatWeDo: [
    {
      id: 'what-learn',
      title: 'Learn',
      subtitle: 'Knowledge & Concepts',
      description: 'Learn programming, development concepts, tools, and technologies together in an inclusive environment.',
      iconName: 'BookOpen',
      highlights: ['Modern Web & Mobile', 'System Fundamentals', 'Tooling & CI/CD'],
    },
    {
      id: 'what-create',
      title: 'Create',
      subtitle: 'From Idea to Reality',
      description: 'Turn ideas into useful applications, websites, experiments, and meaningful digital tools.',
      iconName: 'Sparkles',
      highlights: ['Interactive Prototypes', 'Full-stack Systems', 'Open Experiments'],
    },
    {
      id: 'what-collaborate',
      title: 'Collaborate',
      subtitle: 'Building as a Team',
      description: 'Work together with other developers, designers, and creators to tackle challenges you cannot solve alone.',
      iconName: 'Users',
      highlights: ['Pair Programming', 'Team Sprints', 'Cross-discipline Feedback'],
    },
    {
      id: 'what-share',
      title: 'Share',
      subtitle: 'Open Knowledge',
      description: 'Share knowledge, curated resources, development experiences, and project ideas openly with the ecosystem.',
      iconName: 'Share2',
      highlights: ['Tech Notes & Roadmaps', 'Code Walkthroughs', 'Project Case Studies'],
    },
  ] as WhatWeDoItem[],

  testimonials: [
    {
      id: 'testi-davingm',
      name: 'davingm',
      role: 'DevOps Infra',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Codryn mengubah cara saya memandang pengembangan perangkat lunak.',
      normalText: ' Fokusnya bukan sekadar menyelesaikan masalah, tetapi membangun solusi yang modern, scalable, dan berkelanjutan.',
      column: 1,
    },
    {
      id: 'testi-rehan',
      name: 'Rehan Ramdhan',
      role: 'Kontributor Open Source',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Bergabung dengan Codryn membuka wawasan baru.',
      normalText: ' Kolaborasi di repo publik dan code review dari rekan sejawat membuat arsitektur kode saya jauh lebih terstruktur dan siap skala industri.',
      column: 1,
    },
    {
      id: 'testi-rizky',
      name: 'Rizky Ms',
      role: 'Nuxt Engineer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Codryn bukan sekadar komunitas, tetapi tempat berkumpulnya developer yang serius mengembangkan kemampuan mereka.',
      normalText: ' Mulai dari NestJS, Spring, Go, hingga arsitektur sistem modern selalu menjadi topik yang menarik untuk dibahas.',
      column: 2,
    },
    {
      id: 'testi-ajrin',
      name: 'ajrin',
      role: 'DevOps Cloud',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Yang membuat Codryn berbeda adalah budaya open source yang kuat.',
      normalText: ' Setiap anggota tidak ragu membagikan kendala infrastruktur nyata, benchmarking cloud, dan otomatisasi CI/CD tanpa ada rasa sungkan.',
      column: 2,
    },
    {
      id: 'testi-nairha',
      name: 'Nairha',
      role: 'Founder Codryn',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Codryn dibangun untuk developer yang ingin terus berkembang dan berada di garis depan teknologi.',
      normalText: ' Kami tidak berfokus pada pembelajaran dasar, tetapi pada eksplorasi teknologi modern, kontribusi open source, dan pengembangan solusi nyata untuk industri.',
      column: 3,
    },
    {
      id: 'testi-reyhan',
      name: 'Reyhan',
      role: 'Kontributor Open Source',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Budaya belajar di Codryn sangat positif.',
      normalText: ' Semua anggota saling mendorong untuk berkontribusi, bereksperimen, dan menciptakan sesuatu yang benar-benar bisa digunakan orang banyak.',
      column: 3,
    },
    {
      id: 'testi-radietya',
      name: 'Radietya Pratama',
      role: 'Founder Prataryn Enterprise',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      highlightText: '',
      normalText: 'Meskipun berpusat di Bandung, Codryn membuka kesempatan bagi developer dari seluruh Indonesia untuk terhubung, berkolaborasi, dan berkembang bersama.',
      column: 4,
    },
    {
      id: 'testi-destkaa',
      name: 'Destkaa',
      role: 'DevOps Engineer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Di sini tidak ada fokus pada materi dasar.',
      normalText: ' Codryn ditujukan bagi mereka yang ingin memperdalam teknologi modern, memahami arsitektur tingkat lanjut, dan mengikuti tren implementasi cloud-native.',
      column: 4,
    },
    {
      id: 'testi-marsha',
      name: 'Marsha Bara',
      role: 'Technical Lead',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Codryn memiliki visi yang jelas: membangun ekosistem teknologi modern dan berkontribusi terhadap perkembangan open source.',
      normalText: ' Itu yang membuat saya bangga menjadi bagian dari komunitas ini.',
      column: 5,
    },
    {
      id: 'testi-fakhri',
      name: 'Fakhri Ibnu Nabil',
      role: 'Frontend Specialist',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      highlightText: 'Saya bergabung karena ingin mencari rekan diskusi yang sefrekuensi.',
      normalText: ' Di Codryn kami sering membedah render optimization, arsitektur micro-frontend, dan state management tingkat lanjut.',
      column: 5,
    },
  ] as TestimonialItem[],

  projects: [
    {
      id: 'proj-codryn-web',
      title: 'Codryn Website',
      tagline: 'Official community digital hub & portfolio',
      description: 'The primary digital gateway for the Codryn Community. Built with clean typography, dark theme visual hierarchy, and modular architecture.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'web',
      status: 'Live',
      githubUrl: 'https://github.com/codryn-community/codryn-website',
      demoUrl: 'https://codryn.dev',
      stars: 48,
      forks: 12,
      features: [
        'Fully responsive glassmorphic dark interface',
        'Centralized configuration for rapid updates',
        'Accessible semantic markup and zero layout shifts',
        'SEO-optimized metadata & OpenGraph compliance',
      ],
      summary: 'Showcases community identity, ongoing initiatives, projects, and transparent open-source principles.',
    },
    {
      id: 'proj-community-tools',
      title: 'Community Tools & Utilities',
      tagline: 'Lightweight developer scripts and collaboration bots',
      description: 'A suite of open-source CLI tools, Discord notification webhooks, and project scaffolding scripts created for community workflows.',
      technologies: ['Node.js', 'TypeScript', 'REST API', 'GitHub Actions'],
      category: 'tools',
      status: 'In Development',
      githubUrl: 'https://github.com/codryn-community/community-tools',
      stars: 32,
      forks: 7,
      features: [
        'Project scaffolding template generator',
        'Discord event notification bot',
        'Automated markdown release notes builder',
      ],
      summary: 'Practical utilities developed during community build sprints to automate repetitive developer workflows.',
    },
    {
      id: 'proj-open-starters',
      title: 'Open Source Starters',
      tagline: 'Curated developer boilerplates and clean patterns',
      description: 'Opinionated starter kits covering full-stack web, API architecture, and state management designed to help beginners start cleanly.',
      technologies: ['TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
      category: 'open-source',
      status: 'Open for Contribution',
      githubUrl: 'https://github.com/codryn-community/open-starters',
      stars: 84,
      forks: 29,
      features: [
        'Strict TypeScript linting and formatting out of the box',
        'Pre-configured dark mode and accessibility tokens',
        'Clear documentation with architecture decision records',
      ],
      summary: 'Empowers developers of all levels to build on solid, clean, and production-tested patterns.',
    },
  ] as ProjectItem[],

  values: [
    {
      id: 'val-curiosity',
      number: '01',
      name: 'Curiosity',
      tagline: 'Always stay curious and keep learning.',
      description: 'Technology moves fast, but curiosity is the foundation that keeps engineers adaptable. We celebrate asking questions, exploring unchartered stacks, and inspecting how things actually work under the hood.',
    },
    {
      id: 'val-creativity',
      number: '02',
      name: 'Creativity',
      tagline: 'Turn ideas into things people can use.',
      description: 'Code is fundamentally a creative medium. We encourage building experiments that solve real problems, spark delight, and give form to ideas that were once just whiteboard scribbles.',
    },
    {
      id: 'val-collaboration',
      number: '03',
      name: 'Collaboration',
      tagline: 'Great projects come from people working together.',
      description: 'The most enduring technology was never built in complete isolation. By reviewing each other’s code, sharing varied perspectives, and combining strengths, our collective output far exceeds the sum of individual efforts.',
    },
    {
      id: 'val-open-knowledge',
      number: '04',
      name: 'Open Knowledge',
      tagline: 'Knowledge becomes more valuable when it is shared.',
      description: 'We reject gatekeeping. When one developer solves a tricky bug or learns a valuable pattern, documenting it openly lifts the entire community forward.',
    },
  ] as CommunityValue[],

  socialLinks: [
    {
      platform: 'GitHub',
      label: 'Explore GitHub Organization',
      url: 'https://github.com/codryn-community',
      icon: 'github',
      active: true,
      username: 'codryn-community',
    },
    {
      platform: 'Discord',
      label: 'Join Community Discord',
      url: 'https://discord.gg/codryn',
      icon: 'discord',
      active: true,
      username: 'Codryn Server',
    },
    {
      platform: 'Instagram',
      label: 'Follow on Instagram',
      url: 'https://instagram.com/codryn.community',
      icon: 'instagram',
      active: true,
      username: '@codryn.community',
    },
    {
      platform: 'YouTube',
      label: 'Watch Tech Sessions on YouTube',
      url: 'https://youtube.com/@codryncommunity',
      icon: 'youtube',
      active: true,
      username: '@codryncommunity',
    },
  ] as SocialLink[],

  faqs: [
    {
      question: 'Siapa saja yang boleh bergabung dengan Codryn Community?',
      answer: 'Siapapun yang memiliki ketertarikan pada programming dan teknologi—dari pemula yang baru memulai belajar coding, mahasiswa, hingga software engineer profesional. Codryn mengutamakan rasa ingin tahu dan semangat berkolaborasi.',
    },
    {
      question: 'Apakah bergabung dengan Codryn berbayar?',
      answer: 'Tidak sama sekali. Codryn adalah komunitas terbuka (100% community-driven). Semua channel diskusi, project bersama, dan sesi belajar dapat diakses gratis oleh seluruh anggota.',
    },
    {
      question: 'Bagaimana cara berkontribusi di project Codryn?',
      answer: 'Anda bisa melihat repository open source di GitHub Codryn, memilih issue yang berlabel "good first issue", atau mengusulkan ide project baru di channel diskusi Discord untuk dikerjakan bersama anggota lain.',
    },
    {
      question: 'Apakah saya harus sudah jago programming untuk bergabung?',
      answer: 'Tidak perlu! Salah satu pilar utama Codryn adalah "Learn Together". Komunitas ini justru dirancang agar kita bisa saling belajar dan membimbing satu sama lain secara ramah tanpa intimidasi.',
    },
  ],
};
