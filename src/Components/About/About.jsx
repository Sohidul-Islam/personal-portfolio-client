import React from "react";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Bot,
  ShieldCheck,
  Zap,
  Award,
  BookOpen,
  MapPin,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const pillars = [
  {
    icon: Code,
    title: "Full-Stack Architecture",
    desc: "Expertise in modern JavaScript/TypeScript ecosystems. Building high-throughput applications with React.js, Next.js, NestJS, Node.js, tRPC, PostgreSQL, and MySQL.",
    color: "var(--accent-cyan)",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Real-Time",
    desc: "Deploying secure AWS infrastructure (Cognito, Lambda, SQS, SNS, SES), containerization with Docker, Nginx reverse proxies, and real-time Socket.IO/BullMQ channels.",
    color: "var(--accent-violet)",
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    desc: "Leveraging OpenAI API, Document AI parsers, and custom LLM chatbots. Orchestrating complex workflow automation pipelines with n8n and Zapier.",
    color: "var(--accent-rose)",
  },
];

export default function About() {
  return (
    <Box
      id="about"
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
              Professional Background & Approach
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
              <span className="gradient-text">Reliable & Performant</span>{" "}
              Software
            </Typography>
          </motion.div>
        </Box>

        {/* Narrative & Profile Overview */}
        <Grid container spacing={4} alignItems="stretch" sx={{ mb: 8 }}>
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
                  p: { xs: 3, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "var(--text-primary)", mb: 2 }}
                >
                  Driven by Engineering Excellence & Clean Design
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  I am a{" "}
                  <strong>Software Engineer II & Full-Stack Specialist</strong>{" "}
                  with over 3 years of professional experience taking enterprise
                  products from technical requirements and domain architecture
                  through production deployment and optimization.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  My core strengths lie in designing robust front-end web and
                  mobile applications using React.js and Next.js, paired with
                  resilient backend architectures using Node.js, NestJS, and
                  tRPC. I specialize in cloud integration via AWS, AI document
                  automation, payment processing, and high-concurrency real-time
                  systems.
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, pt: 1 }}>
                  <Chip
                    icon={<MapPin size={16} />}
                    label="Based in Dhaka, Bangladesh"
                    sx={{
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    icon={<BookOpen size={16} />}
                    label="BSc in CSE (CGPA 3.93)"
                    sx={{
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    icon={<Award size={16} />}
                    label="Outstanding Engineer Award 2025"
                    sx={{
                      backgroundColor: "rgba(0, 240, 255, 0.1)",
                      color: "var(--accent-cyan)",
                      fontWeight: 700,
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Core Competencies Cards */}
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
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: pillar.color,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: pillar.color,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={24} />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            mb: 0.5,
                            fontSize: "1.1rem",
                          }}
                        >
                          {pillar.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
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
