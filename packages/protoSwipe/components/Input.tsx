import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';

type Props = {
	inputMessage: string;
	setMessage: (inputMessage: string) => void;
	onSendPress: () => void;
};

export default function Input({ inputMessage, onSendPress, setMessage }: Props) {
	return (
		<View style={styles.container}>
			<Entypo name="emoji-happy" color="#fff" size={20} />
			<TextInput
				placeholder="Enter Some Text Here . . ."
				value={inputMessage}
				onChangeText={setMessage}
				style={styles.input}
			/>
			<TouchableOpacity onPress={onSendPress}>
				<Ionicons name="ios-send" color="#fff" size={20} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(0,0,0,0.2)',
		width: '85%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 30,
		bottom: 10,
	},
	input: {
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 11,
		color: '#fff',
		paddingHorizontal: 10,
		flex: 1,
	},
});
