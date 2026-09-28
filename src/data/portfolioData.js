// Complete, accurate portfolio data grounded strictly in the latest resume of Sohidul Islam.

export const personalInfo = {
    name: "Sohidul Islam",
    title: "Software Engineer II | Full-Stack Engineer",
    subtitle: "3+ Years Experience • Scalable Full-Stack, Cloud & AI Systems",
    email: "shufol.cse@gmail.com",
    phone: "01854107699",
    location: "Basabo, Dhaka, Bangladesh",
    status: "Available for Senior Roles & High-Impact Projects",

    socials: {
        github: "https://github.com/Sohidul-Islam",
        linkedin: "https://www.linkedin.com/in/sishufol",
        portfolio: "https://sohidul-islam.vercel.app",
        leetcode: "https://leetcode.com/u/CSE01806649/",
        codeforces: "https://codeforces.com/profile/sohidul_pciu",
        stopstalk: "https://www.stopstalk.com/user/profile/sishufol"
    },

    summary: "Software Engineer with 3+ years of experience building scalable full-stack web applications using React.js, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and MySQL. Experienced in AWS cloud services, real-time systems, AI-powered applications, payment integrations, and workflow automation. Proven experience taking products from requirements and architecture through development, optimization, and production deployment.",

    typingRoles: [
        "Software Engineer II",
        "Full-Stack Web Architect",
        "AWS & Cloud Solutions Engineer",
        "AI & Workflow Automation Builder",
        "Real-Time Systems Developer"
    ],

    stats: [
        { value: "3+", label: "Years Experience" },
        { value: "10+", label: "Full-Stack Projects" },
        { value: "3.93", label: "BSc CSE CGPA" },
        { value: "100%", label: "Client & Team Trust" }
    ]
};

