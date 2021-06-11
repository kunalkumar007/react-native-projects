import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicon from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Discussion from '../screens/Discussion';
import { RootStackParamList } from '../types/types';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#f2404c',
				inactiveTintColor: '#00119',
				style: {
					height: 65,
					justifyContent: 'center',
					backgroundColor: '#fff',
					paddingVertical: 15,
					elevation: 2,
				},
			}}
		>
			<Tab.Screen
				name="Chat"
				component={Chat}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => <Entypo name="chat" color={color} size={30} />,
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => <Ionicon name="ios-compass" color={color} size={30} />,
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => <Ionicon name="ios-person" color={color} size={30} />,
				}}
			/>
		</Tab.Navigator>
	);
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Discussion" component={Discussion} />
			<Stack.Screen name="Chat" component={BottomTabNavigator} />
		</Stack.Navigator>
	);
}
