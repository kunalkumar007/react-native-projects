import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';
import filterApplyData from '../../constants/filterApplyData';
import FilterButton from '../../components/FilterButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types';

type chatScreenProp = StackNavigationProp<RootStackParamList, 'FilterApply'>;
type Props = {
	navigation: chatScreenProp;
};

export default function FilterApply({ navigation }: Props) {
	const [buttonClicked, setbuttonClicked] = useState(false);

	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.headerContainer}>
				<Ionicons
					name="close-outline"
					size={20}
					onPress={() => {
						navigation.navigate('Filter');
					}}
				/>
				<Text style={styles.header}>Filter</Text>
				<View style={styles.headerActionContainer}>
					<Text style={styles.headerAction}>Reset</Text>
					<Text style={styles.headerAction}>Apply</Text>
				</View>
			</View>
			<View>
				{filterApplyData.map((item, i) => {
					return (
						<View key={i}>
							<Text style={styles.categoryHeader}>{item.heading}</Text>
							<View style={styles.category}>
								{item.category.map((cat, i) => (
									<FilterButton
										onPress={() => setbuttonClicked(!buttonClicked)}
										key={i}
										clicked={buttonClicked}
									>
										{cat}
									</FilterButton>
								))}
							</View>
						</View>
					);
				})}
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
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		width: 45,
		flex: 1,
		fontSize: 20,
		fontFamily: 'Manrope_700Bold',
		paddingHorizontal: 20,
	},
	headerActionContainer: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	headerAction: {
		color: colors.primary,
		fontFamily: 'Manrope_700Bold',
		textTransform: 'uppercase',
	},
	categoryHeader: {
		fontFamily: 'Manrope_600SemiBold',
		paddingVertical: 20,
	},
	category: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	buttonContainer: {
		width: 70,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		marginRight: 10,
		marginBottom: 5,
	},
	buttonTxt: {
		fontFamily: 'Manrope_600SemiBold',
		textTransform: 'capitalize',
		fontSize: 12,
	},
});
