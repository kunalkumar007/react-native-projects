import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import DeliveryButton from '../../components/DeliveryButton';
import colors from '../../constants/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types';

type deliveryScreenProp = StackNavigationProp<RootStackParamList, 'Delivery'>;
type Props = {
	navigation: deliveryScreenProp;
};

export default function Delivery({ navigation }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Ionicons
					name="arrow-back-outline"
					size={20}
					onPress={() => {
						navigation.navigate('Basket');
					}}
				/>
				<Text style={styles.header}>Delivery Registration</Text>
			</View>
			<View style={styles.contentContainer}>
				<DeliveryButton
					subtitle="Delivery Address"
					title="Watson,Newyork, 25"
					color={colors.primary}
					icon="checkmark-circle"
				/>
				<DeliveryButton subtitle="Contact Number" title="+380 94 924 00 00" />
				<DeliveryButton subtitle="Pick date" title="20 october, tue" />
				<DeliveryButton subtitle="pick time" title="10:00 - 11:00" />
				<DeliveryButton subtitle="order comment" title="Pack in Paper bags" />
				<DeliveryButton subtitle="payment method" title="online card" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	header: {
		fontFamily: 'Manrope_600SemiBold',
		paddingLeft: 20,
	},
	contentContainer: {},
});
