import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
export default function Header({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDownPress}>
        <Image
          style={styles.button}
          source={require('../assets/baseline_keyboard_arrow_down_white_24dp.png')}
        />
      </TouchableOpacity>
      <Text onPress={onMessagePress} style={styles.message}>
        {message.toUpperCase()}
      </Text>
      <TouchableOpacity onPress={onQueuePress}>
        <Image
          style={styles.button}
          source={require('../assets/baseline_queue_music_white_24dp.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    color: 'rgba(255,255,255,.72)',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  button: {
    opacity: 0.72,
  },
});
