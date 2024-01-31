import { Card, CardContent, CardHeader, Container } from '@mui/material';
import React from 'react';
import '../styling/LiveStream.css'; // Import a CSS file for styling

const LiveStream = () => {
  const streamUrls = [
    { platform: 'YouTube', url: 'https://www.youtube.com/@newnationsbaptistchurch1903' },
    { platform: 'Mixlr', url: 'https://nnbc.mixlr.com/' },
    // Add more platforms and URLs as needed
  ];

  return (
    <Container>
      <div className="live-stream-container">
        {streamUrls.map((stream, index) => (
          <Card key={index} className="stream-item">
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
        ))}
      </div>
    </Container>
  );
};

export default LiveStream;
