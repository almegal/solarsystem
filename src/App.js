import React from 'react';
import Stars from './Component/StarsBackground';
import Orbit from './Component/Orbit';

//
//delete after develop
import Stats from 'stats.js';

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

function animate() {

	stats.begin();

	// monitored code goes here

	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );

//
//
const App = () => {
	return (
	   <div>
			<Stars>
				<Orbit />
			</Stars>
		</div>
	);
};

export default App;
