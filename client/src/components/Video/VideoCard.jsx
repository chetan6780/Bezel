import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const VideoCard = (props) => {
  const ref = useRef();
  const peer = props.peer;

  useEffect(() => {
    // add video stream to video element
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
    // remove video stream from video element
    peer.on('track', (track, stream) => {
    });
  }, [peer]);

  return (
    <Video
      playsInline
      autoPlay
      ref={ref}
    />
  );
};

// Styled Components below
const Video = styled.video``;

export default VideoCard;
