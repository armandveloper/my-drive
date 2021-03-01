import { useState } from 'react';

function useMenu(initialState) {
	const [isMenuOpen, setIsMenuOpen] = useState(initialState);

	const addOverlay = () => {
		const $overlay = document.createElement('div');
		$overlay.className = 'menu__root';
		$overlay.id = 'menu__root';
		document.body.appendChild($overlay);
		$overlay.addEventListener('click', () => {
			$overlay.remove();
			closeMenu();
		});
	};

	const openMenu = () => {
		setIsMenuOpen(true);
		addOverlay();
	};
	const closeMenu = () => {
		setIsMenuOpen(false);
		document.getElementById('menu__root')?.remove();
	};

	return { isMenuOpen, openMenu, closeMenu };
}

export default useMenu;
