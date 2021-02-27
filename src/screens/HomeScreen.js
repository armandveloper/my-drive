import React from 'react';
import ScreenHolder from '../components/layout/ScreenHolder';
import WorkSpace from '../components/WorkSpace';

function HomeScreen() {
	return (
		<ScreenHolder title="My Files">
			<WorkSpace />
		</ScreenHolder>
	);
}

export default HomeScreen;
