import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import {
  Sun,
  Moon,
  Menu,
  X,
  Terminal,
  Download,
} from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";
import Magnetic from "../Motion/Magnetic";

const navItems = [
  { name: "About", target: "about" },
  { name: "Skills", target: "skills" },
  { name: "Experience", target: "experience" },
  { name: "Projects", target: "projects" },
  { name: "Achievements", target: "achievements" },
  { name: "Education", target: "education" },
  { name: "Contact", target: "contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      component="header"
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "var(--bg-nav)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        py: scrolled ? 0.5 : 1.5,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar component="nav" aria-label="Main Navigation" disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Brand */}
          <Magnetic strength={0.15}>
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "12px",
                    background: "var(--gradient-btn)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  <Terminal size={22} />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: "-0.5px",
                      color: "var(--text-primary)",
                      fontSize: "1.25rem",
                      lineHeight: 1.1,
                    }}
                  >
                    Sohidul
                    <span style={{ color: "var(--accent-cyan)" }}>.dev</span>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      mt: 0.2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: "var(--accent-emerald)",
                        boxShadow: "0 0 8px var(--accent-emerald)",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "var(--text-secondary)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      Software Engineer II
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ScrollLink>
          </Magnetic>

          {/* Desktop Nav Items */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active-nav-item"
                style={{ cursor: "pointer" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text-secondary)",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "var(--accent-cyan)",
                    },
                    "&.active-nav-item": {
                      color: "var(--accent-cyan)",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </ScrollLink>
            ))}
          </Box>

          {/* Actions & Theme Toggle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* Theme Toggle Button with Magnetic effect */}
            <Magnetic strength={0.25}>
              <IconButton
                onClick={toggleTheme}
                aria-label="Toggle theme"
                sx={{
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "12px",
                  p: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "var(--border-accent)",
                    backgroundColor: "var(--bg-card-hover)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {isDark ? (
                  <Sun size={20} color="var(--accent-cyan)" />
                ) : (
                  <Moon size={20} color="var(--accent-violet)" />
                )}
              </IconButton>
            </Magnetic>

            {/* Resume Button with Magnetic effect */}
            <Magnetic strength={0.2}>
              <Button
                variant="outlined"
                size="small"
                href="/Sohidul Islam CV.pdf" download="Sohidul_Islam_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Download size={16} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  borderRadius: "10px",
                  borderColor: "var(--border-accent)",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 2,
                  py: 0.8,
                  "&:hover": {
                    borderColor: "var(--accent-cyan)",
                    backgroundColor: "rgba(0, 240, 255, 0.08)",
                  },
                }}
              >
                Resume
              </Button>
            </Magnetic>

            {/* Mobile Menu Toggle */}
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Toggle drawer"
              sx={{
                display: { xs: "flex", md: "none" },
                color: "var(--text-primary)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                p: 1,
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-primary)",
            p: 3,
            borderLeft: "1px solid var(--border-subtle)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Navigation
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "var(--text-primary)" }}
          >
            <X size={20} />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem key={item.target} disablePadding sx={{ mb: 1 }}>
              <ScrollLink
                to={item.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={handleDrawerToggle}
                style={{ width: "100%" }}
              >
                <ListItemButton
                  sx={{
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "var(--bg-card-hover)",
                      color: "var(--accent-cyan)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  />
                </ListItemButton>
              </ScrollLink>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            variant="contained"
            href="/Sohidul Islam CV.pdf" download="Sohidul_Islam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Download size={18} />}
            sx={{
              borderRadius: "12px",
              background: "var(--gradient-btn)",
              color: "#fff",
              fontWeight: 700,
              py: 1.2,
              textTransform: "none",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
