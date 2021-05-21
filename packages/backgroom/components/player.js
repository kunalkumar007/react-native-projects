import React, {useState, useRef, useImperativeHandle} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './seekBar';
import Controls from './Controls';
import Video from 'react-native-video';

export default function Player(props) {
  const [paused, setpaused] = useState(true);
  const [totalLength, settotalLength] = useState(1);
  const [currentPosition, setcurrentPosition] = useState(0);
  const [selectedTrack, setselectedTrack] = useState(0);
  const [repeatOn, setrepeatOn] = useState(false);
  const [shuffleOn, setshuffleOn] = useState(false);
  const [isChanging, setisChanging] = useState(false);
  const audioElement = useRef(null);

  const setDuration = data => {
    settotalLength(Math.floor(data.duration));
  };
  const setTime = data => {
    setcurrentPosition(Math.floor(data.currentTime));
  };
  const seek = time => {
    time = Math.round(time);
    audioElement && audioElement.current.seek(time);
  };

  const onBack = () => {
    if (currentPosition < 10 && selectedTrack > 0) {
      audioElement && audioElement.current.seek(0);
      setisChanging(true);
      setTimeout(() => {
        setcurrentPosition(0);
        setpaused(false);
        settotalLength(1);
        setisChanging(false);
        setselectedTrack(selectedTrack - 1);
      }, 0);
    } else {
      audioElement.current.seek(0);
      setcurrentPosition(0);
    }
  };

  const onForward = () => {
    if (selectedTrack < props.tracks.length - 1) {
      audioElement && audioElement.current.seek(0);
      setisChanging(true);
      setTimeout(() => {
        setcurrentPosition(0);
        settotalLength(1);
        setpaused(false);
        setisChanging(false);
        setselectedTrack(selectedTrack + 1);
      }, 0);
    }
  };

  const loadStart = () => {};
  const onEnd = () => {};
  const videoError = () => {};
  // add for accessing ref
  useImperativeHandle(props.playerRef, () => ({
    pauseVideo: () => setpaused(true),
  }));

  const track = props.tracks[selectedTrack];
  const video = isChanging ? null : (
    <Video
      source={{uri: track.audioUrl}}
      ref={audioElement}
      paused={paused} // Pauses playback entirely.
      resizeMode="cover" // Fill the whole screen at aspect ratio.
      repeat={true} // Repeat forever.
      onLoadStart={loadStart} // Callback when video starts to load
      onLoad={setDuration} // Callback when video loads
      onProgress={setTime} // Callback every ~250ms with currentTime
      onEnd={onEnd} // Callback when playback finishes
      onError={videoError} // Callback when video cannot be loaded
      style={styles.audioElement}
    />
  );

  return (
    <View style={styles.container}>
      <Header message="Playing From Charts" />
      <AlbumArt url={track.albumArtUrl} />
      <TrackDetails title={track.title} artist={track.artist} />
      <SeekBar
        onSeek={seek}
        trackLength={totalLength}
        onSlidingStart={() => setpaused(true)}
        currentPosition={currentPosition}
      />
      <Controls
        onPressRepeat={() => setrepeatOn(!repeatOn)}
        repeatOn={repeatOn}
        shuffleOn={shuffleOn}
        forwardDisabled={selectedTrack === props.tracks.length - 1}
        onPressShuffle={() => setshuffleOn(!shuffleOn)}
        onPressPlay={() => setpaused(false)}
        onPressPause={() => setpaused(true)}
        onBack={onBack}
        onForward={onForward}
        paused={paused}
      />
      {video}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
  },
  audioElement: {
    height: 0,
    width: 0,
  },
});
