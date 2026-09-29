import React from "react";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Building2,
  ExternalLink,
} from "lucide-react";
import { awards } from "../../data/portfolioData";

export default function Achievements() {
  return (
    <Box
      id="achievements"
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
              Recognitions & Milestones
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
              Honors & <span className="gradient-text">Achievements</span>
            </Typography>
          </motion.div>
        </Box>

        {/* Awards Cards Grid */}
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 3.5,
                  position: "relative",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(0, 240, 255, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)",
                  borderColor: "var(--border-accent)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                {/* Trophy Icon Container */}
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "20px",
                    background: "var(--gradient-btn)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    boxShadow: "var(--shadow-glow)",
                    flexShrink: 0,
                  }}
                >
                  <Trophy size={36} />
                </Box>

                {/* Award Details */}
                <Box sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <Chip
                      label={award.badge}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.15)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    />
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.6 }}
                    >
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
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      mb: 1,
                      fontSize: { xs: "1.4rem", sm: "1.75rem" },
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
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: "var(--accent-cyan)" }}
                    >
                      {award.organization}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ color: "var(--text-secondary)", lineHeight: 1.7, mb: award.link ? 2 : 0 }}
                  >
                    {award.description}
                  </Typography>

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
                        fontSize: "0.85rem",
                        "&:hover": {
                          borderColor: "var(--accent-cyan)",
                          backgroundColor: "rgba(0, 240, 255, 0.08)",
                        },
                      }}
                    >
                      View Publication / Certificate
                    </Button>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
