import React from 'react';

function Menu({ items }) {
	return (
		<ul className="menu" role="menu" tabIndex="-1">
			{items.map((item) => (
				<li key={item} className="menu__item" role="menuitem">
					{item}
				</li>
			))}
		</ul>
	);
}

export default Menu;
