import React from "react";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Building2,
  ExternalLink,
  Code2,
} from "lucide-react";
import { awards } from "../../data/portfolioData";
import TiltCard from "../Motion/TiltCard";

export default function Achievements() {
  return (
    <Box
      id="achievements"
      component="section"
      aria-label="Recognitions and Honors"
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
              Recognitions &amp; Milestones
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
              Honors &amp; <span className="gradient-text">Achievements</span>
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
              Industry excellence recognition and published peer-reviewed academic research.
            </Typography>
          </motion.div>
        </Box>

        {/* Awards Cards Grid */}
        <Box sx={{ maxWidth: "860px", mx: "auto", display: "flex", flexDirection: "column", gap: 3.5 }}>
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard
                maxTilt={3}
                scaleOnHover={1.012}
                style={{ borderRadius: "22px" }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "22px",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 3.5,
                    position: "relative",
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, rgba(0, 240, 255, 0.04) 0%, rgba(139, 92, 246, 0.04) 100%)",
                    borderColor: "var(--border-accent)",
                    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      borderColor: "var(--accent-cyan)",
                      boxShadow: "var(--shadow-glow)",
                    },
                  }}
                >
                {/* Trophy Icon Container */}
                <Box
                  sx={{
                    width: { xs: 60, sm: 72 },
                    height: { xs: 60, sm: 72 },
                    borderRadius: "18px",
                    background: "var(--gradient-btn)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    boxShadow: "var(--shadow-glow)",
                    flexShrink: 0,
                  }}
                >
                  <Trophy size={32} />
                </Box>

                {/* Award Details */}
                <Box sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Chip
                      label={award.badge}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.12)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        border: "1px solid rgba(0, 240, 255, 0.25)",
                      }}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                      <Calendar size={14} color="var(--text-muted)" />
                      <Typography
                        variant="caption"
                        sx={{ color: "var(--text-secondary)", fontWeight: 600 }}
                      >
                        {award.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      mb: 1,
                      fontSize: { xs: "1.25rem", sm: "1.45rem" },
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {award.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      mb: 2,
                    }}
                  >
                    <Building2 size={16} color="var(--accent-cyan)" />
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: "var(--accent-cyan)" }}
                    >
                      {award.organization}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                      mb: award.link ? 2.5 : 0,
                    }}
                  >
                    {award.description}
                  </Typography>

                  {(award.link || award.codeUrl) && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 2.5 }}>
                      {award.link && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={award.link}
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
                          View Publication on IEEE Xplore
                        </Button>
                      )}

                      {award.codeUrl && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={award.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<Code2 size={14} />}
                          endIcon={<ExternalLink size={14} />}
                          sx={{
                            borderRadius: "8px",
                            borderColor: "rgba(139, 92, 246, 0.4)",
                            color: "var(--accent-violet)",
                            fontWeight: 700,
                            textTransform: "none",
                            fontSize: "0.82rem",
                            "&:hover": {
                              borderColor: "var(--accent-violet)",
                              backgroundColor: "rgba(139, 92, 246, 0.08)",
                            },
                          }}
                        >
                          Research Codebase (GitHub)
                        </Button>
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            </TiltCard>
          </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
