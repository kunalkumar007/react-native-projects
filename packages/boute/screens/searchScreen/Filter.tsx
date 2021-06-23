import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import cardUri from '../../constants/cardUri';
import Card from './Card';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootStackParamList } from '../../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import colors from '../../constants/colors';

type chatScreenProp = StackNavigationProp<RootStackParamList, 'Filter'>;
type Props = {
	navigation: chatScreenProp;
};

export default function Filter({ navigation }: Props) {
	const [txtvalue, settxtvalue] = useState('');
	const [valueEntered, setvalueEntered] = useState(false);
	useEffect(() => {
		if (txtvalue === '') {
			setvalueEntered(false);
		} else {
			setvalueEntered(true);
		}
	}, [txtvalue]);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.searchContainer} onPress={() => {}}>
					<Ionicons
						name={valueEntered ? 'arrow-back-outline' : 'ios-search-outline'}
						color="#A8A8A8"
						size={20}
					/>
					<TextInput
						onChangeText={(t) => settxtvalue(t)}
						value={txtvalue}
						style={styles.txtInput}
						placeholder="Ingredients / Dishes"
					/>
					<Ionicons name={valueEntered ? 'close-outline' : 'mic-sharp'} color="#A8A8A8" size={20} />
				</TouchableOpacity>
				<Ionicons
					name="filter-outline"
					size={20}
					color={colors.primary}
					onPress={() => {
						navigation.navigate('FilterApply');
					}}
				/>
			</View>
			<ScrollView style={styles.filterContainer}>
				<View style={styles.cardContainer}>
					{cardUri.map((item, i) => (
						<View style={styles.card} key={i}>
							<Card uri={item} />
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	filterContainer: {
		paddingHorizontal: 10,
	},
	cardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	card: {
		padding: 13,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginVertical: 20,
	},
	searchContainer: {
		flexDirection: 'row',
		borderWidth: 2,
		borderColor: '#d3d3d3',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	txtInput: {
		fontFamily: 'Manrope_300Light',
	},
});
