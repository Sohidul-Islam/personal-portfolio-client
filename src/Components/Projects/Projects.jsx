import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../../data/portfolioData";
import ProjectModal from "../ProjectModal/ProjectModal";


const getFaviconUrl = (url) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
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
              Featured Portfolio
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
              Case Studies & <span className="gradient-text">Projects</span>
            </Typography>
          </motion.div>
        </Box>

        {/* Project Cards Grid */}
        <Grid container spacing={4}>
          {projects.map((project, idx) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ height: "100%" }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3.5,
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      borderColor: "var(--border-accent)",
                      boxShadow: "var(--shadow-glow)",
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* Card Header & Badge */}
                  <Box>
                    {/* Project Overview Image / Favicon Banner */}
                    <Box
                      sx={{
                        height: 120,
                        width: "100%",
                        borderRadius: "16px",
                        mb: 2.5,
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
                      }}
                    >
                      {project.image ? (
                        <Box
                          component="img"
                          src={project.image}
                          alt={project.title}
                          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            px: 2.5,
                            py: 1.5,
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            borderRadius: "12px",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          {project.liveUrl && getFaviconUrl(project.liveUrl) && (
                            <Box
                              component="img"
                              src={getFaviconUrl(project.liveUrl)}
                              alt={project.title}
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                              sx={{
                                width: 32,
                                height: 32,
                                borderRadius: "8px",
                                objectFit: "contain",
                              }}
                            />
                          )}
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 700,
                              color: "var(--accent-cyan)",
                              fontSize: "0.85rem",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: 180,
                            }}
                          >
                            {project.liveUrl
                              ? new URL(project.liveUrl).hostname
                              : project.title}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
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
                      <Typography
                        variant="caption"
                        sx={{ color: "var(--text-muted)", fontWeight: 600 }}
                      >
                        {project.period}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        mb: 1,
                        fontSize: "1.25rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>

                  {/* Highlights snippet */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "var(--text-muted)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        display: "block",
                        mb: 1,
                      }}
                    >
                      Core Technology Stack:
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
                          label={`+${project.technologies.length - 5} more`}
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

                  {/* Actions Bar */}
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
                      endIcon={<ArrowRight size={16} />}
                      sx={{
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        textTransform: "none",
                        p: 0,
                        fontSize: "0.9rem",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#fff",
                        },
                      }}
                    >
                      Case Study Breakdown
                    </Button>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
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
                          <ExternalLink size={18} />
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
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
