import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';
import { Badge } from 'react-native-paper';
import BasketButton from '../../components/BasketButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types';

type basketScreenProp = StackNavigationProp<RootStackParamList, 'Basket'>;
type Props = {
	navigation: basketScreenProp;
};

export default function BasketTab({ navigation }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Ionicons
					name="arrow-back-outline"
					size={24}
					style={styles.backButton}
					onPress={() => {
						navigation.navigate('Search');
					}}
				/>
				<View style={styles.header}>
					<Text style={styles.headertxt}>My basket</Text>
				</View>
				<View style={styles.headerIcon}>
					<Ionicons name="basket-outline" size={24} style={styles.headerIconDetail}>
						<Badge size={24}>3</Badge>
					</Ionicons>
					<Ionicons name="ellipsis-vertical" size={24} />
				</View>
			</View>
			<View>
				<BasketButton title="Almond Flour" detail="500 gm" price="8.50 $" />
				<BasketButton title="Honey Floral" detail="400 gm" price="22.00 $" />
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.details}>subtotal</Text>
				<Text style={styles.details}>30.05$</Text>
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.details}>Delivery</Text>
				<Text style={styles.details}>Free</Text>
			</View>
			<View style={styles.detailsContainer}>
				<Text style={[styles.details, { color: 'black' }]}>Total</Text>
				<Text style={[styles.details, { color: 'black' }]}>30.50 $</Text>
			</View>
			<View style={styles.buttonContainer}>
				<View style={[styles.button1, styles.buttonDetail1]}>
					<Text style={[styles.headertxt, { color: colors.primary }]}>ADD PRODUCTS</Text>
				</View>
				<TouchableOpacity
					style={[styles.button1, styles.buttonDetail2]}
					onPress={() => {
						navigation.navigate('Delivery');
					}}
				>
					<Text style={[styles.headertxt, { color: 'white' }]}>CHECKOUT</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingHorizontal: 20,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 25,
	},
	header: {
		flex: 1,
	},
	headertxt: {
		fontFamily: 'Manrope_600SemiBold',
	},
	backButton: {
		flex: 1,
	},
	headerIcon: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerIconDetail: {
		marginRight: 20,
	},
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		paddingHorizontal: 10,
	},
	details: {
		color: '#a8a8a8',
		textTransform: 'capitalize',
		fontFamily: 'Manrope_600SemiBold',
	},
	buttonDetail1: {
		backgroundColor: '#fcdddd',
	},
	buttonDetail2: {
		backgroundColor: colors.primary,
	},
	button1: {
		padding: 20,
		marginTop: 20,
		borderRadius: 10,
		textAlign: 'center',
	},
	buttonContainer: {
		height: Dimensions.get('screen').width / 1.2,
		justifyContent: 'flex-end',
	},
});
