import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import UpcomingPrograms from './UpcomingPrograms';
import video from '../assets/it-is-well.mp4';

const Home = () => {
  return (
    <div>
      <Container
        maxWidth="md"
        sx={{
          marginTop: '4rem',
          padding: '2rem', // Reduce padding for smaller screens
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Video */}
        <div
          style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
            style={{ borderRadius: '8px' }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              color: 'white',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginTop: '1rem',
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
              }}
            >
              <strong>JOIN AS WE WORSHIP</strong>
            </Typography>
          </div>
        </div>

        {/* Button Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '70%', // Adjust the top position as needed
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', // Adjust button width for smaller screens
          }}
        >
              <Button
            component="a"
            href="/visit"
            variant="contained"
            size="large"
            sx={{
              background: '#001F3F',
              color: 'white',
              width: '60%', // Button takes full width
              fontSize: {
                xs: '0.6rem', // Adjust font size for smaller screens
                sm: '1rem',
                md: '1.2rem',
                lg: '1.5rem',
              },
            }}
          >
            Experience Our Service
          </Button>
        </div>
      </Container>

      {/* Add UpcomingPrograms component */}
      <UpcomingPrograms />
    </div>
  );
};

export default Home;
