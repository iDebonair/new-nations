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
} from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format } from 'date-fns';


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [sessionDetails, setSessionDetails] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <h2>Select Date and Time</h2>
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
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div>
            <h2>Visitor Information</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
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
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Mode of Meeting</InputLabel>
                  <Select
                    value={modeOfMeeting}
                    onChange={(e) => handleModeOfMeetingChange(e.target.value)}
                  >
                    <MenuItem value="In-person">In-person</MenuItem>
                    <MenuItem value="Virtual">Virtual</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div>
            <h2>Select Person</h2>
            <FormControl fullWidth>
              <InputLabel>Select Who To See</InputLabel>
              <Select
                value={selectedPerson}
                onChange={(e) => handlePersonChange(e.target.value)}
              >
                <MenuItem value="Rev Abimbola">Rev Abimbola</MenuItem>
                <MenuItem value="Rev Adeyemo">Rev Adeyemo</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div>
            <h2>Enter Session Details</h2>
            <TextField
              label="Session Details"
              multiline
              rows={4}
              value={sessionDetails}
              onChange={(e) => handleDetailsChange(e.target.value)}
              fullWidth
            />
          </div>
        </Grid>

        <Grid item xs={12}>
        <Button
            variant="contained"
            style={{  background: '#001F3F', // Navy blue
            color: 'white',
            '&:hover': {
              background: '#001A33', // Darker shade on hover
            }, }} // Use blue color from Material-UI
            onClick={handleBooking}
            fullWidth
          >
            Book Time
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calendar;
