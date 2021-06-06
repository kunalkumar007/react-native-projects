import React, { useState, useRef } from 'react';
import {
	View,
	UIManager,
	Animated,
	PanResponder,
	Dimensions,
	LayoutAnimation,
	StyleSheet,
	Text,
	Platform,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

export default function Deck(props: Deck) {
	const [panRespond, setpanRespond] = useState('');
	const [newPosition, setnewPosition] = useState<Animated.ValueXY | Animated.Value>(new Animated.ValueXY());
	const [index, setindex] = useState(0);

	const position = useRef(new Animated.ValueXY()).current;
	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (event, gesture) => {
			position.setValue({
				x: gesture.dx,
				y: gesture.dy,
			});
			setnewPosition(position);
		},
		onPanResponderRelease: (event, gesture) => {
			if (gesture.dx > SWIPE_THRESHOLD) {
				forceSwipe('right');
			} else if (gesture.dx < -SWIPE_THRESHOLD) {
				forceSwipe('left');
			} else resetPosition;
		},
	});

	if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	const forceSwipe = (direction: string) => {
		const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
		Animated.timing(newPosition, {
			useNativeDriver: false,
			toValue: { x, y: 0 },
			duration: SWIPE_OUT_DURATION,
		}).start(() => onSwipeComplete(direction));
	};

	const onSwipeComplete = (direction: string) => {
		const { onSwipeLeft, data, onSwipeRight } = props;
		const item = data[index];
		direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
	};

	return <View>{props.renderCard}</View>;
}

const styles = StyleSheet.create({});
