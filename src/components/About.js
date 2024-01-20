import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <style>
        {`
          body {
            background-color: #f0f0f0; /* Set the main background color for the page */
            margin: 0; /* Remove default margin */
          }
        `}
      </style>

      {/* Banner Container */}
      <Container style={{ padding: '0', margin: '0', position: 'relative', marginTop:'70px' }}>
        <div style={{ width: '100vw', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
          <img
            src={'https://source.unsplash.com/1600x200/?nature,church'} // Replace with your actual banner image URL
            alt="Banner"
            style={{ width: '100%', objectFit: 'cover' }}
          />
          {/* Text Overlay */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              <strong>WHO ARE WE</strong>
            </Typography>
          </div>
        </div>
      </Container>

      {/* Reach Container */}
      <Container sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
        {/* Reach Section */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Picture */}
          <Grid item xs={12} md={6}>
            <div style={{ width: '100%', height: 'auto', borderRadius: '50%', overflow: 'hidden' }}>
              <img
                src="https://placekitten.com/400/400" // Replace with your actual picture URL
                alt="Reach"
                style={{ width: '80%', height: '80%', objectFit: 'cover' }}
              />
            </div>
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6} sx={{ padding: '2rem', textAlign: 'left', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              REACH
            </Typography>
            <Typography variant="body1">
              We share the life-giving message of Jesus during our services, which are designed with a focus on welcoming guests. Everyone is invited to join, regardless of their beliefs or uncertainties. Although our weekend services prioritize guests, we are confident that you will find inspiration and encouragement, regardless of where you currently stand on your spiritual journey.
            </Typography>
            
            {/* Visit Button */}
            <Button
              component={Link}
              to="/visit"
              variant="contained"
              size="large"
              sx={{
                marginTop: '2rem',
                backgroundColor: '#001F3F',
                color: 'white',
                '&:hover': {
                  background: '#001A33', // Darker shade on hover
                },
              }}
            >
              Visit Us
            </Button>
          </Grid>
        </Grid>

        {/* Connect Section */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={6} sx={{ padding: '2rem', textAlign: 'left', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              CONNECT
            </Typography>
            <Typography variant="body1">
              Significant transformations in life occur within the context of relationships. That's why we advocate for you to engage in house fellowships. These are essentially smaller groups of individuals that convene during the week, coming together around shared interests.
            </Typography>
            
            {/* Visit Button */}
            <Button
              component={Link}
              variant="contained"
              size="large"
              sx={{
                marginTop: '2rem',
                backgroundColor: '#001F3F',
                color: 'white',
                '&:hover': {
                  background: '#001A33', // Darker shade on hover
                },
              }}
            >
              Circles
            </Button>
          </Grid>

          {/* Picture */}
          <Grid item xs={12} md={6}>
            <div style={{ width: '100%', height: 'auto', borderRadius: '50%', overflow: 'hidden' }}>
              <img
                src="https://placekitten.com/400/400" // Replace with your actual picture URL
                alt="Connect"
                style={{ width: '80%', height: '80%', objectFit: 'cover' }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
