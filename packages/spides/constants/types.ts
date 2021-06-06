interface RenderCard {
	id: string;
	title: string;
	number: number;
}

interface Deck {
	data: {
		id: number;
		title: string;
		number: string;
	}[];
	renderCard: (props: { item: RenderCard }) => JSX.Element;
	renderNoMoreCards: () => JSX.Element;
}
