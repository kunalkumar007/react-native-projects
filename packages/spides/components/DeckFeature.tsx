import { deckFeatureStyles, IDeck } from 'constants/types';
import React from 'react';
import { useState } from 'react';
import { ViewStyle } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default function DeckFeature(props: IDeck) {
	const [swipecard, setswipecard] = useState(false);
	const { RenderCard, RenderNoMoreCards } = props;
	return (
		<View style={styles.deckContainer}>
			<Swiper
				cards={props.data}
				renderCard={(card) => <RenderCard item={card} />}
				onSwiped={(cardIndex) => {
					console.log(cardIndex);
				}}
				onSwipedAll={() => setswipecard(true)}
				cardIndex={0}
				backgroundColor={'#4FD0E9'}
				stackSize={3}
			>
				{/* <Button
					onPress={() => {
						console.log('oulala');
					}}
					title="Press me"
				>
					You can press me
				</Button> */}
				{swipecard ? (
					<View style={styles.emptyCards}>
						<RenderNoMoreCards />
					</View>
				) : null}
			</Swiper>
		</View>
	);
}

const styles = StyleSheet.create({
	deckContainer: {
		marginTop: -50,
	},
	emptyCards: {
		width: 25,
	},
});
