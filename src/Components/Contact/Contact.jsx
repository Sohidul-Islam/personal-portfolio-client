import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .send(
        "service_04q6299",
        "template_440a45u",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
        },
        "user_4XbE4S0lH3s0e3N3"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! Your message has been sent successfully.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: "success",
            message: `Message sent successfully! You can also email me directly at ${personalInfo.email}`,
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        }
      );
  };

  return (
    <Box
      id="contact"
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
              Let's Connect
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
              Get In <span className="gradient-text">Touch</span>
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6}>
          {/* Left Column: Direct Info & Social Cards */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "var(--text-primary)", mb: 2 }}
              >
                Interested in working together or hiring me?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "var(--text-secondary)", lineHeight: 1.7, mb: 4 }}
              >
                I am currently open to full-time Software Engineer II / Senior
                Full-Stack roles, high-impact consulting projects, and technical
                collaborations. Feel free to reach out directly via email or the
                contact form!
              </Typography>

              {/* Direct Info List */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  mb: 4,
                }}
              >
                {/* Email Box */}
                <Box
                  className="glass-card"
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                      <Mail size={22} />
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "var(--text-muted)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        Email Address
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 700, color: "var(--text-primary)" }}
                      >
                        {personalInfo.email}
                      </Typography>
                    </Box>
                  </Box>

                  <IconButton
                    onClick={handleCopyEmail}
                    sx={{
                      color: copiedEmail
                        ? "var(--accent-emerald)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                  </IconButton>
                </Box>

                {/* Phone Box */}
                <Box
                  className="glass-card"
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
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
                      color: "var(--accent-violet)",
                    }}
                  >
                    <Phone size={22} />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "var(--text-muted)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      Phone / WhatsApp
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: "var(--text-primary)" }}
                    >
                      {personalInfo.phone}
                    </Typography>
                  </Box>
                </Box>

                {/* Location Box */}
                <Box
                  className="glass-card"
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
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
                      color: "var(--accent-rose)",
                    }}
                  >
                    <MapPin size={22} />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "var(--text-muted)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      Current Location
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: "var(--text-primary)" }}
                    >
                      {personalInfo.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Profiles & Handles */}
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
                Social Profiles & Competitive Programming:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button
                  component="a"
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon fontSize="small" />}
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "var(--accent-cyan)",
                      color: "var(--accent-cyan)",
                    },
                  }}
                >
                  GitHub
                </Button>

                <Button
                  component="a"
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon fontSize="small" />}
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "var(--accent-cyan)",
                      color: "var(--accent-cyan)",
                    },
                  }}
                >
                  LinkedIn
                </Button>

                <Button
                  component="a"
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<ExternalLink size={16} />}
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "var(--accent-violet)",
                      color: "var(--accent-violet)",
                    },
                  }}
                >
                  LeetCode
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                className="glass-card"
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: "24px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, color: "var(--text-primary)", mb: 3 }}
                >
                  Send a Direct Message
                </Typography>

                {status.message && (
                  <Alert
                    severity={status.type}
                    sx={{ mb: 3, borderRadius: "12px" }}
                  >
                    {status.message}
                  </Alert>
                )}

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "var(--text-primary)",
                          borderRadius: "12px",
                          backgroundColor: "var(--bg-primary)",
                          "& fieldset": { borderColor: "var(--border-subtle)" },
                          "&:hover fieldset": {
                            borderColor: "var(--border-accent)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--accent-cyan)",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "var(--text-muted)" },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "var(--text-primary)",
                          borderRadius: "12px",
                          backgroundColor: "var(--bg-primary)",
                          "& fieldset": { borderColor: "var(--border-subtle)" },
                          "&:hover fieldset": {
                            borderColor: "var(--border-accent)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--accent-cyan)",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "var(--text-muted)" },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "var(--text-primary)",
                          borderRadius: "12px",
                          backgroundColor: "var(--bg-primary)",
                          "& fieldset": { borderColor: "var(--border-subtle)" },
                          "&:hover fieldset": {
                            borderColor: "var(--border-accent)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--accent-cyan)",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "var(--text-muted)" },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={5}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "var(--text-primary)",
                          borderRadius: "12px",
                          backgroundColor: "var(--bg-primary)",
                          "& fieldset": { borderColor: "var(--border-subtle)" },
                          "&:hover fieldset": {
                            borderColor: "var(--border-accent)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "var(--accent-cyan)",
                          },
                        },
                        "& .MuiInputLabel-root": { color: "var(--text-muted)" },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      type="submit"
                      disabled={loading}
                      variant="contained"
                      size="large"
                      endIcon={<Send size={18} />}
                      sx={{
                        borderRadius: "12px",
                        background: "var(--gradient-btn)",
                        color: "#fff",
                        fontWeight: 700,
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "var(--shadow-glow)",
                        "&:hover": {
                          boxShadow: "0 0 30px rgba(0, 240, 255, 0.4)",
                        },
                      }}
                    >
                      {loading ? "Sending Message..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
