// Pastorate.js

import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styling/Pastorate.css'; // Import the CSS file
import LeadPastor from '../assets/leadPastor.jpg'

const pastorsData = [
  {
    name: 'Rev. Dr. S.O Abimbola',
    role: 'Lead Pastor',
    image: {LeadPastor}, // Replace with the actual image URL
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rev. D.A Adeyemo',
    role: 'Associate Pastor',
    image: 'https://placekitten.com/301/301', // Replace with the actual image URL
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Pastorate = () => {
  return (
    <Container sx={{ marginTop: '4rem', padding: '4rem' }}>
      <div className="pastor-profiles">
        {pastorsData.map((pastor, index) => (
          <div className={`pastor ${index === 0 ? 'lead-pastor' : 'associate-pastor'}`} key={index}>
            <img
              src={pastor.image}
              alt={pastor.name}
              width="400"
              height="420"
            />
            <div className="text-container">
              <Typography variant="h5" gutterBottom>
               {pastor.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
               {pastor.role}
              </Typography>
              <Typography variant="body1">
                {pastor.bio}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pastorate;
