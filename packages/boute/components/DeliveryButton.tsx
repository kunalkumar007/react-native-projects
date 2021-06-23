import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../constants/colors';
type Props = {
	subtitle: string;
	title: string;
	icon?: string;
	color?: string;
};

export default function DeliveryButton(props: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>{props.subtitle}</Text>
				</View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</View>
			{props.icon ? (
				<View>
					<Ionicons name={props.icon} size={20} color={props.color} />
				</View>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 10,
	},
	leftContainer: {},
	subtitleContainer: {
		paddingVertical: 10,
	},
	subtitle: {
		fontFamily: 'Manrope_400Regular',
		textTransform: 'capitalize',
	},
	titleContainer: {},
	title: {
		fontFamily: 'Manrope_700Bold',
		textTransform: 'capitalize',
	},
});
