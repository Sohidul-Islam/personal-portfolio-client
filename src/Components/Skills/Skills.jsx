import React, { useState } from "react";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Activity,
  Bot,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { skillCategories } from "../../data/portfolioData";
import TiltCard from "../Motion/TiltCard";

const categoryMeta = {
  languages: {
    icon: Code2,
    title: "Languages",
    desc: "Type-safe, modern programming languages for frontend, backend, and scripting.",
    color: "var(--accent-cyan)",
  },
  frontend: {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "Building reactive, accessible, and high-performance user interfaces and SPAs.",
    color: "var(--accent-violet)",
  },
  backend: {
    icon: Server,
    title: "Backend & APIs",
    desc: "Robust server-side microservices, REST APIs, and type-safe RPC endpoints.",
    color: "var(--accent-cyan)",
  },
  database_orm: {
    icon: Database,
    title: "Database & ORM",
    desc: "Relational schema design, migrations, high-throughput queries, and ORM abstractions.",
    color: "var(--accent-emerald)",
  },
  cloud_devops: {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Serverless pipelines, containerized environments, and secure cloud networking.",
    color: "var(--accent-cyan)",
  },
  realtime_systems: {
    icon: Activity,
    title: "Real-Time & Architecture",
    desc: "Low-latency WebSocket duplex communication, async message queues, and billing.",
    color: "var(--accent-violet)",
  },
  ai_ml_analytics: {
    icon: Brain,
    title: "AI, ML & Data Analytics",
    desc: "Machine learning research, deep neural networks, audio signal processing, and production LLM automation.",
    color: "var(--accent-rose)",
  },
  ai_automation: {
    icon: Bot,
    title: "AI & Workflow Automation",
    desc: "Integrating generative LLMs, automated document parsers, and event workflows.",
    color: "var(--accent-rose)",
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = skillCategories.filter((c) => c.id !== "all");

  const displayedCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <Box
      id="skills"
      component="section"
      aria-label="Technical Skills and Stack"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
              Technical Capabilities
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
              Core <span className="gradient-text">Skills & Technologies</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "var(--text-secondary)",
                mt: 1.5,
                maxWidth: "680px",
                mx: "auto",
                fontSize: "1rem",
              }}
            >
              A focused, production-proven technology stack grounded strictly in
              real-world commercial engineering experience.
            </Typography>
          </motion.div>
        </Box>

        {/* Category Filter Pills */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.2,
            mb: 6,
          }}
        >
          {skillCategories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              sx={{
                borderRadius: "30px",
                px: 2.8,
                py: 0.9,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.88rem",
                backgroundColor:
                  activeCategory === cat.id
                    ? "var(--gradient-btn)"
                    : "var(--bg-card)",
                color:
                  activeCategory === cat.id ? "#fff" : "var(--text-secondary)",
                border:
                  activeCategory === cat.id
                    ? "none"
                    : "1px solid var(--border-subtle)",
                boxShadow:
                  activeCategory === cat.id ? "var(--shadow-glow)" : "none",
                transition: "all 0.25s ease",
                "&:hover": {
                  backgroundColor:
                    activeCategory === cat.id
                      ? "var(--gradient-btn)"
                      : "var(--bg-card-hover)",
                  color:
                    activeCategory === cat.id ? "#fff" : "var(--accent-cyan)",
                  borderColor: "var(--border-accent)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {cat.label}
            </Button>
          ))}
        </Box>

        {/* Categorized Skills Cards Grid */}
        <Grid container spacing={3.5}>
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, idx) => {
              const meta = categoryMeta[category.id] || {
                icon: Code2,
                title: category.label,
                desc: "",
                color: "var(--accent-cyan)",
              };
              const CategoryIcon = meta.icon;

              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={category.id === "ai_ml_analytics" || category.id === "ai_automation" ? 12 : 4}
                  key={category.id}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    style={{ height: "100%" }}
                  >
                    <TiltCard
                      maxTilt={4}
                      scaleOnHover={1.015}
                      style={{ height: "100%", borderRadius: "20px" }}
                    >
                      <Box
                        className="glass-card"
                        sx={{
                          p: 3.5,
                          borderRadius: "20px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                          "&:hover": {
                            borderColor: meta.color,
                            boxShadow: `0 0 20px ${meta.color}25`,
                          },
                        }}
                      >
                      <Box>
                        {/* Header with Icon and Title */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.8,
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "12px",
                              backgroundColor: "var(--bg-primary)",
                              border: "1px solid var(--border-subtle)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: meta.color,
                              flexShrink: 0,
                            }}
                          >
                            <CategoryIcon size={22} />
                          </Box>
                          <Box>
                            <Typography
                              variant="h3"
                              sx={{
                                fontWeight: 800,
                                fontSize: "1.15rem",
                                color: "var(--text-primary)",
                                letterSpacing: "-0.3px",
                              }}
                            >
                              {meta.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "var(--text-muted)",
                                display: "block",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                              }}
                            >
                              {category.skills.length} core technologies
                            </Typography>
                          </Box>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-secondary)",
                            fontSize: "0.86rem",
                            lineHeight: 1.6,
                            mb: 3,
                          }}
                        >
                          {meta.desc}
                        </Typography>
                      </Box>

                      {/* Technology Pills List */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          pt: 2,
                          borderTop: "1px solid var(--border-subtle)",
                        }}
                      >
                        {category.skills.map((skill, sIdx) => (
                          <Chip
                            key={sIdx}
                            icon={<CheckCircle2 size={13} color={meta.color} />}
                            label={skill.name}
                            size="small"
                            sx={{
                              backgroundColor: "var(--bg-primary)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-primary)",
                              fontWeight: 600,
                              fontSize: "0.78rem",
                              py: 1.8,
                              px: 0.5,
                              transition: "all 0.2s ease",
                              "&:hover": {
                                borderColor: meta.color,
                                backgroundColor: "rgba(0, 240, 255, 0.05)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </TiltCard>
                </motion.div>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
}
