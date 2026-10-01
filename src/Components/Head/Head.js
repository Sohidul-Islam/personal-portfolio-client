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
  ].filter(Boolean);

  const alumniOfEntities = education.map((edu) => ({
    "@type": edu.id === "bsc-cse" ? "CollegeOrUniversity" : "EducationalOrganization",
    "name": edu.institution,
    "address": edu.location,
    "sameAs": edu.institution.includes("Port City") ? "https://www.portcity.edu.bd" : undefined,
  }));

  const credentials = education.map((edu) => ({
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Degree",
    "name": edu.degree,
    "recognizedBy": {
      "@type": "EducationalOrganization",
      "name": edu.institution,
    },
  }));

  const projectEntities = projects.map((proj) => ({
    "@type": proj.id === "react-scroll-pagify" ? ["SoftwareSourceCode", "SoftwareApplication"] : "SoftwareApplication",
    "@id": `${baseUrl}/#project-${proj.id}`,
    "name": proj.title,
    "alternateName": proj.subtitle,
    "description": proj.summary,
    "applicationCategory": proj.category,
    "operatingSystem": "Web",
    "author": { "@id": `${baseUrl}/#person` },
    "creator": { "@id": `${baseUrl}/#person` },
    "programmingLanguage": proj.technologies,
    "codeRepository": proj.githubUrl,
    "url": proj.liveUrl || proj.githubUrl,
    "featureList": proj.highlights,
  }));

  const ieeePaperEntity = {
    "@type": "ScholarlyArticle",
    "@id": `${baseUrl}/#ieee-paper`,
    "name": "Bangla Speech Emotion Recognition Using Machine Learning and Deep Learning Methods",
    "author": { "@id": `${baseUrl}/#person` },
    "publisher": {
      "@type": "Organization",
      "name": "IEEE Xplore",
      "url": "https://ieeexplore.ieee.org",
    },
    "url": "https://ieeexplore.ieee.org/document/11005193",
    "sameAs": "https://github.com/Sohidul-Islam/BANGLA-SPEECH-EMOTION-RECOGNITION-USING-MACHINE-LEARNING-AND-DEEP-LEARNING-METHODS",
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
    ],
    "gender": "https://schema.org/Male",
    "jobTitle": personalInfo.title,
    "description": personalInfo.summary,
    "url": `${baseUrl}/`,
    "image": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#profile-image`,
      "url": `${baseUrl}/profile.jpg`,
      "contentUrl": `${baseUrl}/profile.jpg`,
      "caption": "Sohidul Islam Shufol (sishufol / Shufol / Sohidul software engineer) - Software Engineer II & Full-Stack Architect",
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
      "description": exp.role,
    })),
    "alumniOf": alumniOfEntities,
    "hasCredential": credentials,
    "award": awards.map((a) => `${a.title} (${a.organization}, ${a.date})`),
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer II",
      "occupationLocation": {
        "@type": "City",
        "name": "Dhaka",
        "addressCountry": "BD",
      },
      "skills": ["React.js", "Next.js", "TypeScript", "Node.js", "NestJS", "AWS Cloud", "PostgreSQL", "MySQL", "WebSockets"],
    },
  };

  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": `${baseUrl}/`,
    "name": "Sohidul Islam Shufol (sishufol / Shufol / Sohidul software engineer)",
    "alternateName": personalInfo.searchVariations,
    "description": `Official website and engineering portfolio of ${personalInfo.fullNameWithNick} — Software Engineer II & Full-Stack Architect.`,
    "publisher": { "@id": `${baseUrl}/#person` },
    "author": { "@id": `${baseUrl}/#person` },
    "inLanguage": "en-US",
  };

  const profilePageEntity = {
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#profilepage`,
    "url": `${baseUrl}/`,
    "name": "Sohidul Islam Shufol (sishufol / Shufol / Sohidul software engineer) - Professional Profile & Portfolio",
    "description": personalInfo.summary,
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
      "Sohidul Islam Shufol (sishufol / Shufol / Sohidul software engineer) | Software Engineer II & Full-Stack Architect | sohidul.dev";

    // 2. Dynamically synchronize meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Official portfolio of Sohidul Islam Shufol (Shufol / sishufol / Sohidul software engineer / sohidul.dev / sishufol.com) — Software Engineer II & Full-Stack Architect building scalable web applications, real-time architectures, AI automation, and AWS cloud systems."
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