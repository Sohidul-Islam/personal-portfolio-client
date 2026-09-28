import React from "react";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  FileText,
} from "lucide-react";
import { education } from "../../data/portfolioData";

export default function Education() {
  return (
    <Box
      id="education"
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
              Academic Qualifications
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
              Education & <span className="gradient-text">Research</span>
            </Typography>
          </motion.div>
        </Box>

        {/* Education Grid */}
        <Grid container spacing={4} justifyContent="center">
          {education.map((item, idx) => (
            <Grid item xs={12} md={idx === 0 ? 12 : 6} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    p: { xs: 3.5, md: 4 },
                    borderRadius: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "var(--border-accent)",
                      boxShadow: "var(--shadow-glow)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
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
                          }}
                        >
                          <GraduationCap size={24} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 800,
                              color: "var(--text-primary)",
                              fontSize: "1.2rem",
                            }}
                          >
                            {item.degree}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "var(--accent-cyan)",
                              fontWeight: 700,
                            }}
                          >
                            {item.institution}
                          </Typography>
                        </Box>
                      </Box>

                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 240, 255, 0.15)",
                            color: "var(--accent-cyan)",
                            fontWeight: 700,
                          }}
                        />
                      )}
                    </Box>

                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.6 }}
                      >
                        <Calendar size={14} color="var(--text-muted)" />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "var(--text-secondary)",
                            fontWeight: 600,
                          }}
                        >
                          {item.period}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.6 }}
                      >
                        <MapPin size={14} color="var(--text-muted)" />
                        <Typography
                          variant="caption"
                          sx={{ color: "var(--text-muted)" }}
                        >
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

                    {item.thesis && (
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "12px",
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-subtle)",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 0.5,
                          }}
                        >
                          <FileText size={16} color="var(--accent-violet)" />
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 700,
                              color: "var(--text-muted)",
                              textTransform: "uppercase",
                            }}
                          >
                            Undergraduate Thesis Project
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-secondary)",
                            fontWeight: 600,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.thesis}
                        </Typography>
                      </Box>
                    )}

                    {item.details && (
                      <Typography
                        variant="body2"
                        sx={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                      >
                        {item.details}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
