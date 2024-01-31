import React from 'react';
import { Card, CardContent, CardHeader, Container, Grid } from '@mui/material';
import '../styling/LiveStream.css'; // Import a CSS file for styling

const LiveStream = () => {
  const streamUrls = [
    { platform: 'YouTube', url: 'https://youtube.com/@newnationsbaptistchurch1903?si=keIyoC4L0ILVbvWZ' },
    { platform: 'Mixlr', url: 'https://nnbc.mixlr.com/recordings/' },
    // Add more platforms and URLs as needed
  ];

  return (
    <Container className='live-stream-container'>
      <Grid container spacing={2}>
        {streamUrls.map((stream, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card className="stream-item" style={{ width: '100%', minWidth: '300px' }}>
              <CardHeader title={stream.platform} />
              <CardContent>
                {/* Embed live stream player */}
                <iframe
                  title={`${stream.platform} Live Stream`}
                  width="100%"
                  height="200"
                  src={stream.url}
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LiveStream;
