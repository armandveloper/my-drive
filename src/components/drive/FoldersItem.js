import React from 'react';
import { Folder, MoreVertical } from 'react-feather';
import useMenu from '../../hooks/useMenu';
import Menu from '../ui/Menu';

function FoldersItem() {
	const { isMenuOpen, openMenu } = useMenu(false);

	const handleContextMenu = (e) => {
		console.log(e);
		e.preventDefault();
		openMenu();
	};

	return (
		<div className="folders__item" onContextMenu={handleContextMenu}>
			<Folder size={24} color="currentColor" />
			<span className="folders__item-text">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Excepturi obcaecati repellendus dignissimos.
			</span>
			<button className="btn--icon" title="More" onClick={openMenu}>
				<MoreVertical color="#fff" size={20} />
			</button>
			{isMenuOpen && (
				<Menu
					items={['Download', 'Rename', 'Move to Trash', 'Delete']}
				/>
			)}
		</div>
	);
}

export default FoldersItem;
