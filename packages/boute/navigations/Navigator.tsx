import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicon from '@expo/vector-icons/Ionicons';
import NewTab from '../screens/newScreen/Newtab';
import SearchTab from '../screens/searchScreen/SearchTab';
import FavouriteTab from '../screens/favouriteScreen/FavouriteTab';
import BasketTab from '../screens/basketScreen/BasketTab';
import ProfileTab from '../screens/profileScreen/ProfileTab';
import Filter from '../screens/searchScreen/Filter';
import FilterApply from '../screens/searchScreen/FilterApply';
import { RootStackParamList } from '../constants/types';
import Delivery from '../screens/basketScreen/Delivery';
import ProfileEdit from '../screens/profileScreen/ProfileEdit';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
				showLabel: false,
				style: {
					height: 45,
					justifyContent: 'center',
					backgroundColor: 'white',
					elevation: 2,
				},
			}}
			initialRouteName="Profile"
		>
			<Tab.Screen
				name="New"
				component={NewTab}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicon name="ios-sunny-outline" color={color} size={24} />,
				}}
			/>
			<Tab.Screen
				name="Favourite"
				component={FavouriteTab}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicon name="ios-heart-outline" color={color} size={24} />,
				}}
			/>

			<Tab.Screen
				name="Search"
				component={SearchStack}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => <Ionicon name="ios-search-outline" color={color} size={24} />,
				}}
			/>

			<Tab.Screen
				name="Basket"
				component={BasketStack}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicon name="basket-outline" color={color} size={24} />,
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicon name="happy-outline" color={color} size={24} />,
				}}
			/>
		</Tab.Navigator>
	);
};

const Stack = createStackNavigator<RootStackParamList>();

const SearchStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Search" component={SearchTab} />
			<Stack.Screen name="Filter" component={Filter} />
		</Stack.Navigator>
	);
};

const BasketStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Basket" component={BasketTab} />
			<Stack.Screen name="Delivery" component={Delivery} />
		</Stack.Navigator>
	);
};

const ProfileStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Profile" component={ProfileTab} />
			<Stack.Screen name="ProfileEdit" component={ProfileEdit} />
		</Stack.Navigator>
	);
};

export default function Navigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={BottomTabNavigator} />
			<Stack.Screen name="FilterApply" component={FilterApply} />
		</Stack.Navigator>
	);
}
