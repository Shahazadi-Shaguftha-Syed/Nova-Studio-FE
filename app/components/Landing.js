'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
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