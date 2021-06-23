import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Menu from './Menu';
import Card from './Card';
import cardUri from '../../constants/cardUri';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types';

type searchScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;
type Props = {
	navigation: searchScreenProp;
};
export default function SearchTab({ navigation }: Props) {
	const [txtvalue, settxtvalue] = useState('');
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Search</Text>
			<TouchableOpacity
				style={styles.searchContainer}
				onPress={() => {
					navigation.navigate('Filter');
				}}
			>
				<Ionicons name="ios-search-outline" color="#A8A8A8" size={20} />
				<TextInput
					onChangeText={(t) => settxtvalue(t)}
					value={txtvalue}
					style={styles.txtInput}
					placeholder="Ingredients / Dishes"
				/>
				<Ionicons name="mic-sharp" color="#A8A8A8" size={20} />
			</TouchableOpacity>
			<Menu />
			<View style={styles.popularContainer}>
				<Text style={styles.poptxt}>Popular</Text>
				<Text style={styles.sealltxt}>See all</Text>
			</View>
			<ScrollView style={styles.cardView} horizontal showsHorizontalScrollIndicator={false}>
				{cardUri.map((item, i) => (
					<View style={styles.card} key={i}>
						<Card uri={item} />
					</View>
				))}
			</ScrollView>
			<Text style={styles.sealltxt}>
				All Recipes <Ionicons name="chevron-forward-outline" />
			</Text>
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
	header: {
		borderColor: 'green',
		paddingVertical: '2%',
		paddingBottom: '5%',
		fontSize: 20,
		fontFamily: 'Manrope_700Bold',
		color: colors.secondary,
	},
	searchContainer: {
		flexDirection: 'row',
		borderWidth: 2,
		borderColor: '#d3d3d3',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 8,
		paddingVertical: 10,
	},
	txtInput: {
		fontFamily: 'Manrope_300Light',
	},
	popularContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
	poptxt: {
		fontSize: 20,
		fontFamily: 'Manrope_700Bold',
	},
	sealltxt: {
		color: colors.primary,
	},
	cardView: {
		marginVertical: 45,
	},
	card: {
		marginRight: 25,
	},
});
