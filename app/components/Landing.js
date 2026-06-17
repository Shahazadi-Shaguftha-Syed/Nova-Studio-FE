'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType: 'page_visit', page: 'home' }),
    }).catch((err) => console.error('Analytics error:', err));
  }, []);
  return (
    <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#1a3329',
          color: '#f5f0e8',
          borderBottom: '1px solid rgba(184,146,74,0.3)',
        }}
      >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h6" sx={{ color: '#b8924a', mb: 2, letterSpacing: 3, fontSize: '0.8rem' }}>
             DIGITAL AGENCY
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontFamily: "'Playfair Display', serif" }}>
            We craft digital experiences that <em>inspire</em> and <em>perform</em>.
          </Typography>
          <Typography variant="body1" sx={{ color: '#c9b99a', mb: 4, maxWidth: 400 }}>
            We partner with ambitious brands to design and build digital experiences that are beautiful, functional, and built for real impact.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            href="#contact"
            sx={{
              color: '#f5f0e8',
              borderColor: '#f5f0e8',
              letterSpacing: 2,
              fontSize: '0.8rem',
              '&:hover': { backgroundColor: '#b8924a', borderColor: '#b8924a', color: '#1a3329' },
            }}
          >
            START A PROJECT
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}