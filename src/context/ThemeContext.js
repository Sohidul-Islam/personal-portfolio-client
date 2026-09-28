import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(() => {
        const saved = localStorage.getItem('portfolio_theme');
        if (saved === 'dark' || saved === 'light') return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'dark'; // Default to dark for high-tech futuristic look
    });

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        localStorage.setItem('portfolio_theme', themeMode);
        document.documentElement.setAttribute('data-theme', themeMode);

        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [themeMode]);

    const muiTheme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: themeMode === 'dark' ? '#00F0FF' : '#0284C7',
            },
            secondary: {
                main: themeMode === 'dark' ? '#8B5CF6' : '#7C3AED',
            },
            background: {
                default: themeMode === 'dark' ? '#0A0D14' : '#F8FAFC',
                paper: themeMode === 'dark' ? '#121824' : '#FFFFFF',
            },
            text: {
                primary: themeMode === 'dark' ? '#F8FAFC' : '#0F172A',
                secondary: themeMode === 'dark' ? '#94A3B8' : '#475569',
            },
        },
        typography: {
            fontFamily: '"Plus Jakarta Sans", "Inter", "Poppins", sans-serif',
        },
    });

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme, isDark: themeMode === 'dark' }}>
            <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

