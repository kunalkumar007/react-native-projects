import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';

export default function AlbumArt({url, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: url}} />
      </TouchableOpacity>
    </View>
  );
}

const {width} = Dimensions.get('window');
const imageSize = width - 48;
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
});
