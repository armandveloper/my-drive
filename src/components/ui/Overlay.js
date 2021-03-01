import React from 'react';

function Overlay({ children }) {
	return (
		<div className="overlay" role="presentation">
			{children}
		</div>
	);
}

export default Overlay;
