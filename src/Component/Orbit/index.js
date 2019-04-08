import React from 'react';
import * as icon from '../../img/index';
import Orbit from './Orbit';

const planetArray = [
	{
  		r: 310,
		strokeColor: 'rgba(235, 156, 65, 0.82)',
		speedRotationArroundOwnAxis: 8000,
  		speedRotationArroundCentr: 1500,
  		id: 'Mars',
  		size: 32,
  		img: icon.mars,
  		cx: window.innerWidth / 2,
  		cy: window.innerHeight / 2,
  	},
	{
		r: 0,
		strokeColor: 'yellow',
		speedRotationArroundOwnAxis: 50000,
		speedRotationArroundCentr: 1000,
		id: 'Sun',
		size: 120,
		img: icon.sun,
		cx: window.innerWidth / 2,
		cy: window.innerHeight / 2,
	},
	{
		r: 240,
		strokeColor: 'rgba(84, 165, 240, 0.61)',
		speedRotationArroundOwnAxis: 6000,
		speedRotationArroundCentr: 1000,
		id: 'Earth',
		size: 36,
		img: icon.worldwide,
		cx: window.innerWidth / 2,
		cy: window.innerHeight / 2,
	},
  	{
  		r: 165,
		strokeColor: 'rgba(238, 57, 0, 0.78)',
		speedRotationArroundOwnAxis: 3600,
  		speedRotationArroundCentr: 400,
  		id: 'Venus',
  		size: 25,
  		img: icon.venus,
  		cx: window.innerWidth / 2,
  		cy: window.innerHeight / 2,
  	},
	{
		r: 120,
		strokeColor: 'rgba(108, 107, 107, 1)',
		speedRotationArroundOwnAxis: 1700,
		speedRotationArroundCentr: 100,
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
