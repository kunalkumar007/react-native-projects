import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

const SplashComponent = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.childContainer}>
        <Image
          source={{
            uri: 'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png',
          }}
          style={styles.splashImage}
        />
      </View>
    </View>
  );
};

export default function splashScreen() {
  const [isVisible, setisVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisVisible(false);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {isVisible ? <SplashComponent /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  rootContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  childContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcd4',
    flex: 1,
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
