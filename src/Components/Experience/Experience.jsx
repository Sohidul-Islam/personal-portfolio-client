import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Briefcase,
} from "lucide-react";
import { experiences } from "../../data/portfolioData";
import TiltCard from "../Motion/TiltCard";

export default function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      aria-label="Professional Experience and Employment History"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Container maxWidth="lg">
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
              Career Trajectory
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
              Professional <span className="gradient-text">Experience</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "var(--text-secondary)",
                mt: 1.5,
                maxWidth: "640px",
                mx: "auto",
                fontSize: "1rem",
              }}
            >
              Engineering enterprise full-stack systems, cloud architectures, and
              real-time features in fast-paced software environments.
            </Typography>
          </motion.div>
        </Box>

        {/* Cohesive Vertical Timeline */}
        <Box sx={{ position: "relative", pl: { xs: 3, sm: 6 } }}>
          {/* Vertical Timeline Guide Line */}
          <Box
            sx={{
              position: "absolute",
              top: 15,
              bottom: 15,
              left: { xs: 7, sm: 19 },
              width: "2px",
              background:
                "linear-gradient(180deg, var(--accent-cyan) 0%, rgba(0, 240, 255, 0.2) 80%, transparent 100%)",
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {experiences.map((exp, idx) => (
              <Box key={exp.id} sx={{ position: "relative" }}>
                {/* Timeline Milestone Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: -24, sm: -38 },
                    top: 24,
                    width: { xs: 16, sm: 20 },
                    height: { xs: 16, sm: 20 },
                    borderRadius: "50%",
                    backgroundColor: exp.current
                      ? "var(--accent-cyan)"
                      : "var(--bg-primary)",
                    border: "3px solid var(--accent-cyan)",
                    boxShadow: exp.current ? "0 0 15px var(--accent-cyan)" : "none",
                    zIndex: 2,
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <TiltCard
                    maxTilt={3}
                    scaleOnHover={1.01}
                    style={{ borderRadius: "20px" }}
                  >
                    <Box
                      className="glass-card"
                      sx={{
                        p: { xs: 3, sm: 4 },
                        borderRadius: "20px",
                        position: "relative",
                        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": {
                          borderColor: "var(--border-accent)",
                          boxShadow: "var(--shadow-glow)",
                        },
                      }}
                    >
                    {/* Top Row: Role, Status, and Period */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            color: "var(--text-primary)",
                            fontSize: { xs: "1.2rem", sm: "1.35rem" },
                            letterSpacing: "-0.3px",
                          }}
                        >
                          {exp.role}
                        </Typography>
                        {exp.current && (
                          <Chip
                            label="Active Role"
                            size="small"
                            sx={{
                              backgroundColor: "rgba(0, 240, 255, 0.12)",
                              color: "var(--accent-cyan)",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              border: "1px solid rgba(0, 240, 255, 0.3)",
                            }}
                          />
                        )}
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                          backgroundColor: "var(--bg-primary)",
                          px: 1.8,
                          py: 0.6,
                          borderRadius: "10px",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        <Calendar size={14} color="var(--accent-cyan)" />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "var(--text-primary)",
                            fontWeight: 700,
                            fontSize: "0.78rem",
                          }}
                        >
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Company, Type, and Location Bar */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 2,
                        mb: 2.5,
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                        <Building2 size={16} color="var(--accent-cyan)" />
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700, color: "var(--accent-cyan)" }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                        <Briefcase size={14} color="var(--text-muted)" />
                        <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 600 }}>
                          {exp.type}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                        <MapPin size={14} color="var(--text-muted)" />
                        <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 600 }}>
                          {exp.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--text-secondary)",
                        fontSize: "0.92rem",
                        lineHeight: 1.65,
                        mb: 2.5,
                      }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Key Accomplishments Checklist */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.3, mb: 3 }}>
                      {exp.points.map((pt, pIdx) => (
                        <Box
                          key={pIdx}
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                        >
                          <CheckCircle2
                            size={16}
                            color="var(--accent-cyan)"
                            style={{ marginTop: "3px", flexShrink: 0 }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "var(--text-secondary)",
                              lineHeight: 1.6,
                              fontSize: "0.88rem",
                            }}
                          >
                            {pt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Technologies Tag Group */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                      {exp.technologies.map((tech, tIdx) => (
                        <Chip
                          key={tIdx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: "var(--bg-primary)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-secondary)",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </TiltCard>
              </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
