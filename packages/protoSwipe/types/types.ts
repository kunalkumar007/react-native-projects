import { ImageSourcePropType } from 'react-native';

export interface IProfile {
	username: string;
	uri: string;
}

export interface IGithubUsers {
	id: number;
	login: string;
	avatar_url: string;
}

export interface IMessages {
	username: string;
	uri: string;
	onPress: () => void;
	count: number;
}

export type RootStackParamList = {
	Chat: undefined;
	Discussion: { itemId: number; itemName: string; itemPic: string };
};
