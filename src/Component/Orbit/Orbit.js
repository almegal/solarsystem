import React, { useRef, useState } from 'react';
import { usePosition } from './hooks/usePosition';
//
import PropTypes from 'prop-types';
//
import Planet from './Planet';


const Orbit = (props) => {
	//
	const {r, id, size, img, cx, cy, } = props;
	const [showOrbit, setOrbit] = useState(false);
	//
	const [radius, ] = useState(r);
	//
	//
	const refs = useRef();
	//
	const arr = usePosition(refs, radius);
	//
	return (
		<g>
			<circle
				cx={cx}
				cy={cy}
				ref={refs}
				id={`${id}-orbit`}
				fill='none'
				strokeWidth={showOrbit ? 0.3 : 0}
				stroke='white'
				r={radius}
			/>
			<defs>
				<filter id={`${id}-blur`}>
					<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
				</filter>
			</defs>
			{arr === null ?
				 '' :
				 <Planet
				   arr={arr}
					 setOrbit={setOrbit}
					 showOrbit={showOrbit}
					 {...props}/>}
			<defs>
				<pattern id={`${id}-image`} patternUnits="objectBoundingBox" height="1" width="1">
					<image
						width={size}
						height={size}
						xlinkHref={`http://localhost:3000${img}`}
					/>
				</pattern>
			</defs>
		</g>
	);
};
Orbit.propTypes = {
	id: PropTypes.string.isRequired,
	// image url should have .svg
	// once
	img: ({ img }) => {
		const req = /\.svg/ig;
		if (img.match(req) === null || img.match(req).length !== 1) {
			return new Error(
				`Url image not correct: ${img}`,
			);
		}
	},

	size: PropTypes.number.isRequired,
	//	rotationVelocityAroundOwnAxis: PropTypes.number,
	//	rotationVelocityAroundCentr: PropTypes.number,
	//distanceFromCenter: PropTypes.number,
	//distanceFromCurrentPlanet: PropTypes.number,
	//sputniks: PropTypes.array,

};
// set props default
Orbit.defaultProps = {
	strokeColor: 'rgba(241, 241, 241, 0.88)',
	rotationVelocityAroundOwnAxis: 1,
	rotationVelocityAroundCentr: 1,
	distanceFromCenter: 0,
	distanceFromCurrentPlanet: 0,
	sputniks: [],
};


export default Orbit;
