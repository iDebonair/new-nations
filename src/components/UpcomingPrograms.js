// UpcomingPrograms.js

import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const upcomingProgramsData = [
  {
    date: 'January 25, 2024',
    time: '3:00 PM - 5:00 PM',
    location: 'Main Auditorium',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more upcoming programs as needed
];

const UpcomingPrograms = () => {
  return (
    <Container sx={{ marginTop: '2rem', padding: '4rem' }}>
      <Typography variant="h5" gutterBottom>
        Upcoming Programs
      </Typography>
      <Grid container spacing={4}>
        {upcomingProgramsData.map((program, index) => (
          <Grid item xs={12} md={6} key={index}>
            <div className="program">
              <Typography variant="h6" gutterBottom>
                {program.date}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {program.time}
              </Typography>
              <Typography variant="body1">
                Location: {program.location}
              </Typography>
              <Typography variant="body1">
                Details: {program.details}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UpcomingPrograms;
