import React, { useState, useEffect } from 'react';
import {useSpring, animated as a} from 'react-spring';

const inter = (x,y) => {
	return `translate(${x}px, ${y}px)`;
};

const Planet = props => {
	//
	const { arr, id, size, speed, setOpen, open } = props;
	//
	const [restart, setRestart] = useState(false);
	//
	const [{xy} , setXY] = useSpring(() => ({
		from: arr[0],
		config: {
			duration: speed //velocity rotation around centr
		}
	}));
	const onRestFunc = () => setRestart(!restart);
	useEffect(() => {
		setXY({
			native: true,
			to: arr,
			onRest: onRestFunc
		});

	}, [ restart ]);
	return (
		<a.circle
			style={{
				transform: xy.interpolate((x,y) => inter(x,y))
			}}
			onClick={() => {
				setOpen(!open);
			}}
			r={size / 2}
			fill={`url(#${id}-image)`}
		/>
	);
};
export default Planet;
