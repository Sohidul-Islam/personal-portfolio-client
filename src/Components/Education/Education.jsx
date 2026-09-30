import React from "react";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  FileText,
  ExternalLink,
  Award,
} from "lucide-react";
import { education } from "../../data/portfolioData";

export default function Education() {
  return (
    <Box
      id="education"
      component="section"
      aria-label="Academic Background and Research"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
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
              Academic Qualifications &amp; Research
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
              Education &amp; <span className="gradient-text">Research</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "var(--text-secondary)",
                mt: 1.5,
                maxWidth: "600px",
                mx: "auto",
                fontSize: "1rem",
              }}
            >
              Rigorous computer science foundations combined with published machine learning research.
            </Typography>
          </motion.div>
        </Box>

        {/* Education Card Container */}
        <Box sx={{ maxWidth: "860px", mx: "auto" }}>
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "22px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "var(--border-accent)",
                    boxShadow: "var(--shadow-glow)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {/* Header Row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2.5,
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
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
                        color: "var(--accent-cyan)",
                        flexShrink: 0,
                      }}
                    >
                      <GraduationCap size={24} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          fontSize: { xs: "1.25rem", sm: "1.4rem" },
                          letterSpacing: "-0.3px",
                        }}
                      >
                        {item.degree}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "var(--accent-cyan)",
                          fontWeight: 700,
                          fontSize: "1rem",
                        }}
                      >
                        {item.institution}
                      </Typography>
                    </Box>
                  </Box>

                  {item.badge && (
                    <Chip
                      icon={<Award size={14} color="var(--accent-cyan)" />}
                      label={item.badge}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.12)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        border: "1px solid rgba(0, 240, 255, 0.25)",
                      }}
                    />
                  )}
                </Box>

                {/* Meta details */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <Calendar size={14} color="var(--text-muted)" />
                    <Typography
                      variant="caption"
                      sx={{ color: "var(--text-secondary)", fontWeight: 600 }}
                    >
                      {item.period}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <MapPin size={14} color="var(--text-muted)" />
                    <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 600 }}>
                      {item.location}
                    </Typography>
                  </Box>

                  <Chip
                    label={item.grade}
                    size="small"
                    sx={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  />
                </Box>

                {/* Thesis & IEEE Paper Showcase */}
                {item.thesis && (
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "14px",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-subtle)",
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <FileText size={16} color="var(--accent-violet)" />
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: "var(--accent-violet)",
                          textTransform: "uppercase",
                          letterSpacing: "0.8px",
                          fontSize: "0.72rem",
                        }}
                      >
                        Undergraduate Thesis &amp; IEEE Published Research
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        mb: item.publicationUrl ? 2 : 0,
                      }}
                    >
                      "{item.thesis}"
                    </Typography>

                    {item.publicationUrl && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={item.publicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ExternalLink size={14} />}
                        sx={{
                          borderRadius: "8px",
                          borderColor: "var(--border-accent)",
                          color: "var(--accent-cyan)",
                          fontWeight: 700,
                          textTransform: "none",
                          fontSize: "0.82rem",
                          "&:hover": {
                            borderColor: "var(--accent-cyan)",
                            backgroundColor: "rgba(0, 240, 255, 0.08)",
                          },
                        }}
                      >
                        View Official Publication on IEEE Xplore
                      </Button>
                    )}
                  </Box>
                )}

                {item.details && (
                  <Typography
                    variant="body2"
                    sx={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.9rem" }}
                  >
                    {item.details}
                  </Typography>
                )}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
