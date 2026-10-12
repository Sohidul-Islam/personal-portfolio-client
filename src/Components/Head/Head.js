import { useEffect } from "react";
import { personalInfo, skillCategories, experiences, projects, awards, education } from "../../data/portfolioData";

export const generateSchemaGraph = () => {
  const baseUrl = "https://sohidul-islam.vercel.app";

  const allSkills = skillCategories
    .flatMap((cat) => (cat.skills ? cat.skills.map((s) => s.name) : []))
    .filter(Boolean);

  const sameAsLinks = [
    personalInfo.socials.github,
    personalInfo.socials.linkedin,
    personalInfo.socials.medium,
    personalInfo.socials.facebook,
    personalInfo.socials.twitter,
    "https://x.com/sishufol",
    personalInfo.socials.leetcode,
    personalInfo.socials.codeforces,
    personalInfo.socials.stopstalk,
    "https://ieeexplore.ieee.org/document/11005193",
    "https://www.npmjs.com/package/react-scroll-pagify",
    "https://www.wikidata.org/wiki/Q141713831",
  ].filter(Boolean);

  const alumniOfEntities = education.map((edu) => ({
    "@type": edu.id === "bsc-cse" ? "CollegeOrUniversity" : "EducationalOrganization",
    "name": edu.institution,
    "sameAs": edu.institution.includes("Port City") ? "https://www.portcity.edu.bd" : undefined,
    "location": {
      "@type": "PostalAddress",
      "addressLocality": edu.location.split(",")[0].trim(),
      "addressCountry": "BD",
    },
  }));

  const credentials = education.map((edu) => ({
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "name": edu.degree,
    "recognizedBy": {
      "@type": "EducationalOrganization",
      "name": edu.institution,
    },
  }));

  const projectEntities = projects.map((proj) => {
    const primaryLang =
      proj.technologies.find((t) => ["TypeScript", "JavaScript", "Python"].includes(t)) || "JavaScript";

    return {
      "@type": "SoftwareSourceCode",
      "@id": `${baseUrl}/#project-${proj.id}`,
      "name": proj.title,
      "abstract": proj.subtitle,
      "description": proj.summary,
      "codeRepository": proj.githubUrl,
      "programmingLanguage": primaryLang,
      "runtimePlatform": proj.technologies.join(", "),
      "keywords": proj.technologies.join(", "),
      "url": proj.liveUrl || proj.githubUrl,
      "author": { "@id": `${baseUrl}/#person` },
      "creator": { "@id": `${baseUrl}/#person` },
    };
  });

  const ieeePaperEntity = {
    "@type": "ScholarlyArticle",
    "@id": `${baseUrl}/#ieee-paper`,
    "headline": "Bangla Speech Emotion Recognition Using Machine Learning and Deep Learning Methods",
    "name": "Bangla Speech Emotion Recognition Using Machine Learning and Deep Learning Methods",
    "datePublished": "2025",
    "inLanguage": "en",
    "author": { "@id": `${baseUrl}/#person` },
    "publisher": {
      "@type": "Organization",
      "name": "IEEE Xplore",
      "url": "https://ieeexplore.ieee.org",
    },
    "url": "https://ieeexplore.ieee.org/document/11005193",
  };

  const personEntity = {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    "name": personalInfo.name,
    "givenName": "Sohidul",
    "familyName": "Islam",
    "additionalName": personalInfo.nickname,
    "alternateName": [
      "Shufol",
      "Sohidul Islam",
      "sishufol",
      "Sohidul Islam Shufol",
      "Sohidul software engineer",
      "Sishufol",
      "siShufol",
      "si shufol",
      "SOHIDUL ISLAM SHUFOL",
      "SI Shufol",
      "si-shufol",
      "sishufol.com",
      "sishufol.dev",
      "sohidul.dev",
      "sishfuol",
      "sishfuol.dev",
      "Sohidul Developer",
      "Sohidul Software Engineer",
      "Sohidul Full Stack Developer",
      "Sohidul JavaScript Developer",
      "Shahidul Islam",
      "Shohidul Islam",
      "শহিদুল ইসলাম সুফল",
      "শহিদুল ইসলাম",
      "সুফল",
      "শহিদুল",
      "সহিদুল ইসলাম",
      "সহিদুল ইসলাম সুফল",
    ],
    "gender": "https://schema.org/Male",
    "jobTitle": personalInfo.title,
    "disambiguatingDescription": "Bangladeshi software engineer, full-stack architect, and IEEE-published AI researcher, distinct from the cricketer Shohidul Islam.",
    "description": personalInfo.summary,
    "url": `${baseUrl}/`,
    "image": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#profile-image`,
      "url": `${baseUrl}/profile.jpg`,
      "contentUrl": `${baseUrl}/profile.jpg`,
      "caption": "Sohidul Islam Shufol - Software Engineer II & Full-Stack Architect",
      "representativeOfPage": true,
    },
    "email": `mailto:${personalInfo.email}`,
    "telephone": `+880${personalInfo.phone.replace(/^0/, "")}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chhagalnaiya - Box Mahmud Road",
      "addressLocality": "Feni",
      "addressRegion": "Dhaka",
      "postalCode": "3910",
      "addressCountry": "BD",
    },
    "sameAs": sameAsLinks,
    "knowsAbout": allSkills,
    "worksFor": experiences.map((exp) => ({
      "@type": "Organization",
      "name": exp.company,
      ...(exp.website ? { "url": exp.website } : {}),
    })),
    "alumniOf": alumniOfEntities,
    "hasCredential": credentials,
    "award": awards.map((a) => `${a.title} (${a.organization}, ${a.date})`),
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer II",
      "occupationLocation": {
        "@type": "AdministrativeArea",
        "name": "Dhaka, Bangladesh",
      },
      "skills": "React.js, Next.js, TypeScript, Node.js, NestJS, AWS Cloud, PostgreSQL, MySQL, WebSockets",
    },
    "nationality": {
      "@type": "Country",
      "name": "Bangladesh",
      "sameAs": "https://en.wikipedia.org/wiki/Bangladesh",
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Chhagalnaiya, Feni, Bangladesh",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Feni",
        "addressCountry": "BD",
      },
    },
    "knowsLanguage": [
      { "@type": "Language", "name": "English", "alternateName": "en" },
      { "@type": "Language", "name": "Bangla", "alternateName": "bn" },
    ],
  };

  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": `${baseUrl}/`,
    "name": "Sohidul Islam Shufol Portfolio",
    "alternateName": personalInfo.searchVariations,
    "description": `Official website and engineering portfolio of ${personalInfo.fullNameWithNick} — Software Engineer II & Full-Stack Architect.`,
    "publisher": { "@id": `${baseUrl}/#person` },
    "author": { "@id": `${baseUrl}/#person` },
    "inLanguage": ["en-US", "bn-BD"],
  };

  const profilePageEntity = {
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#profilepage`,
    "url": `${baseUrl}/`,
    "name": "Sohidul Islam Shufol — Professional Profile & Portfolio",
    "description": personalInfo.summary,
    "datePublished": "2024-03-01",
    "dateModified": new Date().toISOString().split("T")[0],
    "inLanguage": ["en-US", "bn-BD"],
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "about": { "@id": `${baseUrl}/#person` },
    "mainEntity": { "@id": `${baseUrl}/#person` },
    "primaryImageOfPage": { "@id": `${baseUrl}/#profile-image` },
  };

  const breadcrumbsEntity = {
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumbs`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "About", "item": `${baseUrl}/#about` },
      { "@type": "ListItem", "position": 3, "name": "Skills", "item": `${baseUrl}/#skills` },
      { "@type": "ListItem", "position": 4, "name": "Experience", "item": `${baseUrl}/#experience` },
      { "@type": "ListItem", "position": 5, "name": "Projects", "item": `${baseUrl}/#projects` },
      { "@type": "ListItem", "position": 6, "name": "Achievements", "item": `${baseUrl}/#achievements` },
      { "@type": "ListItem", "position": 7, "name": "Education", "item": `${baseUrl}/#education` },
      { "@type": "ListItem", "position": 8, "name": "Contact", "item": `${baseUrl}/#contact` },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      personEntity,
      websiteEntity,
      profilePageEntity,
      breadcrumbsEntity,
      ieeePaperEntity,
      ...projectEntities,
    ],
  };
};

export default function Head() {
  useEffect(() => {
    // 1. Ensure Document Title is optimized
    document.title =
      "Sohidul Islam Shufol — Software Engineer II | Full-Stack Developer Portfolio";

    // 2. Dynamically synchronize meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Software Engineer II building scalable web applications, real-time architectures, and AWS cloud systems with React.js, Next.js, TypeScript, Node.js, and NestJS. IEEE published researcher. Portfolio and case studies by Sohidul Islam Shufol."
      );
    }

    // 3. Inject or Update JSON-LD Script in <head>
    let scriptTag = document.getElementById("json-ld-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "json-ld-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(generateSchemaGraph(), null, 2);
  }, []);

  return null;
}