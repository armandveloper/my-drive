import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import HomeScreen from '../screens/HomeScreen';
import FolderScreen from '../screens/FolderScreen';
import TrashScreen from '../screens/TrashScreen';

function PrivateRouter() {
	return (
		<div className="screen">
			<Sidebar />
			<Switch>
				<Route path="/" exact={true}>
					<HomeScreen />
				</Route>
				<Route path="/folders" exact={true}>
					<FolderScreen />
				</Route>
				<Route path="/trash" exact={true}>
					<TrashScreen />
				</Route>
				<Redirect to="/login" />
			</Switch>
		</div>
	);
}

export default PrivateRouter;
