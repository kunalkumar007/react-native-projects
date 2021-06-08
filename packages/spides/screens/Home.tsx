import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import Buttons from '../components/Button';
import Card from '../components/Card';
import DeckFeature from '../components/DeckFeature';
import DATA from '../data';
import { IRenderCard, RootStackParamList } from 'constants/types';
import { StackNavigationProp } from '@react-navigation/stack';

type IrenderCardProps = {
	item: IRenderCard;
};

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
	navigation: homeScreenProp;
};

const renderCard = ({ item }: IrenderCardProps) => {
	return (
		<View key={item.id} style={styles.cardContainer}>
			<View style={styles.card}>
				<View>
					<Text style={styles.title}>{item.title}</Text>
					<Icon name="ios-remove" size={40} color="red" style={styles.renderCardIcon} />
					<Text style={styles.number}>{item.number}</Text>
				</View>
				<View style={styles.renderCardOptions}>
					<Icon name="md-options" size={24} color="#fff" />
					<Text style={styles.textCovid}>COVID-19 </Text>
				</View>
			</View>
		</View>
	);
};

const renderNoMoreCards = () => {
	return (
		<View>
			<Text style={styles.noCard}> NO MORE CARDS HERE</Text>
			<Button color="#03a9f4" title="Get More!" onPress={() => {}} />
		</View>
	);
};

export default function Home({ navigation }: Props) {
	return (
		<View style={styles.container}>
			<ImageBackground
				// source={{
				//   uri: 'https://cdn.pixabay.com/photo/2015/12/03/08/50/paper-1074131_960_720.jpg',
				// }}
				source={require('../assets/unnamed.jpg')}
				style={styles.map}
			>
				<View style={styles.col}>
					<View style={styles.colView}>
						<Icon name="md-remove" color="#fff" size={26} />
						<Icon name="md-remove" color="#fff" size={26} style={styles.minusIcon} />
					</View>
					<View style={styles.avatarContainer}>
						<Image
							source={{
								uri: 'https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg',
							}}
							style={styles.avatar}
						/>
					</View>
				</View>
				<Text style={styles.textDash}>CORONA DASH</Text>
				<View style={styles.colContainer}>
					<Text style={styles.textGlobal}>GLOBAL</Text>
					<Text style={styles.textRussia}>RUSSIA</Text>
					<View style={styles.reloadContainer}>
						<Icon name="md-refresh" size={24} color="red" />
					</View>
				</View>
			</ImageBackground>
			<DeckFeature data={DATA} RenderCard={renderCard} RenderNoMoreCards={renderNoMoreCards} />
			<ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false} horizontal>
				<Card
					icon="md-pulse"
					title="TOTAL CASES"
					bg="red"
					number="113 329"
					onPress={() => {
						navigation.navigate('Detail');
					}}
				/>
				<Card icon="ios-git-network" title="RECOVERED" bg="#fff" number="442 329" onPress={() => {}} />
				<Card icon="ios-heart-dislike" title="DEATH CASES" bg="#fff" number="113 329" onPress={() => {}} />
			</ScrollView>
			<View style={styles.buttonView}>
				<Buttons name="ASYMPTOMATIC" number="1 778" />
				<Buttons name="SYMPTOMATIC" number="1 578" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1c2732',
	},
	cardContainer: {
		height: 150,
		width: 320,
		alignSelf: 'center',
		backgroundColor: '#6a706e',
		borderRadius: 30,
	},
	card: {
		height: 150,
		width: 260,
		paddingTop: 20,
		paddingHorizontal: 30,
		backgroundColor: '#2b3240',
		borderRadius: 30,
		flexDirection: 'row',
	},
	title: {
		color: '#6a706e',
		width: 100,
		fontWeight: 'bold',
	},
	number: {
		color: '#fff',
		width: 100,
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: -10,
	},
	textCovid: {
		transform: [{ rotate: '-90deg' }],
		color: '#3a4b4f',
		fontSize: 14,
		width: 90,
		marginLeft: -35,
		fontWeight: 'bold',
	},
	noCard: {
		marginBottom: 10,
		color: '#fff',
		alignSelf: 'center',
	},
	map: {
		height: 200,
		paddingTop: 25,
		paddingHorizontal: 20,
		marginBottom: 15,
	},
	avatarContainer: {
		width: '50%',
		alignItems: 'flex-end',
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	textDash: {
		color: '#FFF',
		fontSize: 20,
		alignSelf: 'center',
		marginTop: 15,
		fontWeight: 'bold',
	},
	colContainer: {
		flexDirection: 'row',
		paddingHorizontal: 30,
		marginTop: 40,
		alignItems: 'center',
	},
	col: {
		flexDirection: 'row',
	},
	minusIcon: {
		marginTop: -20,
		marginLeft: 5,
	},
	textGlobal: {
		fontWeight: 'bold',
		fontSize: 16,
		color: 'red',
	},
	textRussia: {
		fontWeight: 'bold',
		fontSize: 16,
		paddingHorizontal: 30,
		color: '#6a706e',
	},
	reloadContainer: {
		backgroundColor: '#FFF',
		elevation: 2,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 50,
	},
	renderCardIcon: {
		marginTop: 25,
	},
	renderCardOptions: {
		marginLeft: 150,
	},
	colView: {
		width: '50%',
	},
	scrollView: {
		marginTop: 250,
	},
	buttonView: {
		marginBottom: 34,
	},
});
