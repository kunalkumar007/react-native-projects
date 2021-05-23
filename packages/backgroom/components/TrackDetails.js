import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TrackDetails({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAddPress}>
        <Icon
          name="add-circle-outline"
          color="white"
          style={styles.button}
          size={22}
        />
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title} onPress={onTitlePress}>
          {title}
        </Text>
        <Text style={styles.artist} onPress={onArtistPress}>
          {artist}
        </Text>
      </View>
      <TouchableOpacity onPress={onMorePress}>
        <View style={styles.moreButton}>
          <Icon
            name="more-horiz"
            color="white"
            style={styles.moreButtonIcon}
            size={16}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  artist: {
    color: 'rgba(255,255,255,.72)',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 17,
    width: 17,
  },
});
