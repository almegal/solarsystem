import React from 'react';
import * as icon from '../../img/index';
import Orbit from './Orbit';

const planetArray = [
	{
  		r: 290,
  		speedRotationArroundCentr: 1500,
  		id: 'Mars',
  		size: 40,
  		img: icon.mars,
  		cx: window.innerWidth / 2,
  		cy: window.innerHeight / 2,
  	},
	{
		r: 0,
		speedRotationArroundCentr: 1000,
		id: 'Sun',
		size: 140,
		img: icon.sun,
		cx: window.innerWidth / 2,
		cy: window.innerHeight / 2,
	},
	{
		r: 220,
		speedRotationArroundCentr: 1000,
		id: 'Earth',
		size: 60,
		img: icon.worldwide,
		cx: window.innerWidth / 2,
		cy: window.innerHeight / 2,
	},
  	{
  		r: 140,
  		speedRotationArroundCentr: 400,
  		id: 'Venus',
  		size: 30,
  		img: icon.venus,
  		cx: window.innerWidth / 2,
  		cy: window.innerHeight / 2,
  	},
	{
		r: 100,
		speedRotationArroundCentr: 100,
		speedRotationArroundOwnAxis: 100,
		id: 'Mercury',
		size: 20,
		img: icon.mercury,
		cx: window.innerWidth / 2,
		cy: window.innerHeight / 2,
	},
];
const SolarSystem = () => {
	return (
		<div className='solar-system'>
			<svg
				width={`${window.innerWidth}`}
				height={`${window.innerHeight}`}
				viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
				xmlns="http://www.w3.org/2000/svg"
			>
				{planetArray.map((props, i) => <Orbit key={i} {...props} />)}
			</svg>
		</div>
	);
};

export default SolarSystem;
