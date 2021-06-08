import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICard } from 'constants/types';

export default function Card(props: ICard) {
	return (
		<View style={[styles.container, { backgroundColor: props.bg }]}>
			<View style={styles.col}>
				<Ionicons name={props.icon} size={30} color={props.bg === 'red' ? '#fff' : 'red'} />
				<TouchableOpacity onPress={props.onPress}>
					<MaterialCommunityIcons name="dots-vertical" style={styles.icon2} size={30} color="#b8b8aa" />
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={[styles.number, { color: props.bg == 'red' ? '#FFF' : '#000' }]}>{props.number}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	icon2: {
		marginLeft: 50,
	},
	container: {
		height: 200,
		width: 130,
		borderRadius: 30,
		padding: 15,
		marginLeft: 20,
		backgroundColor: 'white',
	},
	col: {
		flexDirection: 'row',
	},
	title: {
		marginTop: 90,
		color: '#b8b8aa',
		fontWeight: 'bold',
		fontSize: 12,
	},
	number: {
		fontWeight: 'bold',
		fontSize: 22,
	},
});
