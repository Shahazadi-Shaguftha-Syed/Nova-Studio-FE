'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType: 'page_visit', page: 'home' }),
    }).catch((err) => console.error('Analytics error:', err));
  }, []);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2">
            Nova Studio
          </Typography>
          <Typography variant="h5" >
            We Build Digital Experiences That Matter
          </Typography>
          <Typography variant="h6" >
            From concept to launch — web design, development, and branding for ambitious brands.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analytics`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ eventType: 'cta_click', page: 'home' }),
              }).catch((err) => console.error('Analytics error:', err));
            }}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
            }}
          >
            Start a Project
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}