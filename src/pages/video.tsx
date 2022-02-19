import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import VideoPlayer from 'react-native-video-controls';

const Video: React.FC = () => {
  const carousel = useRef(null);

  return (
    <Carousel
      ref={carousel}
      data={[]}
      renderItem={() => <VideoPlayer />}
    />
  );
};

const styles = {
  test: StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: undefined,
      width: undefined,
    },
  }),
};

export default Video;
