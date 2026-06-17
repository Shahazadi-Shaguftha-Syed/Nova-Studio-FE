'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1c3a2e' },
    secondary: { main: '#b8924a' },
    background: { default: '#1a3329', paper: '#1f3d30' },
    text: { primary: '#f5f0e8', secondary: '#c9b99a' },
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
});

export default theme;