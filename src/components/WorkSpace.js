import React from 'react';

function WorkSpace({ children }) {
	return (
		<main className="workspace">
			<div className="wrapper">{children}</div>
		</main>
	);
}

export default WorkSpace;
