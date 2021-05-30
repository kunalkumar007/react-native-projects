import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStackNavigator from './navigation/Navigator';
const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
