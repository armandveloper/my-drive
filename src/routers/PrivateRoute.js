import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
	return <Route {...rest} component={Component} />;
}

export default PrivateRoute;
