import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <img
          src="https://placekitten.com/800/400"  // Replace with the URL of your pastor's picture
          alt="Senior Pastor"
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <Typography variant="h4" sx={{ marginTop: '1rem' }}>
          Welcome Message from Senior Pastor
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
