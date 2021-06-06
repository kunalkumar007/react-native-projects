import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const screenOptionStyle = {
	headerShown: false,
};

export default function Navigator() {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
