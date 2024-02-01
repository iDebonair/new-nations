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

const MembershipForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [membershipType, setMembershipType] = useState('');

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Form submitted:', {
      name,
      email,
      address,
      phoneNumber,
      gender,
      membershipType,
    });
    // Add logic to send data to the server or perform other actions
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '10rem' }}>
      <Typography variant="h4" align="center" gutterBottom style={{marginBottom: '2rem'}}>
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
          <Grid item xs={12} sm={12}>
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
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel>Want to Join a Ministry?</InputLabel>
              <Select
                value={membershipType}
                onChange={(e) => setMembershipType(e.target.value)}
                required
              >
                <MenuItem value="regular">Regular</MenuItem>
                <MenuItem value="associate">Associate</MenuItem>
                {/* Add more membership types as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
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
