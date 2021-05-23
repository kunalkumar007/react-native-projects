import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPressPause}>
      <View style={styles.playButton}>
        <Icon name="pause" size={48} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const BackComponent = props => {
  return (
    <TouchableOpacity onPress={props.onBack}>
      <Icon name="skip-previous" color="white" size={36} />
    </TouchableOpacity>
  );
};

const ShuffleComponent = props => {
  return (
    <TouchableOpacity activeOpacity={0.0} onPress={props.onPressShuffle}>
      <Icon
        name="queue-music"
        color="white"
        style={[styles.secondaryControl, props.shuffleOn ? [] : styles.off]}
        size={20}
      />
    </TouchableOpacity>
  );
};

const PauseComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPressPlay}>
      <View style={styles.playButton}>
        <Icon name="play-arrow" size={48} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const ForwardComponent = props => {
  return (
    <TouchableOpacity
      onPress={props.onForward}
      disabled={props.forwardDisabled}>
      <Icon
        name="skip-next"
        size={36}
        style={[props.forwardDisabled && {opacity: 0.3}]}
        color="white"
      />
    </TouchableOpacity>
  );
};

const RepeatComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPressRepeat}>
      <Icon
        name="repeat"
        size={20}
        color="white"
        style={[styles.secondaryControl, props.repeatOn ? [] : styles.off]}
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
    paddingBottom: 20,
    paddingTop: 0,
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
