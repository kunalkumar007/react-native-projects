import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function AlbumArt({url, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
