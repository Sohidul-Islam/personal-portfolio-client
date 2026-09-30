import React from "react";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  FileText,
  ExternalLink,
  BookOpen,
  School,
} from "lucide-react";
import { education } from "../../data/portfolioData";

export default function Education() {
  const university = education.find((e) => e.id === "bsc-cse") || education[0];
  const secondaryEducation = education.filter((e) => e.id !== "bsc-cse");

  return (
    <Box
      id="education"
      component="section"
      aria-label="Academic Background and Education"
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
        <Box sx={{ textAlign: "center", mb: 7 }}>
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
              Academic Background
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
              Foundational computer science education and academic background.
            </Typography>
          </motion.div>
        </Box>

        {/* Featured University Degree Card */}
        {university && (
          <Box sx={{ maxWidth: "920px", mx: "auto", mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "22px",
                  position: "relative",
                  borderColor: "var(--border-accent)",
                  boxShadow: "var(--shadow-glow)",
                  transition: "all 0.3s ease",
                  "&:hover": {
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
                        width: 50,
                        height: 50,
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
                      <GraduationCap size={26} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          fontSize: { xs: "1.25rem", sm: "1.45rem" },
                          letterSpacing: "-0.3px",
                        }}
                      >
                        {university.degree}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "var(--accent-cyan)",
                          fontWeight: 700,
                          fontSize: "1.02rem",
                        }}
                      >
                        {university.institution}
                      </Typography>
                    </Box>
                  </Box>

                  {university.badge && (
                    <Chip
                      label={university.badge}
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

                {/* Period & Location (No Results/Grades) */}
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
                      {university.period}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <MapPin size={14} color="var(--text-muted)" />
                    <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 600 }}>
                      {university.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Thesis & IEEE Paper Showcase */}
                {university.thesis && (
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
                        Undergraduate Thesis &amp; Published Research
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        mb: university.publicationUrl ? 2 : 0,
                      }}
                    >
                      "{university.thesis}"
                    </Typography>

                    {university.publicationUrl && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={university.publicationUrl}
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

                {university.details && (
                  <Typography
                    variant="body2"
                    sx={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.9rem" }}
                  >
                    {university.details}
                  </Typography>
                )}
              </Box>
            </motion.div>
          </Box>
        )}

        {/* College & School Cards Grid (No Results/Grades) */}
        <Box sx={{ maxWidth: "920px", mx: "auto" }}>
          <Grid container spacing={3}>
            {secondaryEducation.map((item, idx) => {
              const isCollege = item.id === "hsc";
              const Icon = isCollege ? BookOpen : School;

              return (
                <Grid item xs={12} sm={6} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      className="glass-card"
                      sx={{
                        p: { xs: 3, sm: 3.5 },
                        borderRadius: "20px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "var(--border-accent)",
                          boxShadow: "var(--shadow-glow)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Box>
                        {/* Header */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                          <Box
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius: "12px",
                              backgroundColor: "var(--bg-primary)",
                              border: "1px solid var(--border-subtle)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isCollege ? "var(--accent-violet)" : "var(--accent-cyan)",
                            }}
                          >
                            <Icon size={20} />
                          </Box>
                          <Chip
                            label={item.badge}
                            size="small"
                            sx={{
                              backgroundColor: "var(--bg-primary)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-muted)",
                              fontSize: "0.72rem",
                              fontWeight: 600,
                            }}
                          />
                        </Box>

                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            color: "var(--text-primary)",
                            fontSize: "1.15rem",
                            mb: 0.5,
                            letterSpacing: "-0.2px",
                          }}
                        >
                          {item.degree}
                        </Typography>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: isCollege ? "var(--accent-violet)" : "var(--accent-cyan)",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            mb: 2,
                          }}
                        >
                          {item.institution}
                        </Typography>

                        {/* Period & Location */}
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: 1.8,
                            mb: 2,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                            <Calendar size={13} color="var(--text-muted)" />
                            <Typography
                              variant="caption"
                              sx={{ color: "var(--text-secondary)", fontWeight: 600 }}
                            >
                              {item.period}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                            <MapPin size={13} color="var(--text-muted)" />
                            <Typography variant="caption" sx={{ color: "var(--text-muted)", fontWeight: 600 }}>
                              {item.location}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {item.details && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "var(--text-secondary)",
                            lineHeight: 1.55,
                            fontSize: "0.85rem",
                            pt: 1.5,
                            borderTop: "1px solid var(--border-subtle)",
                          }}
                        >
                          {item.details}
                        </Typography>
                      )}
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
