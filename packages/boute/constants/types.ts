export type RootStackParamList = {
	Home: undefined;
	Filter: undefined;
	Search: undefined;
	FilterApply: undefined;
	Delivery: undefined;
	Basket: undefined;
	ProfileEdit: undefined;
	Profile: undefined;
};

export interface IFilterButtonApply {
	children: string | number;
	clicked: boolean;
	onPress: () => void;
}
