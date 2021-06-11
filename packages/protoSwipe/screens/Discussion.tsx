import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import LastWatch from '../components/LastWatch';
import Received from '../components/Received';
import Sent from '../components/Sent';
import Data from '../Dummy/Data.json';
import Input from '../components/Input';
import Colors from '../components/Colors';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type DiscussionScreenRouteProp = RouteProp<RootStackParamList, 'Discussion'>;
type DiscussionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Discussion'>;

type Props = {
	route: DiscussionScreenRouteProp;
	navigation: DiscussionScreenNavigationProp;
};

export default function Discussion({ route, navigation }: Props) {
	// const { itemName, itemPic } = route.params;

	const params = {
		itemId: 1,
		itemName: 'mojombo',
		itemPic: 'https://avatars.githubusercontent.com/u/1?v=4',
	};
	const { itemPic, itemName } = params;

	const [inputMessage, setMessage] = useState('');
	const send = () => {
		Data.push({ id: inputMessage, message: inputMessage });
		setMessage('');
	};

	var txt = [];
	for (var i = 5; i < Data.length; i++) {
		txt.push(<Sent key={Data[i].id} message={Data[i].message} />);
	}

	return (
		<LinearGradient colors={['#f26a50', '#f26a50', '#f20045']} style={styles.container}>
			<View style={styles.main}>
				<View style={styles.headerContainer}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<AntDesign name="left" color="#000119" size={30} />
					</TouchableOpacity>
					<Text style={styles.username}>{itemName}</Text>
					<Image source={{ uri: itemPic }} style={styles.avatar} />
				</View>
				<ScrollView>
					<LastWatch checkedOn="Yesterday" />
					<Received image={itemPic} message={Data[0].message} />
					<Sent message={Data[1].message} />
					<Received image={itemPic} message={Data[2].message} />
					<Sent message={Data[3].message} />
					<LastWatch checkedOn="Today" />
					<Received image={itemPic} message={Data[4].message} />
				</ScrollView>
				<Input
					inputMessage={inputMessage}
					setMessage={(inputMessage) => setMessage(inputMessage)}
					onSendPress={send}
				/>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		height: '88%',
		paddingTop: 40,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	username: {
		color: '#000119',
		fontFamily: 'Montserrat_700Bold',
		fontSize: 20,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
});
