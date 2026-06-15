'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box, Container, Typography, Tabs, Tab, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton, Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', category: '', image: '' });
  const [error, setError] = useState('');

  const getToken = () => localStorage.getItem('adminToken');

  const fetchData = async () => {
    const token = getToken();
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [contactsRes, projectsRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts`, { headers }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`),
      ]);

      if (contactsRes.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        return;
      }

      setContacts(await contactsRes.json());
      setProjects(await projectsRes.json());
    } catch (err) {
      setError('Failed to load data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProject = async (e) => {
    e.preventDefault();
    setError('');

    if (!newProject.title || !newProject.category || !newProject.image) {
      setError('All project fields are required');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(newProject),
      });

      if (res.ok) {
        setNewProject({ title: '', category: '', image: '' });
        fetchData();
      } else {
        setError('Failed to add project');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      if (res.ok) {
        fetchData();
      } else {
        setError('Failed to delete project');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>Admin Dashboard</Typography>
        <Button variant="outlined" onClick={handleLogout}>Logout</Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Tabs value={tab} onChange={(e, val) => setTab(val)} sx={{ mb: 3 }}>
        <Tab label="Contact Submissions" />
        <Tab label="Projects" />
      </Tabs>

      {tab === 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.message}</TableCell>
                  <TableCell>{new Date(c.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {tab === 1 && (
        <Box>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Add New Project</Typography>
            <Box component="form" onSubmit={handleAddProject} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                label="Title"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                size="small"
              />
              <TextField
                label="Category"
                value={newProject.category}
                onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                size="small"
              />
              <TextField
                label="Image URL"
                value={newProject.image}
                onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                size="small"
                sx={{ flexGrow: 1 }}
              />
              <Button type="submit" variant="contained">Add</Button>
            </Box>
          </Paper>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.title}</TableCell>
                    <TableCell>{p.category}</TableCell>
                    <TableCell>
                      <Box component="img" src={p.image} alt={p.title} sx={{ width: 60, height: 40, objectFit: 'cover' }} />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleDeleteProject(p.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Container>
  );
}