import React from 'react';
import Header from './Header';

function ScreenHolder({ title, children }) {
	return (
		<div className="main-section">
			<Header title={title} />
			{children}
		</div>
	);
}

export default ScreenHolder;
