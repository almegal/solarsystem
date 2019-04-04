import React from 'react';
// UI for star
import style from './style.css';
// just return random value from (min, max) args
import { randRange } from '../../utils/random';
/*
StarsLayer component which just take a props sush as: frequency, width, height
from Stars container and return amount of stars
*/

// IDEA: rewrite code to canvas.
const StarsLayer = (props) => {
	// Destructuring props
	const {
		starsArray, width, height,
	} = props;
	// render
	return (
		<div className="stars-layer">
			<svg
				viewBox={`0 0 ${width} ${height}`}
				xmlns="http://www.w3.org/2000/svg"
				style={{ position: 'absolute', zIndex: -1 }}
				preserveAspectRatio="none"
			>
				{starsArray.map((_props, i) => (
					<circle
						className="stars"
						key={i}
						{..._props}
						fill="#dbdbdb"
						style={{
							animation:`twinkle ${randRange(1, 10)}s ease-in-out infinite`,
						}}
					/>
				))}
			</svg>
		</div>
	);
};

export default StarsLayer;
