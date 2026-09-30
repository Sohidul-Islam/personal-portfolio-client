import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Globe, Github } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../../data/portfolioData";
import ProjectModal from "../ProjectModal/ProjectModal";

const getFaviconUrl = (url) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch (e) {
    return null;
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      id="projects"
      component="section"
      aria-label="Featured Projects and Commercial Case Studies"
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
              Commercial Work & Systems
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
              Featured <span className="gradient-text">Case Studies</span>
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
              Architected and deployed full-stack products, real-time engines,
              and enterprise cloud integrations.
            </Typography>
          </motion.div>
        </Box>

        {/* Project Cards Grid */}
        <Grid container spacing={3.5}>
          {projects.map((project, idx) => {
            const favicon = project.liveUrl ? getFaviconUrl(project.liveUrl) : null;
            const isWideCard = idx >= 3;

            return (
              <Grid
                item
                xs={12}
                md={isWideCard ? 6 : 6}
                lg={isWideCard ? 6 : 4}
                key={project.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    className="glass-card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: "22px",
                      position: "relative",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        borderColor: "var(--border-accent)",
                        boxShadow: "var(--shadow-glow)",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box>
                      {/* Top Meta Bar */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                          mb: 2.5,
                        }}
                      >
                        <Chip
                          label={project.badge || project.category}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 240, 255, 0.12)",
                            color: "var(--accent-cyan)",
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            border: "1px solid rgba(0, 240, 255, 0.2)",
                          }}
                        />

                        {project.liveUrl && (
                          <Box
                            component="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.8,
                              px: 1.2,
                              py: 0.4,
                              borderRadius: "20px",
                              backgroundColor: "var(--bg-primary)",
                              border: "1px solid var(--border-subtle)",
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                borderColor: "var(--accent-cyan)",
                              },
                            }}
                          >
                            {favicon ? (
                              <Box
                                component="img"
                                src={favicon}
                                alt={`${project.title} favicon`}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                                sx={{ width: 14, height: 14, borderRadius: "3px" }}
                              />
                            ) : (
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  backgroundColor: "var(--accent-emerald)",
                                  boxShadow: "0 0 6px var(--accent-emerald)",
                                }}
                              />
                            )}
                            <Typography
                              variant="caption"
                              sx={{
                                color: "var(--text-secondary)",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                              }}
                            >
                              Live
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      {/* Project Title & Subtitle */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          mb: 1,
                          fontSize: "1.25rem",
                          lineHeight: 1.35,
                          letterSpacing: "-0.3px",
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          fontSize: "0.9rem",
                          mb: 3,
                        }}
                      >
                        {project.subtitle}
                      </Typography>
                    </Box>

                    {/* Tech Stack Pills & Action Bar */}
                    <Box>
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "var(--text-muted)",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            display: "block",
                            mb: 1,
                            fontSize: "0.7rem",
                          }}
                        >
                          Core Stack:
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                          {project.technologies.slice(0, 5).map((tech, tIdx) => (
                            <Chip
                              key={tIdx}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: "var(--bg-primary)",
                                border: "1px solid var(--border-subtle)",
                                color: "var(--text-secondary)",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                              }}
                            />
                          ))}
                          {project.technologies.length > 5 && (
                            <Chip
                              label={`+${project.technologies.length - 5}`}
                              size="small"
                              sx={{
                                backgroundColor: "var(--bg-primary)",
                                color: "var(--text-muted)",
                                fontSize: "0.7rem",
                              }}
                            />
                          )}
                        </Box>
                      </Box>

                      {/* Actions */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pt: 2,
                          borderTop: "1px solid var(--border-subtle)",
                        }}
                      >
                        <Button
                          onClick={() => handleOpenModal(project)}
                          endIcon={<ArrowRight size={15} />}
                          sx={{
                            color: "var(--accent-cyan)",
                            fontWeight: 700,
                            textTransform: "none",
                            p: 0,
                            fontSize: "0.88rem",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#fff",
                            },
                          }}
                        >
                          Case Study Details
                        </Button>

                        <Box sx={{ display: "flex", gap: 1 }}>
                          {project.githubUrl && (
                            <Button
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} GitHub repository`}
                              size="small"
                              sx={{
                                minWidth: 36,
                                height: 36,
                                p: 0,
                                borderRadius: "10px",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-subtle)",
                                "&:hover": {
                                  borderColor: "var(--accent-cyan)",
                                  color: "var(--accent-cyan)",
                                },
                              }}
                            >
                              <GitHubIcon fontSize="small" />
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} Live URL`}
                              size="small"
                              sx={{
                                minWidth: 36,
                                height: 36,
                                p: 0,
                                borderRadius: "10px",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-subtle)",
                                "&:hover": {
                                  borderColor: "var(--accent-cyan)",
                                  color: "var(--accent-cyan)",
                                },
                              }}
                            >
                              <ExternalLink size={17} />
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
}
