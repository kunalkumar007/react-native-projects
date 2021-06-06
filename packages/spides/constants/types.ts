import { ViewStyle } from 'react-native';

export interface IRenderCard {
	id: number;
	title: string;
	number: string;
}

export interface IDeck {
	data: {
		id: number;
		title: string;
		number: string;
	}[];
	RenderCard: (props: { item: IRenderCard }) => JSX.Element;
	RenderNoMoreCards: () => JSX.Element;
	onSwipeRight?: () => void;
	onSwipeLeft?: () => void;
}

export interface ICard {
	icon: string;
	title: string;
	bg: string;
	number: string;
	onPress: () => void;
}

export interface deckFeatureStyles {
	deckContainer?: ViewStyle;
	emptyCards?: ViewStyle;
}
