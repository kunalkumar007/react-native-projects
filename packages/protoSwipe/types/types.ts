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
