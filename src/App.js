import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { CustomThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Achievements from './Components/Achievements/Achievements';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './index.css';

function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </Box>
    </CustomThemeProvider>
  );
}

export default App;

