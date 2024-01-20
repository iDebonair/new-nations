import React from 'react';
import { Typography} from '@material-ui/core';

const Youth = () => {
  return (
    <div style={{ padding: '0', margin: '0', position: 'relative',marginTop: '70px' }}>
      {/* First Banner Image */}
      <div style={{ width: '100vw', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
        <img
          src={'https://source.unsplash.com/1600x200/?nature,church'} // Replace with your actual banner image URL
          alt="Banner"
          style={{ width: '100%', height: '600px', objectFit: 'cover' }}
        />
        {/* Text Overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <Typography variant="h1" gutterBottom>
            YOUTH UNUSUAL
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Youth;
