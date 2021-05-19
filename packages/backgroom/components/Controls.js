import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

const PlayComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPressPause}>
      <View style={styles.playButton}>
        <Image source={require('../assets/baseline_pause_white_48dp.png')} />
      </View>
    </TouchableOpacity>
  );
};

const BackComponent = props => {
  return (
    <TouchableOpacity onPress={props.onBack}>
      <Image
        source={require('../assets/baseline_skip_previous_white_36dp.png')}
      />
    </TouchableOpacity>
  );
};

const ShuffleComponent = props => {
  return (
    <TouchableOpacity activeOpacity={0.0} onPress={props.onPressShuffle}>
      <Image
        style={[styles.secondaryControl, props.shuffleOn ? [] : styles.off]}
        source={require('../assets/baseline_queue_music_white_24dp.png')}
      />
    </TouchableOpacity>
  );
};

const PauseComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPressPlay}>
      <View style={styles.playButton}>
        <Image
          source={require('../assets/baseline_play_arrow_white_48dp.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

const ForwardComponent = props => {
  return (
    <TouchableOpacity
      onPress={props.onForward}
      disabled={props.forwardDisabled}>
      <Image
        style={[props.forwardDisabled && {opacity: 0.3}]}
        source={require('../assets/baseline_skip_next_white_36dp.png')}
      />
    </TouchableOpacity>
  );
};

const RepeatComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPressRepeat}>
      <Image
        style={[styles.secondaryControl, props.repeatOn ? [] : styles.off]}
        source={require('../assets/baseline_repeat_white_24dp.png')}
      />
    </TouchableOpacity>
  );
};

export default function Controls({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) {
  return (
    <View style={styles.container}>
      <ShuffleComponent onPressShuffle={onPressShuffle} shuffleOn={shuffleOn} />
      <View style={{width: 40}} />
      <BackComponent onBack={onBack} />
      <View style={{width: 20}} />
      {!paused ? (
        <PlayComponent onPressPause={onPressPause} />
      ) : (
        <PauseComponent onPressPlay={onPressPlay} />
      )}

      <View style={{width: 20}} />
      <ForwardComponent
        forwardDisabled={forwardDisabled}
        onForward={onForward}
      />
      <View style={{width: 40}} />
      <RepeatComponent onPressRepeat={onPressRepeat} repeatOn={repeatOn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.3,
  },
});
