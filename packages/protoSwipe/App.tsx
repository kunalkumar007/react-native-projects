import React from 'react';
import Navigator from './navigations/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import {
	useFonts,
	Montserrat_700Bold,
	Montserrat_600SemiBold,
	Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
// import AppLoading from 'expo';

export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold,
		Montserrat_600SemiBold,
		Montserrat_800ExtraBold,
	});
	// if (!fontsLoaded) {
	// 	return <AppLoading />;
	// }
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
}
