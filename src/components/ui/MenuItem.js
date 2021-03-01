import React from 'react';

function MenuItem({ item, handleClick }) {
	return (
		<li
			className="menu__item"
			role="menuitem"
			onClick={handleClick}
			data-action={item}
		>
			{item}
		</li>
	);
}

export default MenuItem;
