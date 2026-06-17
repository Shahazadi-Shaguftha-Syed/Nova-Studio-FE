'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [

  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: '#1a3329', borderBottom: '1px solid rgba(184,146,74,0.3)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#f5f0e8', letterSpacing: 4, fontSize: '0.85rem' }}>
            NOVA STUDIO
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Button key={link.label} href={link.href} sx={{ color: '#c9b99a', fontSize: '0.75rem', letterSpacing: 2, '&:hover': { color: '#b8924a' } }}>
                {link.label}
              </Button>
            ))}
            <Button href="#contact" variant="outlined" sx={{ color: '#b8924a', borderColor: '#b8924a', fontSize: '0.75rem', letterSpacing: 2, '&:hover': { backgroundColor: '#b8924a', color: '#1a3329' } }}>
              START A PROJECT
            </Button>
          </Box>

          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#f5f0e8' }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { backgroundColor: '#1a3329', color: '#f5f0e8' } }}>
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton href={link.href} onClick={() => setDrawerOpen(false)} sx={{ color: '#c9b99a' }}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}