import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import Profile from './Profile';
import Messages from '../components/Messages';
import { IGithubUsers, RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';

type chatScreenProp = StackNavigationProp<RootStackParamList, 'Chat'>;
type Props = {
	navigation: chatScreenProp;
};

export default function Chat({ navigation }: Props) {
	const URL = `https://api.github.com/users`;
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const pan = useRef(new Animated.ValueXY()).current;
	const list = useRef(new Animated.ValueXY()).current;

	useEffect(function () {
		const getData = async () => {
			const resp = await fetch(URL);
			const data = await resp.json();
			setData(data);
			setLoading(false);
		};
		getData();

		Animated.timing(pan, {
			toValue: { x: -400, y: 0 },
			delay: 1000,
			useNativeDriver: false,
		}).start();

		Animated.timing(list, {
			toValue: { x: 0, y: -300 },
			delay: 2000,
			useNativeDriver: false,
		}).start();
	}, []);

	return (
		<LinearGradient colors={['#f26a50', '#f20042', '#f20045']} style={styles.gradient}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Chat</Text>
				<MaterialIcon name="add" color="#fff" size={30} />
			</View>
			<ScrollView horizontal style={styles.proContainer} showsHorizontalScrollIndicator={false}>
				{loading ? (
					<ActivityIndicator size="small" color="#fff" />
				) : (
					<Animated.View style={[pan.getLayout(), styles.card]}>
						{data.map((item: IGithubUsers, index) => (
							<Profile key={index} username={item.login} uri={item.avatar_url} />
						))}
					</Animated.View>
				)}
			</ScrollView>
			<View style={styles.dayContainer}>
				<View style={styles.col}>
					<Text style={styles.day}>Sunday</Text>
					<Entypo name="dots-three-horizontal" color="#000119" size={30} />
				</View>
			</View>
			<ScrollView>
				{loading ? (
					<ActivityIndicator size="large" color="#f20042" />
				) : (
					<Animated.View style={[list.getLayout(), styles.list]}>
						{data.map((item: IGithubUsers, index) => (
							<Messages
								key={item.id}
								username={item.login}
								uri={item.avatar_url}
								count={Math.floor(Math.random() * 3)}
								onPress={() => {
									navigation.navigate('Discussion', {
										itemId: item.id,
										itemName: item.login,
										itemPic: item.avatar_url,
									});
								}}
							/>
						))}
					</Animated.View>
				)}
			</ScrollView>
		</LinearGradient>
	);
}

const { width, height } = Dimensions.get('window');
console.log(width, height * 0.14);

const styles = StyleSheet.create({
	gradient: {
		// height: '100%',
		// position: 'absolute',
		// flex: 1,
		// left: 0,
		// right: 0,
		// top: 0,
		paddingHorizontal: 20,
		paddingTop: 30,
		// borderWidth: 2,
		// borderColor: Colors.AlertHighlightGreen,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	header: {
		fontFamily: 'Montserrat_800ExtraBold',
		color: '#fff',
		flex: 1,
		fontSize: 24,
	},
	proContainer: {
		marginRight: -20,
		alignSelf: 'center',
		// borderWidth: 2,
		// borderColor: Colors.BarelyGrayEdge,
		minHeight: 113,
		height: height * 0.14,
	},
	card: {
		marginLeft: 400,
		width: 400,
		flexDirection: 'row',
	},
	dayContainer: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: '#fff',
		// height: 500,
		height: '12%',
		// borderWidth: 2,
		// borderColor: Colors.BlueGreenLighter,
		marginHorizontal: -20,
	},
	col: {
		flexDirection: 'row',
		marginTop: 25,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	day: {
		fontFamily: 'Montserrat_800ExtraBold',
		color: '#000119',
		flex: 1,
		fontSize: 20,
	},
	list: {
		marginTop: 300,
	},
});
