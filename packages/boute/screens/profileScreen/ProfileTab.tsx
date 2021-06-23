import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';

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
				/>
				<View style={styles.profileDetails}>
					<Text style={styles.name}>Alyona Wagner</Text>
					<Ionicons name="pencil" size={20} color={colors.primary} />
				</View>
				<Text style={styles.status}>chef-status</Text>
			</View>
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
});
