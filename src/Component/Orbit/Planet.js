import React, { useState, useEffect } from 'react';
import {useSpring, animated as a, interpolate} from 'react-spring';
import style from './style.css';


const inter = ( xy, r) => {
	return `translate(${xy[0]}px, ${xy[1]}px) rotate(${r}deg)`;
};

const onRestFunc = (setRestart) => restart => setRestart(!restart);

const Planet = props => {
	//
	const { arr, id, size, speed, speedOwnAxis, setOpen, open } = props;
	//
	const [init, setInit] = useState(true);
	//
	const [{r}, setR] = useSpring(() => ({
		from: {
			r: 0
		}
	}));
	useEffect(() => {
		if(init) {
			setInit(!init);
			setR({
				to: async (next) => {
					while (init) {
						await next({
							r: -360
						});
					}
				},
				reset:true,
				config: {
					duration: speedOwnAxis
				}
			});
			return;
		}
	}, []);
	//
	const [restart, setRestart] = useState(false);
	//
	const [{xy} , setXY] = useSpring(() => ({
		from: arr[0],
		config: {
			duration: speed //velocity rotation around centr
		}
	}));

	useEffect(() => {
		if(arr.length > 1 ) {
			setXY({
				native: true,
				to: arr,
				onRest: () => {
					onRestFunc(setRestart)(restart);
				}
			});
		}
	}, [ restart ]);

	return (
		<a.circle
			className='planet'
			style={{
				transform: interpolate([xy, r], inter)
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
