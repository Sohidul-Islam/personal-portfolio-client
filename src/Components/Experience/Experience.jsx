import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { experiences } from "../../data/portfolioData";

export default function Experience() {
  return (
    <Box
      id="experience"
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
              Career Journey
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
          </motion.div>
        </Box>

        {/* Experience Timeline */}
        <Box sx={{ position: "relative", maxWidth: "1000px", mx: "auto" }}>
          {/* Vertical Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: { xs: "20px", md: "50%" },
              width: "2px",
              backgroundColor: "var(--border-subtle)",
              transform: { md: "translateX(-50%)" },
              zIndex: 0,
            }}
          />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Box
                key={exp.id}
                sx={{
                  position: "relative",
                  mb: 6,
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: isEven ? "row-reverse" : "row",
                  },
                  alignItems: "center",
                }}
              >
                {/* Center Node / Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: "20px", md: "50%" },
                    top: "24px",
                    transform: "translate(-50%, -50%)",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: exp.current
                      ? "var(--accent-cyan)"
                      : "var(--bg-card)",
                    border: "3px solid var(--accent-cyan)",
                    boxShadow: "var(--shadow-glow)",
                    zIndex: 2,
                  }}
                />

                {/* Card Container */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "calc(50% - 40px)" },
                    ml: { xs: "45px", md: isEven ? 0 : "auto" },
                    mr: { xs: 0, md: isEven ? "auto" : 0 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Box
                      className="glass-card"
                      sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: "20px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "var(--border-accent)",
                          boxShadow: "var(--shadow-glow)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      {/* Header info */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                          mb: 1.5,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            color: "var(--text-primary)",
                            fontSize: "1.25rem",
                          }}
                        >
                          {exp.role}
                        </Typography>

                        {exp.current && (
                          <Chip
                            label="Current Position"
                            size="small"
                            sx={{
                              backgroundColor: "rgba(0, 240, 255, 0.15)",
                              color: "var(--accent-cyan)",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                            }}
                          />
                        )}
                      </Box>

                      {/* Company & Meta */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: 2,
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.8,
                          }}
                        >
                          <Building2 size={16} color="var(--accent-cyan)" />
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 700,
                              color: "var(--accent-cyan)",
                            }}
                          >
                            {exp.company}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.6,
                          }}
                        >
                          <Calendar size={14} color="var(--text-muted)" />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "var(--text-secondary)",
                              fontWeight: 600,
                            }}
                          >
                            {exp.period}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.6,
                          }}
                        >
                          <MapPin size={14} color="var(--text-muted)" />
                          <Typography
                            variant="caption"
                            sx={{ color: "var(--text-muted)" }}
                          >
                            {exp.location}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Responsibilities list */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.5,
                          mb: 3,
                        }}
                      >
                        {exp.points.map((pt, pIdx) => (
                          <Box
                            key={pIdx}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.5,
                            }}
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
                              }}
                            >
                              {pt}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Technology Pills */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
                  </motion.div>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
