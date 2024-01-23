// ResponsiveFAQs.js

import React from 'react';
import { Typography } from '@material-ui/core';

const ResponsiveFAQs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px', textAlign: 'center' }}>
      {/* FAQ Header Container */}
      <div style={{ marginBottom: '20px', color: 'grey' }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
      </div>

      {/* FAQs Container */}
      <div style={{ width: '100%' }}>
        {/* FAQ 1 */}
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="body1">
            <strong>WHERE DO I PARK AND ENTER?</strong>
          </Typography>
          <Typography variant="body1" style={{ marginTop: '4px' }}>
            From the moment you pull onto the property, you will feel the excitement of the weekend worship experience at New Nations Baptist Church. Our friendly parking team will greet you with a smile and help you find a great parking spot.
          </Typography>
        </div>

        {/* FAQ 2 */}
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="body1">
            <strong>WHAT SHOULD I WEAR?</strong>
          </Typography>
          <Typography variant="body1" style={{ marginTop: '4px', marginBottom: '4px' }}>
            Our worshipers don a wide range of attire, from casual wear like jeans and sneakers to formal options like dresses and slacks and traditional attire. Feel free to dress comfortably in whatever you prefer—we're enthusiastic about having you join us! Rest assured, you'll blend in seamlessly, no matter your chosen attire.
          </Typography>
        </div>

        {/* FAQ 3 */}
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="body1">
            <strong>WHAT TO EXPECT DURING WORSHIP</strong>
          </Typography>
          <Typography variant="body1" style={{ marginTop: '4px', marginBottom: '4px' }}>
            The church services commence with Sunday school and then contemporary Christian music, showcasing a full band complete with guitars, drums, and keyboards. Our talented musicians and vocalists create a spiritually enriching musical backdrop for everyone to participate in. The focus is to enjoy the divine presence of God and worship Him in the beauty of His holiness.
          </Typography>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export default ResponsiveFAQs;
