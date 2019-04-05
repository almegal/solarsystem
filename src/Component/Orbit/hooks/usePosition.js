import { useState, useEffect } from 'react';

const usePosition = (refs, radius) => {
	const [position, setPosition] = useState(radius === 0 ? [{xy: [window.innerWidth / 2, window.innerHeight / 2]}] :null);
	useEffect(() => {
		if ( position === null ) {
			const pathLength = Math.floor( refs.current.getTotalLength() );
			const arr = collectToArrayCoords(refs, pathLength, []); // return array [x,y]
			setPosition(arr);
			return;
		}
	}, [radius]);
	return position;
};

const collectToArrayCoords = (refs, pathLength, array, prcnt = 100) => {
	if(prcnt > 0) {
		const xy = getXY(refs, pathLength, prcnt);
		array.push(xy);
		prcnt = prcnt - 1;
		return collectToArrayCoords(refs, pathLength, array, prcnt);
	} else {
		return array;
	}
};

const getXY = (refs, pathLength, prcnt) => {
	prcnt = (prcnt * pathLength) / 100;
	// Get x and y values at a certain point in the line
	const pt = refs.current.getPointAtLength(prcnt);
	pt.x = Math.round(pt.x);
	pt.y = Math.round(pt.y);
	return {xy: [pt.x, pt.y]};
};

export { usePosition };
