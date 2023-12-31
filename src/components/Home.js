import React from 'react';
import { Typography, Container, Button } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', padding: '2rem', textAlign: 'center', position: 'relative' }}>
      {/* Video */}
      <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
        <video
          width="100%"
          height="auto"
          controls
          style={{ borderRadius: '8px' }}
        >
          <source src="https://example.com/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', color: 'white' }}>

          <Typography variant="h4" sx={{ marginTop: '1rem' }}>
            <strong>JOIN AS WE WORSHIP</strong>
          </Typography>
        </div>
      </div>

      {/* Button Overlay */}
      <Button
        component="a"
        href="/visit"
        variant="contained"
        size="large"
        sx={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', background: '#001F3F', color: 'white' }}
      >
        Experience Our Service
      </Button>
    </Container>
  );
};

export default Home;
