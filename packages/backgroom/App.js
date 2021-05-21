import React, {useRef} from 'react';
// import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import tracks from './components/tracks';
import Player from './components/player';

export default function App() {
  // create ref
  const playerRef = useRef();

  return <Player tracks={tracks} playerRef={playerRef} />;
}
