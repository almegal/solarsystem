import React, {
	useState,
} from 'react';
import StarsLayer from './StarsLayer';
import { useStars } from './hooks/useStars';

/*
Stars container which have:
- 1 state of amount stars
- 2 size of screen
- 3 Star component
StarsLayer have by default state frequency=100
// WARNING: not recomend set frequency more than 1500;
*/

const Stars = () => {
	// set state of amount stars
	// set state of view screen size
	const [size, ] = useState(3);
	const [animate, ] = useState(true);
	const [frequency, ] = useState(40);
	const [windowView, ] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	// useStars() -> return array with random position, size;
	const stars = useStars({ frequency, view: windowView, maxSize: size });
	// render
	return (
		<div className="stars-component">
			<StarsLayer
				starsArray={stars}
				animate={animate}
				{...windowView}
			/>
		</div>
	);
};

export default Stars;
