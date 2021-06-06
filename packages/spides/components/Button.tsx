import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Button(props: { name: string; number: string }) {
	return (
		<View style={styles.container}>
			<View style={styles.circle}>
				<Text style={styles.textInfo}>i</Text>
			</View>
			<Text style={styles.btnName}>{props.name}</Text>
			<Text style={styles.number}>{props.number}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		borderColor: '#6a706e',
		borderWidth: 0.3,
		marginHorizontal: 30,
		paddingHorizontal: 20,
		paddingVertical: 15,
		marginTop: 10,
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#2b3240',
	},
	textInfo: {
		color: '#6a706e',
		fontWeight: 'bold',
	},
	btnName: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 12,
		marginLeft: 20,
	},
	number: {
		fontWeight: 'bold',
		color: 'red',
		marginLeft: 90,
		fontSize: 14,
	},
});
