import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { Mail, ArrowRight, Cpu } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { personalInfo } from "../../data/portfolioData";
import profileImg from "../../images/shufol.jpg";

const MediumIcon = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      aria-label="Introduction and Overview"
      sx={{
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow effects */}
      <Box className="bg-ambient-cyan" sx={{ top: "-10%", left: "-10%" }} />
      <Box className="bg-ambient-violet" sx={{ bottom: "0%", right: "-10%" }} />

      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Column: Text & CTAs */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Status Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 0.8,
                  borderRadius: "30px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  mb: 3,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-emerald)",
                    boxShadow: "0 0 10px var(--accent-emerald)",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {personalInfo.status}
                </Typography>
              </Box>

              {/* Main Headline (H1 for SEO) */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.1rem", sm: "3.2rem", md: "4.1rem" },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: { xs: "-0.8px", sm: "-1.5px" },
                  color: "var(--text-primary)",
                  mb: 2,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.45rem" },
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "var(--accent-cyan)",
                    textTransform: "uppercase",
                    mb: 1.5,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Sohidul Islam Shufol (sishufol / si shufol)
                </Box>
                Engineering{" "}
                <span className="gradient-text">Scalable &amp; Intelligent</span>{" "}
                Digital Products.
              </Typography>

              {/* Typing Role Animation */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.45rem" },
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    m: 0,
                  }}
                >
                  I'm a{" "}
                </Typography>
                <Box
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.45rem" },
                    fontWeight: 700,
                    color: "var(--accent-cyan)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      personalInfo.typingRoles[0],
                      1500,
                      personalInfo.typingRoles[1],
                      1500,
                      personalInfo.typingRoles[2],
                      1500,
                      personalInfo.typingRoles[3],
                      1500,
                      personalInfo.typingRoles[4],
                      1500,
                    ]}
                    speed={45}
                    repeat={Infinity}
                  />
                </Box>
              </Box>

              {/* Summary Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.08rem" },
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  mb: 4,
                  maxWidth: "640px",
                }}
              >
                {personalInfo.summary}
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 5 }}>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={18} />}
                    sx={{
                      borderRadius: "12px",
                      background: "var(--gradient-btn)",
                      color: "#fff",
                      fontWeight: 700,
                      px: 3.5,
                      py: 1.4,
                      textTransform: "none",
                      fontSize: "1rem",
                      boxShadow: "var(--shadow-glow)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 0 30px rgba(0, 240, 255, 0.4)",
                      },
                    }}
                  >
                    View Case Studies
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: "12px",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      px: 3.5,
                      py: 1.4,
                      textTransform: "none",
                      fontSize: "1rem",
                      backgroundColor: "var(--bg-card)",
                      "&:hover": {
                        borderColor: "var(--border-accent)",
                        backgroundColor: "var(--bg-card-hover)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </ScrollLink>
              </Box>

              {/* Social Links & Platform Badges */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Connect:
                </Typography>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile of Sohidul Islam"
                    sx={{
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "10px",
                      p: 1.2,
                      "&:hover": {
                        borderColor: "var(--accent-cyan)",
                        color: "var(--accent-cyan)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile of Sohidul Islam"
                    sx={{
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "10px",
                      p: 1.2,
                      "&:hover": {
                        borderColor: "var(--accent-cyan)",
                        color: "var(--accent-cyan)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    href={personalInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook profile of Sohidul Islam (sishufol)"
                    sx={{
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "10px",
                      p: 1.2,
                      "&:hover": {
                        borderColor: "var(--accent-cyan)",
                        color: "var(--accent-cyan)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <FacebookIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    href={personalInfo.socials.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium articles by Sohidul Islam (sishufol)"
                    sx={{
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "10px",
                      p: 1.2,
                      "&:hover": {
                        borderColor: "var(--accent-cyan)",
                        color: "var(--accent-cyan)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <MediumIcon size={18} />
                  </IconButton>

                  <IconButton
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Send email to Sohidul Islam"
                    sx={{
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "10px",
                      p: 1.2,
                      "&:hover": {
                        borderColor: "var(--accent-cyan)",
                        color: "var(--accent-cyan)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Mail size={20} />
                  </IconButton>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Chip
                    component="a"
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    clickable
                    label="LeetCode"
                    size="small"
                    sx={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      "&:hover": {
                        borderColor: "var(--accent-cyan)",
                        color: "var(--accent-cyan)",
                      },
                    }}
                  />
                  <Chip
                    component="a"
                    href={personalInfo.socials.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    clickable
                    label="Codeforces"
                    size="small"
                    sx={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      "&:hover": {
                        borderColor: "var(--accent-violet)",
                        color: "var(--accent-violet)",
                      },
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Interactive Profile Card / Stats */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: 3,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "24px",
                  background: "var(--bg-card)",
                }}
              >
                {/* Image Container with Glow */}
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "18px",
                    overflow: "hidden",
                    mb: 3,
                    aspectRatio: "1/1",
                    maxHeight: "360px",
                    mx: "auto",
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Sohidul Islam Shufol (sishufol / si shufol / SOHIDUL ISLAM SHUFOL) - Software Engineer II & Full-Stack Developer"
                    title="Sohidul Islam Shufol (sishufol) - Software Engineer II"
                    loading="eager"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />

                  {/* Tech Overlay Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      p: 1.5,
                      borderRadius: "12px",
                      backgroundColor: "rgba(10, 13, 20, 0.88)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Cpu size={18} color="var(--accent-cyan)" />
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 700, color: "#fff" }}
                      >
                        React • Node • AWS
                      </Typography>
                    </Box>
                    <Chip
                      label="Software Engineer II"
                      size="small"
                      sx={{
                        backgroundColor: "rgba(0, 240, 255, 0.15)",
                        color: "var(--accent-cyan)",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                      }}
                    />
                  </Box>
                </Box>

                {/* Stats Grid */}
                <Grid container spacing={2}>
                  {personalInfo.stats.map((stat, idx) => (
                    <Grid item xs={6} key={idx}>
                      <Box
                        sx={{
                          p: 1.8,
                          borderRadius: "14px",
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-subtle)",
                          textAlign: "center",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            borderColor: "var(--border-accent)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            color:
                              idx % 2 === 0
                                ? "var(--accent-cyan)"
                                : "var(--accent-violet)",
                            fontSize: "1.55rem",
                            mb: 0.2,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "var(--text-secondary)",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
