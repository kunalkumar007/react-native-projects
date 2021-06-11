import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
type Props = {
	inputMessage: string;
	setMessage: () => void;
	onSendPress: () => void;
};
export default function Input({
	inputMessage,
	onSendPress,
	setMessage,
}: {
	inputMessage: string;
	setMessage: () => void;
	onSendPress: () => void;
}) {
	return (
		<View>
			<TextInput />
		</View>
	);
}

const styles = StyleSheet.create({});
