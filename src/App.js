import React from 'react';
import Stars from './Component/StarsBackground';
import SolarSystem from './Component/Orbit';

const App = () => {
	return (
	   <div>
			<Stars>
				<SolarSystem />
			</Stars>
		</div>
	);
};

export default App;