export const skillCategories = [
    {
        id: "all",
        label: "All Technologies"
    },
    {
        id: "languages",
        label: "Languages",
        skills: [
            { name: "TypeScript", level: "Advanced", icon: "Code2" },
            { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
            { name: "Python", level: "Intermediate", icon: "Terminal" }
        ]
    },
    {
        id: "frontend",
        label: "Frontend",
        skills: [
            { name: "React.js", level: "Expert", icon: "Layout" },
            { name: "Next.js", level: "Advanced", icon: "Globe" },
            { name: "React Native", level: "Intermediate", icon: "Smartphone" },
            { name: "Redux / Redux Toolkit", level: "Advanced", icon: "Cpu" },
            { name: "HTML5 & CSS3", level: "Expert", icon: "Layers" },
            { name: "Tailwind CSS & Material UI", level: "Advanced", icon: "Palette" }
        ]
    },
    {
        id: "backend",
        label: "Backend & ORM",
        skills: [
            { name: "Node.js", level: "Advanced", icon: "Server" },
            { name: "Express.js", level: "Advanced", icon: "Zap" },
            { name: "NestJS", level: "Advanced", icon: "Box" },
            { name: "tRPC", level: "Advanced", icon: "Network" },
            { name: "PostgreSQL & MySQL", level: "Advanced", icon: "Database" },
            { name: "MongoDB & Supabase", level: "Intermediate", icon: "HardDrive" },
            { name: "Drizzle ORM & TypeORM", level: "Advanced", icon: "GitCommit" },
            { name: "Sequelize & Mongoose", level: "Intermediate", icon: "Database" }
        ]
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        skills: [
            { name: "AWS (Cognito, Lambda, IAM)", level: "Advanced", icon: "Cloud" },
            { name: "AWS (SQS, SNS, SES)", level: "Advanced", icon: "Send" },
            { name: "Docker", level: "Intermediate", icon: "Container" },
            { name: "Nginx & Cloudflare", level: "Intermediate", icon: "ShieldCheck" }
        ]
    },
    {
        id: "ai",
        label: "AI & Automation",
        skills: [
            { name: "OpenAI API & Generative AI", level: "Advanced", icon: "Bot" },
            { name: "Document AI Parser", level: "Advanced", icon: "FileText" },
            { name: "AI Chatbots", level: "Advanced", icon: "MessageSquare" },
            { name: "n8n & Zapier Automation", level: "Advanced", icon: "Workflow" }
        ]
    },
    {
        id: "realtime",
        label: "Real-Time & Integration",
        skills: [
            { name: "WebSocket & Socket.IO", level: "Advanced", icon: "Activity" },
            { name: "BullMQ Message Queues", level: "Intermediate", icon: "ListOrdered" },
            { name: "Payment Gateways (Stripe, Authorize.Net, Vexora)", level: "Advanced", icon: "CreditCard" },
            { name: "Clerk Auth & Mailgun", level: "Advanced", icon: "Lock" }
        ]
    }
];

export const experiences = [
    {
        id: "mediusware",
        company: "Mediusware Ltd",
        role: "Software Engineer II | Full-Stack Engineer",
        type: "Full-Time",
        period: "03/2024 – Present",
        location: "Dhaka, Bangladesh",
        current: true,
        description: "Engaged in designing and deploying scalable full-stack applications, AI automation pipelines, and cloud systems for high-growth client environments.",
        points: [
            "Built scalable full-stack applications with React.js, Next.js, TypeScript, NestJS, tRPC, and PostgreSQL.",
            "Developed AI-powered chatbots, document processing pipelines, and workflow automation using n8n and Zapier.",
            "Built secure cloud systems with AWS and managed production deployments using Docker, Nginx, Cloudflare, WebSockets, and queue architectures.",
            "Collaborated with cross-functional technical teams to architect and deliver robust, production-ready solutions."
        ],
        technologies: ["React.js", "Next.js", "TypeScript", "NestJS", "tRPC", "PostgreSQL", "AWS", "Docker", "Nginx", "n8n", "Zapier", "WebSockets"]
    },
    {
        id: "fashion-glory",
        company: "Fashion Glory Company Limited",
        role: "Software Engineer | Full-Stack Engineer",
        type: "Part-Time • Remote",
        period: "11/2024 – Present",
        location: "Phuket, Thailand (Remote)",
        current: true,
        description: "Driving end-to-end full-stack development for multi-branch retail POS, e-commerce, and mobile platforms across Thailand.",
        points: [
            "Developed scalable e-commerce, POS, and mobile applications using React.js, Next.js, Node.js, MySQL, and AWS-based tooling.",
            "Built real-time communication features, inventory tracking, order management, and payment workflows using Socket.IO and BullMQ.",
            "Integrated multiple Thailand payment gateways including Vexora, Rubik Pay, TS Pay, and Bangkok Bank.",
            "Delivered reliable, high-uptime scalable solutions while collaborating with international cross-functional teams."
        ],
        technologies: ["React.js", "Next.js", "Node.js", "MySQL", "Socket.IO", "BullMQ", "AWS", "Vexora", "Rubik Pay", "TS Pay", "Bangkok Bank"]
    },
    {
        id: "lyxa-full",
        company: "LYXA",
        role: "Frontend Developer",
        type: "Full-Time",
        period: "08/2023 – 03/2024",
        location: "Dhaka, Bangladesh",
        current: false,
        description: "Pioneered core frontend engineering and UX enhancements for LYXA's food delivery & logistics ecosystem.",
        points: [
            "Implemented complex web features for LYXA e-commerce & food delivery system, including precise zone coverage mapping, sales analytics, accounts, and super-admin modules.",
            "Collaborated closely with product managers and stakeholders to translate business requirements into responsive, seamless user interfaces.",
            "Managed web application performance tuning, cross-browser compatibility, and overall user experience optimization."
        ],
        technologies: ["React.js", "JavaScript", "Redux", "HTML5/CSS3", "Zone Mapping Engine", "Admin Dashboards", "UX Design"]
    },
    {
        id: "lyxa-intern",
        company: "LYXA",
        role: "Frontend Developer (Intern)",
        type: "Internship",
        period: "04/2023 – 08/2023",
        location: "Dhaka, Bangladesh",
        current: false,
        description: "Gained intensive hands-on experience in high-volume food delivery operations and client-side feature implementation.",
        points: [
            "Contributed to front-end development, UX design improvements, and technical project coordination for the LYXA platform.",
            "Worked on web delivery features and gained valuable hands-on domain experience in e-commerce logistics."
        ],
        technologies: ["React.js", "JavaScript", "CSS3", "UI/UX Prototyping", "E-Commerce Logistics"]
    }
];

export const projects = [
    {
        id: "ourstoryz",
        title: "OurStoryz – Event Management Platform",
        subtitle: "Scalable Event Platform for Corporate, Weddings & Social Experiences",
        category: "Full-Stack / Cloud",
        period: "12/2025 – Present",
        featured: true,
        imageGradient: "from-blue-600 to-indigo-900",
        badge: "Active Production Project",
        summary: "Built a scalable event management platform for office events, weddings, meetings, and social experiences using React.js, Node.js, and AWS cloud infrastructure.",
        role: "Full-Stack Architect & Core Engineer",
        highlights: [
            "Developed organizer dashboards and a guest mobile app with real-time interaction and media sharing.",
            "Implemented secure AWS Cognito/IAM authentication and integrated SES, SNS, and SQS for notifications and background processing queues.",
            "Built Stripe payment integration and scalable relational data architecture using TypeORM and MySQL."
        ],
        technologies: ["React.js", "Node.js", "AWS Cognito", "AWS SQS", "AWS SNS", "AWS SES", "TypeORM", "MySQL", "Stripe"],
        liveUrl: "https://sohidul-islam.vercel.app",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "pet-parent",
        title: "Pet Parent – Pet Licensing & Animal Welfare Platform",
        subtitle: "Full-Stack Animal Welfare Platform with AI Document Parsing",
        category: "Full-Stack / AI",
        period: "2024 – 2025",
        featured: true,
        imageGradient: "from-emerald-600 to-teal-900",
        badge: "AI Powered Platform",
        summary: "Developed a full-stack pet licensing and animal welfare platform using the T3 Stack (Next.js, TypeScript, tRPC) with Clerk authentication and Document AI Parser.",
        role: "Lead Full-Stack Developer",
        highlights: [
            "Built scalable PostgreSQL + Drizzle ORM architecture and integrated Authorize.Net for secure payment processing.",
            "Integrated Mailgun for transactional emails and developed Bulk Report Analysis for large-scale administrative processing.",
            "Implemented Document AI Parser and responsive admin tools for managing pets, owners, licenses, payments, and analytical reports."
        ],
        technologies: ["T3 Stack", "Next.js", "TypeScript", "tRPC", "Drizzle ORM", "PostgreSQL", "Document AI", "Clerk", "Authorize.Net", "Mailgun"],
        liveUrl: "https://sohidul-islam.vercel.app",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "glory-pos",
        title: "GloryPOS – Point of Sale (POS) System",
        subtitle: "Retail Sales, Real-Time Inventory & Multi-Branch Management",
        category: "Real-Time / Mobile",
        period: "01/2025 – 07/2025",
        featured: true,
        imageGradient: "from-purple-600 to-violet-900",
        badge: "Fashion Glory Co. Project",
        summary: "Built a web and Android-based POS system for retail sales, inventory tracking, and financial reporting for Fashion Glory Company Limited.",
        role: "Full-Stack & Real-Time Engineer",
        highlights: [
            "Implemented role-based access control (RBAC) for admins, managers, and cashiers with secure authentication.",
            "Enabled instant real-time updates using Socket.IO for multi-terminal sales and inventory sync.",
            "Supported multi-branch operations with a high-concurrency scalable architecture built with React.js, Node.js, Express.js, MySQL, and Socket.IO."
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.IO", "Android Web POS", "BullMQ"],
        liveUrl: "https://sohidul-islam.vercel.app",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "lyxa-delivery",
        title: "LYXA – Food Delivery & Zone Coverage System",
        subtitle: "Precision Geo-Zone Food Delivery Platform & Logistics Suite",
        category: "E-Commerce / Systems",
        period: "04/2023 – Present",
        featured: true,
        imageGradient: "from-rose-600 to-pink-900",
        badge: "E-Commerce & Logistics",
        summary: "Enhanced LYXA e-commerce with complex features, zone delivery mapping, and end-to-end administration.",
        role: "Frontend Engineer & UX Architect",
        highlights: [
            "Developed a precise zone coverage mapping and calculation system for food delivery boundaries.",
            "Managed sales, accounts, super-admin panels, and collaborated with cross-functional teams for business requirements.",
            "Improved platform performance, response speeds, and user experience with tailored modular components."
        ],
        technologies: ["React.js", "Redux", "Zone Mapping Engine", "Admin Super-Dashboard", "JavaScript", "CSS3"],
        liveUrl: "https://sohidul-islam.vercel.app",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "react-scroll-pagify",
        title: "React Scroll Pagify",
        subtitle: "Open-Source React Scroll Pagination Package",
        category: "Open Source / Package",
        period: "Published Library",
        featured: false,
        imageGradient: "from-amber-600 to-orange-900",
        badge: "NPM Package",
        summary: "Published open-source React package available on NPM for scroll-driven pagination and seamless infinite scroll rendering.",
        role: "Author & Maintainer",
        highlights: [
            "Published on NPM with smooth scroll calculation utilities.",
            "Features zero-dependency lightweight hook integration for React applications."
        ],
        technologies: ["React", "JavaScript", "NPM Registry", "Open Source"],
        liveUrl: "https://www.npmjs.com/package/react-scroll-pagify",
        githubUrl: "https://github.com/Sohidul-Islam/react-scrollify"
    }
];

export const awards = [
    {
        id: "mediusware-award",
        title: "Outstanding Software Engineer (Javascript)",
        organization: "Mediusware LTD",
        date: "December 28, 2025",
        badge: "Company Gala Award",
        description: "Recognised as an outstanding software engineer at the Mediusware annual gala event for high-impact technical performance, AI automation integrations, and full-stack software delivery."
    }
];

export const education = [
    {
        id: "bsc-cse",
        degree: "BSc in Computer Science & Engineering (CSE)",
        institution: "Port City International University",
        period: "01/2019 – 01/2023",
        location: "Chattogram, Bangladesh",
        grade: "CGPA: 3.93 / 4.00",
        badge: "High Honors",
        thesis: "Bangla Speech Emotion Recognition Using Machine Learning and Deep Learning Methods.",
        details: "Focus on Algorithms, Software Architecture, Machine Learning, Deep Learning, and Web Systems."
    },
    {
        id: "hsc",
        degree: "Higher Secondary School Certificate (HSC)",
        institution: "Moulavi Shamsul Karim College",
        period: "2018",
        location: "Feni, Bangladesh",
        grade: "GPA: 2.92 / 5.00",
        details: "Science Stream"
    },
    {
        id: "ssc",
        degree: "Secondary School Certificate (SSC)",
        institution: "Chhagalnaiya Academy",
        period: "2016",
        location: "Feni, Bangladesh",
        grade: "GPA: 4.67 / 5.00",
        details: "Science Stream"
    }
];

