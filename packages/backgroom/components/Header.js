import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Header({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDownPress}>
        <Icon
          name="keyboard-arrow-down"
          color="white"
          size={20}
          style={styles.button}
        />
      </TouchableOpacity>
      <Text onPress={onMessagePress} style={styles.message}>
        {message.toUpperCase()}
      </Text>
      <TouchableOpacity onPress={onQueuePress}>
        <Icon
          name="queue-music"
          color="white"
          size={20}
          style={styles.button}
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
