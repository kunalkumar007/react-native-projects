import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
	useFonts,
	Manrope_400Regular,
	Manrope_700Bold,
	Manrope_300Light,
	Manrope_500Medium,
	Manrope_600SemiBold
} from '@expo-google-fonts/manrope';
import Navigator from './navigations/Navigator';
export default function App() {
	let [fontsLoaded] = useFonts({
		Manrope_400Regular,
		Manrope_700Bold,
		Manrope_500Medium,
		Manrope_300Light,
		Manrope_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
}
