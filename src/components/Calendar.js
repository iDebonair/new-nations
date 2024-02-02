import React, { useState } from 'react';
import {
  Grid,
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { styled, } from '@mui/system';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format } from 'date-fns';

const HeaderTypography = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '16px',
  color: '#2196F3',
});

const Calendar = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [sessionDetails, setSessionDetails] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [modeOfMeeting, setModeOfMeeting] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handlePersonChange = (person) => {
    setSelectedPerson(person);
  };

  const handleDetailsChange = (details) => {
    setSessionDetails(details);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handleNameChange = (name) => {
    setName(name);
  };

  const handlePhoneNumberChange = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  const handleModeOfMeetingChange = (mode) => {
    setModeOfMeeting(mode);
  };

  const handleBooking = () => {
    // Implement your booking logic here
    console.log('Booking details:', {
      date: selectedDate,
      time: selectedTime,
      person: selectedPerson,
      details: sessionDetails,
      name: name,
      phoneNumber: phoneNumber,
      modeOfMeeting: modeOfMeeting,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '70px' }}>
      <HeaderTypography variant="h6" align="center" gutterBottom>
        We would love to pray with you! Let us know below how we can pray or discuss.
      </HeaderTypography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Select Date"
            type="date"
            defaultValue={format(selectedDate, 'yyyy-MM-dd')}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Select Time"
            type="time"
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Your Name"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Mode of Meeting</InputLabel>
            <Select
              value={modeOfMeeting}
              onChange={(e) => handleModeOfMeetingChange(e.target.value)}
              label="Mode of Meeting"
            >
              <MenuItem value="In-person">In-person</MenuItem>
              <MenuItem value="Virtual">Virtual</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Select Who To See</InputLabel>
            <Select
              value={selectedPerson}
              onChange={(e) => handlePersonChange(e.target.value)}
              label="Select Who to See"
            >
              <MenuItem value="Rev Abimbola">Rev Abimbola</MenuItem>
              <MenuItem value="Rev Adeyemo">Rev Adeyemo</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Session Details"
            multiline
            rows={4}
            value={sessionDetails}
            onChange={(e) => handleDetailsChange(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{
              background: '#001F3F',
              color: 'white',
              '&:hover': {
                background: '#001A33',
              },
            }}
            onClick={handleBooking}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calendar;
