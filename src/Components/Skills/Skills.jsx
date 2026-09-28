import React, { useState } from "react";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  FileCode,
  Terminal,
  Layout,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Palette,
  Server,
  Zap,
  Box as BoxIcon,
  Network,
  Database,
  HardDrive,
  GitCommit,
  Cloud,
  Send,
  Container as DockerIcon,
  ShieldCheck,
  Bot,
  FileText,
  MessageSquare,
  Workflow,
  Activity,
  ListOrdered,
  CreditCard,
  Lock,
} from "lucide-react";
import { skillCategories } from "../../data/portfolioData";

const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Layout,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Palette,
  Server,
  Zap,
  Box: BoxIcon,
  Network,
  Database,
  HardDrive,
  GitCommit,
  Cloud,
  Send,
  Container: DockerIcon,
  ShieldCheck,
  Bot,
  FileText,
  MessageSquare,
  Workflow,
  Activity,
  ListOrdered,
  CreditCard,
  Lock,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allSkillsList = skillCategories
    .filter((cat) => cat.id !== "all")
    .flatMap((cat) =>
      cat.skills.map((skill) => ({
        ...skill,
        categoryLabel: cat.label,
        categoryId: cat.id,
      })),
    );

  const displayedSkills =
    activeCategory === "all"
      ? allSkillsList
      : allSkillsList.filter((skill) => skill.categoryId === activeCategory);

  return (
    <Box
      id="skills"
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
              Technical Expertise
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
              Skills & <span className="gradient-text">Technologies</span>
            </Typography>
          </motion.div>
        </Box>

        {/* Category Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 6,
          }}
        >
          {skillCategories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              sx={{
                borderRadius: "30px",
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
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
                transition: "all 0.3s ease",
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

        {/* Skills Grid */}
        <Grid container spacing={3}>
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`${skill.name}-${index}`}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <Box
                      className="glass-card"
                      sx={{
                        p: 2.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        height: "100%",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "var(--border-accent)",
                          transform: "translateY(-4px)",
                        },
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
                          color: "var(--accent-cyan)",
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={22} />
                      </Box>

                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography
                          variant="subtitle1"
                          noWrap
                          sx={{
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            fontSize: "0.98rem",
                            mb: 0.2,
                          }}
                        >
                          {skill.name}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: "var(--text-muted)",
                              fontSize: "0.75rem",
                            }}
                          >
                            {skill.categoryLabel}
                          </Typography>

                          <Chip
                            label={skill.level}
                            size="small"
                            sx={{
                              height: 20,
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              backgroundColor:
                                skill.level === "Expert"
                                  ? "rgba(0, 240, 255, 0.15)"
                                  : skill.level === "Advanced"
                                  ? "rgba(139, 92, 246, 0.15)"
                                  : "rgba(255, 255, 255, 0.08)",
                              color:
                                skill.level === "Expert"
                                  ? "var(--accent-cyan)"
                                  : skill.level === "Advanced"
                                  ? "var(--accent-violet)"
                                  : "var(--text-secondary)",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
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
