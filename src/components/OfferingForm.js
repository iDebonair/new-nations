import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Container, Typography, TextField, Button } from '@mui/material';

// Define styles using styled
const RootContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Center content vertically
  height: '90vh', // Full height of the viewport
});

const FormContainer = styled('form')({
  width: '100%',
  maxWidth: 400,
  marginTop: theme => theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SpacedTextField = styled(TextField)({
  marginBottom: theme => theme.spacing(2),
  width: '100%', // Full width
});

const SpacedSubmitButton = styled(Button)({
  background: '#001F3F', // Navy blue
  color: 'white',
  '&:hover': {
    background: '#001A33', // Darker shade on hover
  },
  width: '100%', // Full width
});

const OfferingForm = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Implement payment logic (e.g., integrate with Stripe)
    console.log(`Processing payment for $${amount}`);
  };

  return (
    <RootContainer>
      <Typography variant="h5" gutterBottom>
        Offering
      </Typography>
      <FormContainer onSubmit={handlePaymentSubmit}>
        <SpacedTextField
          label="Amount"
          variant="outlined"
          fullWidth
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
        <SpacedSubmitButton
          type="submit"
          variant="contained"
        >
          Submit Offering
        </SpacedSubmitButton>
      </FormContainer>
    </RootContainer>
  );
};

export default OfferingForm;
