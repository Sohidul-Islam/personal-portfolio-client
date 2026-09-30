import React from "react";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Bot,
  Brain,
  Award,
  BookOpen,
  MapPin,
  ExternalLink,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    icon: Code,
    title: "Full-Stack Architecture",
    desc: "Expertise across modern TypeScript ecosystems. Designing high-throughput, maintainable web systems with React.js, Next.js, NestJS, Node.js, and tRPC.",
    color: "var(--accent-cyan)",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Real-Time",
    desc: "Deploying secure AWS infrastructure (Lambda, Cognito, SQS, SES), Docker containerization, Nginx proxies, and sub-second Socket.IO/BullMQ channels.",
    color: "var(--accent-violet)",
  },
  {
    icon: Brain,
    title: "AI, ML & Data Analytics",
    desc: "Machine learning research (deep neural networks, acoustic feature extraction with MFCC), empirical data analytics with Pandas/NumPy, and enterprise LLM automation workflows.",
    color: "var(--accent-rose)",
  },
];

const featuredLiveSystems = [
  { label: "OurStoryz (Event Platform)", url: "https://developer.ourstoryz.com/", host: "developer.ourstoryz.com" },
  { label: "GloryPOS (Retail POS)", url: "http://glorypos.com/", host: "glorypos.com" },
  { label: "LYXA (Food Logistics)", url: "https://lyxa.ai/", host: "lyxa.ai" },
];

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      aria-label="About Sohidul Islam"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "var(--accent-cyan)",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: 1,
                display: "block",
              }}
            >
              Engineering Philosophy & Background
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-1px",
              }}
            >
              Architecting{" "}
              <span className="gradient-text">Reliable &amp; Performant</span>{" "}
              Software
            </Typography>
          </motion.div>
        </Box>

        {/* Narrative & Pillars Grid */}
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: { xs: 3.5, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "22px",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      mb: 2,
                      fontSize: { xs: "1.3rem", sm: "1.5rem" },
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Driven by Scalability, Type Safety &amp; Production Integrity
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      fontSize: "0.98rem",
                      mb: 2,
                    }}
                  >
                    I am <strong>Sohidul Islam Shufol</strong>, recognized across developer communities, research indices, and tech platforms as <strong>sishufol</strong> (also known as <strong>siShufol</strong>, <strong>si shufol</strong>, <strong>sohidul.dev</strong>, and <strong>sishufol.com</strong>), a{" "}
                    <strong>Software Engineer II &amp; Full-Stack Architect</strong>{" "}
                    with over 3 years of commercial experience delivering enterprise-grade
                    web platforms. I specialize in translating domain complexity into
                    clean architectures, high-performance APIs, and intuitive user experiences.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      fontSize: "0.98rem",
                      mb: 3.5,
                    }}
                  >
                    My technical focus spans client-side engineering with React.js and Next.js,
                    resilient microservices with Node.js and NestJS, and cloud infrastructure
                    on AWS. Alongside web engineering, I conduct Machine Learning and Data Analytics
                    research in speech emotion recognition using Python, deep learning neural networks,
                    and automated AI workflows.
                  </Typography>

                  {/* Credentials Badges */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 3.5 }}>
                    <Chip
                      icon={<ExternalLink size={15} />}
                      label="sohidul.dev / sishufol.com"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.12)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                      }}
                    />
                    <Chip
                      icon={<MapPin size={15} />}
                      label="Feni, Dhaka 3910, Bangladesh"
                      size="small"
                      sx={{
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        border: "1px solid var(--border-subtle)",
                      }}
                    />
                    <Chip
                      icon={<BookOpen size={15} />}
                      label="BSc in Computer Science (Honors)"
                      size="small"
                      sx={{
                        backgroundColor: "var(--bg-primary)",
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        border: "1px solid var(--border-subtle)",
                      }}
                    />
                    <Chip
                      icon={<Award size={15} />}
                      label="Outstanding Engineer Award 2025"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.12)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        border: "1px solid rgba(0, 240, 255, 0.25)",
                      }}
                    />
                    <Chip
                      component="a"
                      href="https://ieeexplore.ieee.org/document/11005193"
                      target="_blank"
                      rel="noopener noreferrer"
                      clickable
                      icon={<FileCheck size={15} />}
                      label="IEEE Research Author"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(139, 92, 246, 0.12)",
                        color: "var(--accent-violet)",
                        fontWeight: 700,
                        border: "1px solid rgba(139, 92, 246, 0.3)",
                        "&:hover": {
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                        },
                      }}
                    />
                    <Chip
                      component="a"
                      href="https://github.com/Sohidul-Islam/BANGLA-SPEECH-EMOTION-RECOGNITION-USING-MACHINE-LEARNING-AND-DEEP-LEARNING-METHODS"
                      target="_blank"
                      rel="noopener noreferrer"
                      clickable
                      icon={<Code size={15} />}
                      label="Research Codebase (GitHub)"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.08)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        border: "1px solid rgba(0, 240, 255, 0.25)",
                        "&:hover": {
                          backgroundColor: "rgba(0, 240, 255, 0.16)",
                        },
                      }}
                    />
                  </Box>
                </Box>

                {/* Live Deployed Systems Bar */}
                <Box
                  sx={{
                    pt: 2.5,
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "var(--text-muted)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      display: "block",
                      mb: 1.2,
                      fontSize: "0.72rem",
                    }}
                  >
                    Active Commercial Platforms:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {featuredLiveSystems.map((item, idx) => (
                      <Chip
                        key={idx}
                        component="a"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        clickable
                        icon={<ExternalLink size={13} />}
                        label={item.label}
                        size="small"
                        sx={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-accent)",
                          color: "var(--accent-cyan)",
                          fontWeight: 600,
                          fontSize: "0.78rem",
                          "&:hover": {
                            backgroundColor: "rgba(0, 240, 255, 0.08)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Pillars Cards */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  height: "100%",
                }}
              >
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <Box
                      key={idx}
                      className="glass-card"
                      sx={{
                        p: 3,
                        flex: 1,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2.5,
                        borderRadius: "18px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: pillar.color,
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: "12px",
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: pillar.color,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} />
                      </Box>

                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            mb: 0.5,
                            fontSize: "1.05rem",
                          }}
                        >
                          {pillar.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                            fontSize: "0.88rem",
                          }}
                        >
                          {pillar.desc}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
