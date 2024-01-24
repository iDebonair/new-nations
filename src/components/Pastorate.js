// Pastorate.js

import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import '../styling/Pastorate.css'; // Import the modified CSS file
import LeadPastor from '../assets/leadPastor.jpg';

const pastorsData = [
  {
    name: 'Rev. Dr. S.O Abimbola',
    role: 'Lead Pastor',
    image: LeadPastor,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rev. D.A Adeyemo',
    role: 'Associate Pastor',
    image: LeadPastor, // Replace with the actual image URL
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Pastorate = () => {
  return (
    <Container sx={{ marginTop: '4rem', padding: '2rem' }}>
      {pastorsData.map((pastor, index) => (
        <Card key={index} className="card">
          <CardMedia
            component="img"
            height="300"
            image={pastor.image}
            alt={pastor.name}
            className="card-img"
          />
          <CardContent className="card-content">
            <Typography variant="h5" gutterBottom>
              {pastor.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {pastor.role}
            </Typography>
            <Typography variant="body1">
              {pastor.bio}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Pastorate;
