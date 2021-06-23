import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';
import Card from '../searchScreen/Card';
import cardUri from '../../constants/cardUri';
export default function ProfileTab() {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Profile</Text>
				<Ionicons name="settings-outline" size={20} color={colors.primary} />
			</View>
			<View style={styles.profileView}>
				<Image
					source={{
						uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					}}
					style={styles.image}
				/>
				<View style={styles.profileDetails}>
					<Text style={styles.name}>Alyona Wagner</Text>
					<Ionicons name="pencil" size={20} color={colors.primary} />
				</View>
				<Text style={styles.status}>chef-status</Text>
			</View>
			<View style={styles.tabContainer}>
				<Text style={[styles.tab1, styles.tabs]}>my recipes</Text>
				<Text style={styles.tabs}>my bonuses</Text>
			</View>
			<ScrollView>
				<View style={styles.cardContainer}>
					{cardUri.map((item, i) => (
						<View style={styles.card} key={i}>
							<Card uri={item} />
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	header: {
		fontFamily: 'Manrope_700Bold',
		fontSize: 18,
	},
	profileView: {
		alignItems: 'center',
		marginTop: 70,
	},
	profileDetails: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 100,
		// alignSelf: 'center',
	},
	name: {
		fontFamily: 'Manrope_700Bold',
	},
	status: {
		fontFamily: 'Manrope_400Regular',
		color: '#a8a8a8',
	},
	tabContainer: {
		flexDirection: 'row',
		paddingVertical: 10,
		marginVertical: 10,
	},
	tab1: {
		borderBottomWidth: 2,
		borderBottomColor: colors.primary,
		paddingBottom: 10,
	},
	tabs: {
		textTransform: 'uppercase',
		fontFamily: 'Manrope_600SemiBold',
		flex: 1,
		textAlign: 'center',
	},
	cardContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	card: {
		// borderWidth: 2,
		marginRight: 10,
		marginBottom: 10,
	},
});
