// Grounded, verified portfolio data for Sohidul Islam.

export const personalInfo = {
    name: "Sohidul Islam",
    title: "Software Engineer II | Full-Stack Engineer",
    subtitle: "3+ Years Professional Experience • Scalable Web, Cloud & AI Systems",
    email: "shufol.cse@gmail.com",
    phone: "01854107699",
    location: "Basabo, Dhaka, Bangladesh",
    status: "Available for Senior Roles & Impactful Projects",

    socials: {
        github: "https://github.com/Sohidul-Islam",
        linkedin: "https://www.linkedin.com/in/sishufol",
        portfolio: "https://sohidul-islam.vercel.app",
        leetcode: "https://leetcode.com/u/CSE01806649/",
        codeforces: "https://codeforces.com/profile/sohidul_pciu",
        stopstalk: "https://www.stopstalk.com/user/profile/sishufol"
    },

    summary: "Software Engineer II with 3+ years of experience engineering scalable, high-availability web applications using React.js, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and MySQL. Proven track record deploying cloud services on AWS, architecting real-time systems with WebSockets, and automating workflows with LLMs and queue architectures.",

    typingRoles: [
        "Software Engineer II",
        "Full-Stack Architect",
        "AWS Cloud Solutions Engineer",
        "AI & Workflow Automation Builder",
        "Real-Time Systems Developer"
    ],

    stats: [
        { value: "3+", label: "Years Experience" },
        { value: "4+", label: "Production Platforms" },
        { value: "3.93", label: "BSc CSE CGPA" },
        { value: "1", label: "IEEE Publication" }
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
            { name: "Python", level: "Proficient", icon: "Terminal" }
        ]
    },
    {
        id: "frontend",
        label: "Frontend",
        skills: [
            { name: "React.js", level: "Expert", icon: "Layout" },
            { name: "Next.js", level: "Advanced", icon: "Globe" },
            { name: "Redux Toolkit", level: "Advanced", icon: "Cpu" },
            { name: "Tailwind CSS", level: "Advanced", icon: "Palette" }
        ]
    },
    {
        id: "backend",
        label: "Backend",
        skills: [
            { name: "Node.js", level: "Advanced", icon: "Server" },
            { name: "NestJS", level: "Advanced", icon: "Box" },
            { name: "Express.js", level: "Advanced", icon: "Zap" },
            { name: "tRPC", level: "Advanced", icon: "Network" }
        ]
    },
    {
        id: "database_orm",
        label: "Database & ORM",
        skills: [
            { name: "PostgreSQL", level: "Advanced", icon: "Database" },
            { name: "MySQL", level: "Advanced", icon: "Database" },
            { name: "Drizzle ORM", level: "Advanced", icon: "GitCommit" },
            { name: "TypeORM", level: "Advanced", icon: "HardDrive" }
        ]
    },
    {
        id: "cloud_devops",
        label: "Cloud & DevOps",
        skills: [
            { name: "AWS Cloud (Cognito, Lambda, SQS, SES)", level: "Advanced", icon: "Cloud" },
            { name: "Docker", level: "Proficient", icon: "Container" },
            { name: "Nginx & Reverse Proxies", level: "Proficient", icon: "ShieldCheck" }
        ]
    },
    {
        id: "realtime_systems",
        label: "Real-Time & Architecture",
        skills: [
            { name: "WebSocket & Socket.IO", level: "Advanced", icon: "Activity" },
            { name: "BullMQ Message Queues", level: "Proficient", icon: "ListOrdered" },
            { name: "Payment Gateways (Stripe, Authorize.Net)", level: "Advanced", icon: "CreditCard" }
        ]
    },
    {
        id: "ai_ml_analytics",
        label: "AI, ML & Data Analytics",
        skills: [
            { name: "Machine Learning & Deep Learning (CNN, LSTM)", level: "Advanced", icon: "Brain" },
            { name: "Data Analytics (Pandas, NumPy, Matplotlib)", level: "Advanced", icon: "BarChart3" },
            { name: "Audio Signal & Speech Processing (MFCC)", level: "Advanced", icon: "Mic" },
            { name: "Scikit-Learn & Feature Engineering", level: "Advanced", icon: "Cpu" },
            { name: "OpenAI API & LLM Integration", level: "Advanced", icon: "Bot" },
            { name: "Workflow Automation (n8n, Zapier)", level: "Advanced", icon: "Workflow" }
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
        subtitle: "Enterprise event management system with real-time attendee interaction and cloud queues.",
        category: "Full-Stack / Cloud",
        period: "12/2025 – Present",
        featured: true,
        imageGradient: "from-blue-600 to-indigo-900",
        badge: "Active Production",
        summary: "Engineered a scalable event platform for corporate gatherings, weddings, and conferences utilizing React.js, Node.js, and AWS serverless infrastructure.",
        role: "Full-Stack Architect & Core Engineer",
        highlights: [
            "Developed organizer dashboards and a guest mobile web experience with real-time interaction and media sharing.",
            "Implemented secure AWS Cognito/IAM authentication and integrated SES, SNS, and SQS for notifications and background queue jobs.",
            "Built Stripe payment processing and scalable relational schema design using TypeORM and MySQL."
        ],
        technologies: ["React.js", "Node.js", "AWS Cognito", "AWS SQS", "TypeORM", "MySQL", "Stripe"],
        liveUrl: "https://developer.ourstoryz.com/",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "pet-parent",
        title: "Pet Parent – Animal Licensing & Welfare Platform",
        subtitle: "Full-stack licensing platform featuring automated AI document parsing and secure payments.",
        category: "Full-Stack / AI",
        period: "2024 – 2025",
        featured: true,
        imageGradient: "from-emerald-600 to-teal-900",
        badge: "AI Powered",
        summary: "Developed an administrative pet licensing platform utilizing the T3 Stack (Next.js, TypeScript, tRPC) with Clerk authentication and Document AI parsing.",
        role: "Lead Full-Stack Developer",
        highlights: [
            "Engineered high-performance PostgreSQL + Drizzle ORM architecture and integrated Authorize.Net for recurring payments.",
            "Integrated Mailgun transactional workflows and built bulk report analytics for administrative auditing.",
            "Created responsive admin tooling for managing verified pet registrations, license issuance, and renewals."
        ],
        technologies: ["Next.js", "TypeScript", "tRPC", "Drizzle ORM", "PostgreSQL", "Authorize.Net"],
        liveUrl: "http://authorize.net/",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "glory-pos",
        title: "GloryPOS – Point of Sale & Inventory Platform",
        subtitle: "Real-time retail POS system supporting multi-terminal synchronization and branch management.",
        category: "Real-Time / POS",
        period: "01/2025 – 07/2025",
        featured: true,
        imageGradient: "from-purple-600 to-violet-900",
        badge: "Retail System",
        summary: "Built a web and Android POS solution for retail checkout, synchronized stock tracking, and multi-branch financial accounting.",
        role: "Full-Stack & Real-Time Engineer",
        highlights: [
            "Implemented role-based access control (RBAC) across cashiers, managers, and administrators.",
            "Enabled sub-second WebSocket updates via Socket.IO for multi-terminal inventory deduction and sales logging.",
            "Engineered resilient multi-branch data architecture using Node.js, Express.js, MySQL, and BullMQ."
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.IO", "BullMQ"],
        liveUrl: "http://glorypos.com/",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "lyxa-delivery",
        title: "LYXA – Food Delivery & Geo-Zone Logistics",
        subtitle: "High-volume food delivery ecosystem with precision geospatial polygon mapping.",
        category: "E-Commerce / Logistics",
        period: "04/2023 – Present",
        featured: true,
        imageGradient: "from-rose-600 to-pink-900",
        badge: "Logistics Suite",
        summary: "Scaled core frontend features for LYXA's delivery platform, including geometric zone boundary calculation and order orchestration.",
        role: "Frontend Engineer & UX Architect",
        highlights: [
            "Built a custom geometric boundary mapping engine for multi-restaurant delivery zone coverage.",
            "Engineered high-throughput admin dashboards for financial reconciliation and order analytics.",
            "Optimized client rendering pipelines for sub-second UI interactions across mobile and desktop."
        ],
        technologies: ["React.js", "Redux Toolkit", "Geo-Mapping Engine", "JavaScript", "Tailwind CSS"],
        liveUrl: "https://lyxa.ai/",
        githubUrl: "https://github.com/Sohidul-Islam"
    },
    {
        id: "react-scroll-pagify",
        title: "React Scroll Pagify",
        subtitle: "Lightweight open-source React library for seamless infinite scrolling and pagination.",
        category: "Open Source / NPM",
        period: "Published Library",
        featured: false,
        imageGradient: "from-amber-600 to-orange-900",
        badge: "NPM Package",
        summary: "Published open-source React package available on NPM providing zero-dependency hooks for scroll-driven pagination.",
        role: "Author & Maintainer",
        highlights: [
            "Published and maintained on the official NPM Registry.",
            "Zero external runtime dependencies with high performance scroll observation."
        ],
        technologies: ["React", "TypeScript", "NPM Registry", "Open Source"],
        liveUrl: "https://www.npmjs.com/package/react-scroll-pagify",
        githubUrl: "https://github.com/Sohidul-Islam/react-scrollify"
    }
];

export const awards = [
    {
        id: "mediusware-award",
        title: "Outstanding Software Engineer (JavaScript)",
        organization: "Mediusware LTD",
        date: "December 28, 2025",
        badge: "Annual Excellence Award",
        description: "Recognized as an outstanding software engineer at the Mediusware annual gala event for exceptional technical execution, AI automation delivery, and full-stack software architecture."
    },
    {
        id: "ieee-publication",
        title: "Bangla Speech Emotion Recognition Research",
        organization: "IEEE Xplore Publication",
        date: "Published 2025",
        badge: "IEEE Research",
        description: "Co-authored and published peer-reviewed research on Machine Learning & Deep Learning architectures for acoustic emotion classification in the Bangla language.",
        link: "https://ieeexplore.ieee.org/document/11005193",
        codeUrl: "https://github.com/Sohidul-Islam/BANGLA-SPEECH-EMOTION-RECOGNITION-USING-MACHINE-LEARNING-AND-DEEP-LEARNING-METHODS"
    }
];

export const education = [
    {
        id: "bsc-cse",
        degree: "BSc in Computer Science & Engineering (CSE)",
        institution: "Port City International University",
        period: "01/2019 – 01/2023",
        location: "Chattogram, Bangladesh",
        badge: "Graduated with High Honors",
        thesis: "Bangla Speech Emotion Recognition Using Machine Learning and Deep Learning Methods.",
        publicationUrl: "https://ieeexplore.ieee.org/document/11005193",
        codeUrl: "https://github.com/Sohidul-Islam/BANGLA-SPEECH-EMOTION-RECOGNITION-USING-MACHINE-LEARNING-AND-DEEP-LEARNING-METHODS",
        details: "Comprehensive coursework in Data Structures, Algorithms, Distributed Systems, Machine Learning, and Software Architecture. Published IEEE research author."
    },
    {
        id: "hsc",
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Moulavi Shamsul Karim College",
        period: "2016 – 2018",
        location: "Feni, Bangladesh",
        badge: "Higher Secondary",
        details: "Concentration in Science: Higher Mathematics, Physics, Chemistry, and Information & Communication Technology."
    },
    {
        id: "ssc",
        degree: "Secondary School Certificate (SSC)",
        institution: "Chhagalnaiya Pilot High School",
        period: "2014 – 2016",
        location: "Feni, Bangladesh",
        badge: "Secondary School",
        details: "Concentration in General Science, Mathematics, Physics, and Foundational Computing."
    }
];
