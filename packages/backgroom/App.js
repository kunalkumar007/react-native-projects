import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import AlbumArt from './components/AlbumArt';
import TrackDetails from './components/TrackDetails';
import SeekBar from './components/seekBar';
import Controls from './components/Controls';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header message="Playing from charts" />
      <AlbumArt url="https://64.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
      <TrackDetails title="Stressed Out" artist="Twenty One Pilots" />
      <SeekBar trackLength={204} currentPosition={156} />
      <Controls />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  text: {
    color: 'white',
  },
});

export default App;
