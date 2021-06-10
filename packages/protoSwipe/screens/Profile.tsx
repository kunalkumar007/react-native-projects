import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IProfile } from '../types/types';

export default function Profile({ username, uri }: IProfile) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: uri }} style={styles.avatarStyle} />
			<Text style={styles.nameStyle}>{username}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 20,
		marginRight: 17,
	},
	avatarStyle: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	nameStyle: {
		marginTop: 10,
		fontSize: 11,
		color: '#fff',
		fontFamily: 'Montserrat_700Bold',
	},
});
