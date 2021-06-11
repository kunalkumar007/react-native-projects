import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from './Colors';
export default function Received({ image, message }: { image: string; message: string }) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: image }} style={styles.img} />
			<View>
				<Text style={styles.message}>{message}</Text>
				<Text style={styles.duration}>12:13 AM</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	duration: {
		color: '#b6b6b6',
		fontSize: 11,
		marginHorizontal: 15,
		marginTop: 5,
		fontFamily: 'Montserrat_600SemiBold',
	},
	container: {
		flexDirection: 'row',
		marginTop: 20,
		width: 250,
		alignSelf: 'flex-start',
		flexGrow: 1,
		flex: 1,
	},
	img: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	message: {
		fontSize: 13,
		marginHorizontal: 15,
		fontFamily: 'Montserrat_600SemiBold',
	},
});
