import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Chart from '../components/Chart';
export default function Detail() {
	return (
		<View style={styles.page}>
			<View style={styles.headContainer}>
				<View style={styles.humContainer}>
					<Icon name="md-remove" size={26} />
					<Icon name="md-remove" size={26} style={styles.hum} />
				</View>
				<View style={styles.profileContainer}>
					<Image
						source={{
							uri: 'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg',
						}}
						style={styles.profile}
					/>
				</View>
			</View>
			<View style={styles.optionCard}>
				<View style={styles.optionCol}>
					<Text style={styles.textLinear}>LINEAR</Text>
				</View>
				<Text style={styles.textLogarithmic}>LOGARTHIMIC</Text>
			</View>
			<View style={styles.locationContainer}>
				<Text style={styles.textGlobal}>GLOBAL</Text>
				<Text style={styles.textRussia}>RUSSIA</Text>
				<View style={styles.reloadContainer}>
					<Icon name="md-refresh" size={24} color="red" />
				</View>
			</View>
			<Chart />
			<View style={styles.bottomCard}>
				<View style={styles.bottomCol}>
					<Text style={styles.textSymptoms}>SYMPTOMS</Text>
					<View style={styles.infoContainer}>
						<Text style={{ color: '#FFF' }}>i</Text>
					</View>
				</View>

				<View style={styles.button}>
					<Text style={styles.btnText}>See more graphs</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: '#ffff',
		flex: 1,
	},
	headContainer: {
		marginHorizontal: 20,
		flexDirection: 'row',
		marginTop: 40,
	},
	humContainer: {
		width: '50%',
	},
	hum: {
		marginTop: -20,
		marginLeft: 5,
	},
	profileContainer: {
		width: '50%',
		alignItems: 'flex-end',
	},
	profile: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	optionCard: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 110,
	},
	optionCol: {
		borderWidth: 2,
		backgroundColor: '#000',
		paddingVertical: 2,
		paddingHorizontal: 5,
		borderRadius: 2,
	},
	textLinear: {
		color: '#fff',
		fontSize: 12,
		fontWeight: 'bold',
	},
	textLogarithmic: {
		color: '#b8b8aa',
		fontWeight: 'bold',
		fontSize: 12,
		marginLeft: 15,
	},
	locationContainer: {
		borderWidth: 2,
		alignSelf: 'center',
		flexDirection: 'row',
		paddingHorizontal: 30,
		marginTop: 40,
		alignItems: 'center',
	},
	textGlobal: {
		fontWeight: 'bold',
		fontSize: 16,
		color: 'red',
	},
	textRussia: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#6a706e',
		paddingHorizontal: 30,
	},
	reloadContainer: {
		backgroundColor: '#fff',
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 50,
		elevation: 3,
	},
	bottomCard: {
		backgroundColor: '#1c2732',
		height: 220,
		marginTop: 20,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	bottomCol: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		marginTop: 20,
	},
	textSymptoms: {
		color: '#fff',
		fontSize: 12,
		fontWeight: 'bold',
	},
	infoContainer: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10,
	},
	button: {
		borderRadius: 15,
		borderColor: 'red',
		borderWidth: 1,
		marginHorizontal: 30,
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignItems: 'center',
		marginTop: 50,
		marginBottom: 5,
	},
	btnText: {
		color: 'red',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
