import React from 'react';
import MenuItem from './MenuItem';

function Menu({ items, handleClick }) {
	return (
		<ul className="menu" role="menu" tabIndex="-1">
			{items.map((item) => (
				<MenuItem key={item} item={item} handleClick={handleClick} />
			))}
		</ul>
	);
}

export default Menu;
