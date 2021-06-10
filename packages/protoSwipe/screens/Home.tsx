import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
	return (
		<View style={styles.homeContainer}>
			<Text>Home Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Home;
