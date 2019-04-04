import React from 'react';

const Stars = (props) => {
	return (
		<div>
			<p>
      I am Stars this child element below
			</p>
			{props.children}
		</div>
	);
};
export default Stars;
