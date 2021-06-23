import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IFilterButtonApply } from '../constants/types';
import colors from '../constants/colors';
const FilterButton = (props: IFilterButtonApply) => {
	const buttonContainerStyle = [
		styles.buttonContainer,
		props.clicked ? { backgroundColor: colors.primary } : { backgroundColor: colors.background },
	];
	const buttonTextStyle = [styles.buttonTxt, props.clicked ? { color: 'white' } : { color: 'black' }];
	return (
		<TouchableOpacity style={buttonContainerStyle} onPress={props.onPress}>
			<Text style={buttonTextStyle}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
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

export default FilterButton;
