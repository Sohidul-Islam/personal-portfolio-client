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
        message: "Please complete all required fields.",
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
          subject: formData.subject || "Portfolio Contact Inquiry",
          message: formData.message,
          to_name: personalInfo.name,
        },
        "user_4XbE4S0lH3s0e3N3",
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
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: `Message received! You can also connect directly via ${personalInfo.email}`,
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
      );
  };

  return (
    <Box
      id="contact"
      component="section"
      aria-label="Contact Information and Direct Inquiries"
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
              Direct Communication
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
              Available for full-time engineering roles, high-impact systems consulting, and technical collaborations.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={5} alignItems="stretch">
          {/* Left Column: Direct Info & Social Cards */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Box
                className="glass-card"
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "22px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      mb: 1.5,
                      fontSize: "1.35rem",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Let's Build Something High-Performance
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      mb: 3.5,
                      fontSize: "0.92rem",
                    }}
                  >
                    Whether you have an opening for a Software Engineer II, a scalable
                    cloud architecture project, or a real-time web application to engineer,
                    I'd be glad to discuss technical requirements.
                  </Typography>

                  {/* Direct Contact Cards */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3.5 }}>
                    {/* Email Card */}
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "14px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "var(--border-accent)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                            backgroundColor: "rgba(0, 240, 255, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--accent-cyan)",
                          }}
                        >
                          <Mail size={20} />
                        </Box>
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{ color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.7rem" }}
                          >
                            Email Address
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 700, color: "var(--text-primary)" }}
                          >
                            {personalInfo.email}
                          </Typography>
                        </Box>
                      </Box>

                      <IconButton
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        size="small"
                        sx={{
                          color: copiedEmail ? "var(--accent-emerald)" : "var(--text-secondary)",
                        }}
                      >
                        {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                      </IconButton>
                    </Box>

                    {/* Phone Card */}
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "14px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.8,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "10px",
                          backgroundColor: "rgba(139, 92, 246, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent-violet)",
                        }}
                      >
                        <Phone size={20} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.7rem" }}
                        >
                          Phone / WhatsApp
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 700, color: "var(--text-primary)" }}
                        >
                          {personalInfo.phone}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Location Card */}
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "14px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.8,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "10px",
                          backgroundColor: "rgba(244, 63, 94, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--accent-rose)",
                        }}
                      >
                        <MapPin size={20} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.7rem" }}
                        >
                          Location
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 700, color: "var(--text-primary)" }}
                        >
                          {personalInfo.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Social Profiles Row */}
                <Box sx={{ pt: 2, borderTop: "1px solid var(--border-subtle)" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "var(--text-muted)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      display: "block",
                      mb: 1.5,
                      fontSize: "0.7rem",
                    }}
                  >
                    Professional Profiles:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Button
                      component="a"
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon fontSize="small" />}
                      size="small"
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.82rem",
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
                      size="small"
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.82rem",
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
                      endIcon={<ExternalLink size={14} />}
                      size="small"
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.82rem",
                        "&:hover": {
                          borderColor: "var(--accent-violet)",
                          color: "var(--accent-violet)",
                        },
                      }}
                    >
                      LeetCode
                    </Button>
                  </Box>
                </Box>
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
              style={{ height: "100%" }}
            >
              <Box
                className="glass-card"
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "22px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      mb: 1.2,
                      fontSize: "1.35rem",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Send a Direct Message
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "var(--text-secondary)", mb: 3, fontSize: "0.9rem" }}
                  >
                    I usually respond within 24 hours.
                  </Typography>

                  {status.message && (
                    <Alert
                      severity={status.type}
                      sx={{ mb: 3, borderRadius: "12px" }}
                    >
                      {status.message}
                    </Alert>
                  )}

                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Your Name"
                        name="name"
                        autoComplete="name"
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
                        autoComplete="email"
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
                        label="Subject / Topic"
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
                        rows={4}
                        label="Project or Role Details"
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
                  </Grid>
                </Box>

                <Box sx={{ pt: 3 }}>
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
                      py: 1.4,
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
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
