import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
	title: string;
	detail: string;
	price: string;
};

export default function BasketButton(props: Props) {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://images.pexels.com/photos/94443/pexels-photo-94443.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
				}}
				style={styles.image}
			/>
			<View style={styles.contentContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{props.title}</Text>
					<Ionicons name="ellipsis-vertical" />
				</View>
				<Text style={styles.detail}>{props.detail}</Text>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{props.price}</Text>
					<View style={styles.signContainer}>
						<Text style={styles.sign}>-</Text>
						<Text style={styles.number}>1</Text>
						<Text style={styles.sign}>+</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		height: Dimensions.get('screen').width / 4,
		borderRadius: 10,
		padding: 10,
		flexDirection: 'row',
		marginTop: 20,
	},
	image: {
		width: Dimensions.get('screen').width / 4,
		height: Dimensions.get('screen').width / 5,
	},
	contentContainer: {
		flex: 1,
		marginLeft: 20,
	},
	title: {
		fontFamily: 'Manrope_600SemiBold',
		textTransform: 'capitalize',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5,
	},
	detail: {
		color: '#a8a8a8',
		fontFamily: 'Manrope_500Medium',
	},
	sign: {
		color: colors.primary,
		fontFamily: 'Manrope_500Medium',
		fontSize: 20,
	},
	signContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	number: {
		paddingHorizontal: 10,
		fontFamily: 'Manrope_500Medium',
		fontSize: 15,
	},
});
