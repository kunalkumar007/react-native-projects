import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LastWatch({ checkedOn }: { checkedOn: string }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{checkedOn}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		elevation: 3,
		paddingVertical: 2,
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		width: 'fit-content',
		marginTop: 25,
		alignSelf: 'center',
	},
	text: {
		color: '#f20045',
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 12,
	},
});
