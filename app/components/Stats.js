'use client';
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error('Failed to fetch stats:', err));
  }, []);

  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: 'center', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={stat.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="h2" sx={{ fontWeight: 700 }}>
                  <CountUp end={stat.value} duration={2} />+
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}