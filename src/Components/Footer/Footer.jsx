import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        py: 6,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* Logo Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: "var(--gradient-btn)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Terminal size={18} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.5px",
              }}
            >
              Sohidul<span style={{ color: "var(--accent-cyan)" }}>.dev</span>
            </Typography>
          </Box>

          {/* Copyright Text */}
          <Typography
            variant="body2"
            sx={{ color: "var(--text-secondary)", textAlign: "center" }}
          >
            © {new Date().getFullYear()} Sohidul Islam. Designed & Built with
            Precision, React & Modern Motion.
          </Typography>

          {/* Back To Top Button */}
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              color: "var(--text-primary)",
              border: "1px solid var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              borderRadius: "12px",
              p: 1.2,
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: "var(--accent-cyan)",
                color: "var(--accent-cyan)",
                transform: "translateY(-3px)",
              },
            }}
          >
            <ArrowUp size={20} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
