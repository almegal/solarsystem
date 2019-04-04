import { useState } from 'react';
// just return random value from (min, max) args
import { randRange } from '../../../utils/random';
//
// helper function takes 3 args and return array with random value
const generateStars = (amount, view, maxSize) => Array.from({ length: amount }, () => (
	{
		cx: randRange(0, view.width),
		cy: randRange(0, view.height),
		r: randRange(0.05, maxSize),
	}
));
// useStars it a hook which take args:
// - 1 amount of a star
// -2 view of the screen
// -3 maxSize of the star
// and return array with props of stars
const useStars = ({ frequency, view, maxSize }) => {
	const arr = generateStars(frequency, view, maxSize);
	// set state
	const [stars, ] = useState(arr);
	return stars;
};
//
export { useStars };
