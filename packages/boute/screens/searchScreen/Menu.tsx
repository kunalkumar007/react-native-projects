import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import menuData from '../../constants/menuData';
export default function Menu() {
	return (
		<View style={styles.screen}>
			{menuData.map((item, i) => (
				<View style={styles.iconContainer} key={i}>
					<Image source={require(`../../assets/images/menu-${i + 1}.png`)} style={styles.image} />
					<Text style={styles.menuName}>{item.name}</Text>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	iconContainer: {
		fontFamily: 'Manrope_400Regular',
		marginVertical: '5%',
		paddingHorizontal: '5%',
		textAlign: 'center',
	},
	menuName: {
		fontFamily: 'Manrope_500Medium',
	},
	image: {
		width: 45,
		height: 45,
	},
});
