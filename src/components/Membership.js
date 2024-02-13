import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const ministries = [
  { id: 1, name: 'Ushering', description: 'Welcome and guide attendees during services.', image: 'Connect.jpg' },
  { id: 2, name: 'Music', description: 'Lead worship and enhance the worship experience.', image: 'Choir.jpg' },
  { id: 3, name: 'Drama', description: 'Express biblical stories and messages through dramatic performances.', image: 'drama.jpg' },
  { id: 4, name: 'Children', description: 'Provide education and activities for children.', image: 'children.jpg' },
  // Add more ministries as needed
];


const MembershipForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [wantToJoinMinistry, setWantToJoinMinistry] = useState('');

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Form submitted:', {
      name,
      email,
      address,
      phoneNumber,
      gender,
      membershipType,
      wantToJoinMinistry,
    });
    // Add logic to send data to the server or perform other actions
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '100px' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '2rem', fontSize: '1.5rem', color: '#2196F3', }}>
        Church Membership Update Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                label="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Want to Join a Ministry?</InputLabel>
              <Select
                value={wantToJoinMinistry}
                onChange={(e) => setWantToJoinMinistry(e.target.value)}
                required
                label="Want to Join a Ministry?"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
                {/* Add more membership types as needed */}
              </Select>
            </FormControl>
          </Grid>
          {wantToJoinMinistry === 'yes' && (
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel>Select Ministry</InputLabel>
                {/* Replace ministriesList with your actual list of ministries */}
                <Select
                  value={membershipType}
                  onChange={(e) => setMembershipType(e.target.value)}
                  label="Select Ministry"
                  required
                >
              {/* Map over your list of ministries and render each as a MenuItem */}
              {ministries.map((ministry) => (
                <MenuItem key={ministry.id} value={ministry.name}>
                  {ministry.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MembershipForm;
