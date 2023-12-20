import React from 'react';

const LiveStream = () => {
  const liveStreamUrl = 'YOUR_YOUTUBE_LIVE_STREAM_URL';

  return (
    <div>
      <h2>Live Stream</h2>
      {/* Embed live stream player */}
      <iframe
        title="YouTube Live Stream"
        width="560"
        height="315"
        src={liveStreamUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveStream;
