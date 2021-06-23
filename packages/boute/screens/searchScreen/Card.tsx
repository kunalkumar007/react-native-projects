import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ViewStyle, StyleProp } from 'react-native';
import colors from '../../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface ICard {
	uri: string;
}

export default function Card({ uri }: ICard) {
	return (
		<View style={styles.container}>
			<ImageBackground source={{ uri: uri }} style={styles.cardContainer}>
				<View style={styles.iconContainer}>
					<Ionicons name="heart-outline" size={20} />
				</View>
			</ImageBackground>
			<View style={styles.nameContainer}>
				<Text style={styles.name}>Carrot Vegan Balls</Text>
			</View>
			<View style={styles.detailContainer}>
				<Text style={styles.detail}>35 min</Text>
				<View style={styles.rtingdetail}>
					<Ionicons name="star" color={colors.primary} size={10} />
					<Text style={styles.detail}> 4.5</Text>
				</View>
			</View>
		</View>
	);
}

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {},
	cardContainer: {
		backgroundColor: colors.background,
		height: width / 1.8,
		width: width / 2.5,
		borderRadius: 10,
	},
	iconContainer: {
		alignSelf: 'flex-end',
		width: width / 8,
		height: width / 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	nameContainer: {
		// borderWidth: 1,
		// borderColor: 'tomato',
		width: width / 2.5,
		marginVertical: 10,
	},
	name: {
		fontFamily: 'Manrope_400Regular',
	},
	detailContainer: {
		// borderWidth: 1,
		// borderColor: 'tomato',
		paddingHorizontal: 20,
		width: width / 2.5,
		flexDirection: 'row',
		fontFamily: 'Manrope_300Light',
		justifyContent: 'space-between',
	},
	rtingdetail: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	detail: {
		color: '#a8a8a8',
		fontFamily: 'Manrope_300Light',
		fontSize: 10,
	},
});
