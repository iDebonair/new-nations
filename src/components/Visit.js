import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import FAQs from './FAQs';
import churchBanner from '../assets/auditorium.jpg';
import Ande from '../assets/Ande.jpg';

const Visit = () => {
  const defaultMapLocation =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15851.920346893372!2d3.3663612!3d6.5752878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92707ee500e9%3A0x9ee6148de43a4d22!2s1%20Aderibigbe%20Shitta%20St%2C%20Maryland%2C%20Lagos%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1614658044073!5m2!1sen!2sus';

  return (
    <div style={{ padding: '0', margin: '0', position: 'relative', marginTop: '70px' }}>
      {/* First Banner Image */}
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
        <img
          src={churchBanner} // Replace with your actual banner image URL
          alt="Banner"
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
        {/* Text Overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <Typography variant="h3" style={{ fontWeight: 'bold' }} gutterBottom>
            New Nations Baptist Church
          </Typography>
          <Typography variant="body3" style={{ fontWeight: 'bold' }}>
            Join us for a transformative worship experience
          </Typography>
        </div>
      </div>

      {/* Church Address and Picture */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ width: '50%', margin: '1em auto' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            1, Aderibigbe Shitta, Maryland, Lagos
            <br />
            <br />
            <strong>Sunday:</strong> 9:00 AM
            <br />
            <br />
            <strong>Wednesday:</strong> 7:00 PM
            <br />
          </Typography>
        </Grid>

        {/* Picture */}
        <Grid item xs={12} md={6}>
          <img
            src={Ande} // Replace with your actual church picture URL
            alt="Church"
            style={{ width: '100%', height: 'auto', maxWidth: '400px', borderRadius: '10px' }}
          />
        </Grid>
      </Grid>

      {/* Map */}
      <Grid container justifyContent="center" alignItems="center" style={{ width: '90%', margin: '1em auto' }}>
        <Grid item xs={12}>
          <iframe
            title="Church Map"
            width="100%"
            height="300"
            style={{ border: '0' }}
            src={defaultMapLocation}
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>

      {/* Second Banner Image */}
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative', marginTop: '20px', marginBottom: '40px' }}>
        <img
          src="https://source.unsplash.com/1600x200/?nature,church" // Replace with your actual banner image URL
          alt="Banner"
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
        {/* Text Overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
            FAQs
          </Typography>
        </div>
      </div>

      {/* FAQs Section */}
      <FAQs />
    </div>
  );
};

export default Visit;
