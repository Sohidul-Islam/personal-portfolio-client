import React from "react";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Button,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
import { X, ExternalLink, CheckCircle, Layers, User } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectModal({ project, open, onClose }) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "var(--shadow-glow)",
          overflow: "hidden",
        },
      }}
    >
      <Box sx={{ position: "relative", p: { xs: 3, md: 4 } }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          aria-label="Close modal"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "var(--text-primary)",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            "&:hover": {
              backgroundColor: "var(--bg-card-hover)",
              borderColor: "var(--border-accent)",
            },
          }}
        >
          <X size={20} />
        </IconButton>

        {/* Modal Header */}
        <Box sx={{ pr: 5, mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <Chip
              label={project.badge || project.category}
              size="small"
              sx={{
                backgroundColor: "rgba(0, 240, 255, 0.15)",
                color: "var(--accent-cyan)",
                fontWeight: 700,
                fontSize: "0.75rem",
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: "var(--text-secondary)", fontWeight: 600 }}
            >
              {project.period}
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: "var(--text-primary)", mb: 0.5 }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "var(--text-secondary)", fontWeight: 500 }}
          >
            {project.subtitle}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "var(--border-subtle)", mb: 3 }} />

        {/* Overview & Role */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: "14px",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
              >
                <User size={16} color="var(--accent-cyan)" />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  My Role
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "var(--text-primary)" }}
              >
                {project.role}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: "14px",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
              >
                <Layers size={16} color="var(--accent-violet)" />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Domain / Category
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "var(--text-primary)" }}
              >
                {project.category}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Project Summary */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1, color: "var(--text-primary)" }}
        >
          System Overview & Architecture
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "var(--text-secondary)", lineHeight: 1.7, mb: 3 }}
        >
          {project.summary}
        </Typography>

        {/* Key Features & Impact Highlights */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1.5, color: "var(--text-primary)" }}
        >
          Key Technical Deliverables
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
          {project.highlights.map((item, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
            >
              <CheckCircle
                size={18}
                color="var(--accent-cyan)"
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Technologies Badges */}
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "1px",
            display: "block",
            mb: 1.5,
          }}
        >
          Technologies Used:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
          {project.technologies.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        {/* Modal Action Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-end",
          }}
        >
          {project.githubUrl && (
            <Button
              variant="outlined"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon fontSize="small" />}
              sx={{
                borderRadius: "12px",
                borderColor: "var(--border-subtle)",
                color: "var(--text-primary)",
                fontWeight: 600,
                textTransform: "none",
                px: 3,
                py: 1,
              }}
            >
              Repository
            </Button>
          )}

          {project.liveUrl && (
            <Button
              variant="contained"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ExternalLink size={18} />}
              sx={{
                borderRadius: "12px",
                background: "var(--gradient-btn)",
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                px: 3,
                py: 1,
                boxShadow: "var(--shadow-glow)",
              }}
            >
              Live Demo / Details
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
