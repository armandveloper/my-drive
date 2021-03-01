import React, { useRef, useState } from 'react';
import { Folder, MoreVertical } from 'react-feather';
import useMenu from '../../hooks/useMenu';
import Menu from '../ui/Menu';
import Modal from '../ui/Modal';

function FoldersItem({ id, name, setFolders }) {
	const { isMenuOpen, openMenu, closeMenu } = useMenu(false);
	const [modalIsOpen, setModalOpen] = useState(false);
	const [nameState, setNameState] = useState(name);

	const modalBtn = useRef(null);

	const generateModal = () => {
		return (
			<Modal isOpen={modalIsOpen} setModalOpen={setModalOpen}>
				<form className="form" onSubmit={handleRenameFolder}>
					<div className="form__group">
						<label htmlFor="folder">Name:</label>
						<input
							type="text"
							aria-label="Folder name"
							id="folder"
							className="form__control"
							value={nameState}
							onChange={(e) => {
								const value = e.target.value;
								modalBtn.current.disabled = value.trim() === '';
								setNameState(value);
							}}
						/>
					</div>
					<button
						ref={modalBtn}
						disabled
						className="btn btn--primary"
					>
						Rename
					</button>
				</form>
			</Modal>
		);
	};

	const openModal = () => {
		setModalOpen(true);
		closeMenu();
		generateModal();
	};

	const handleRenameFolder = (e) => {
		e.preventDefault();
		// TODO: Petición al backend
		setFolders((folders) =>
			folders.map((folder) =>
				folder.id === id ? { ...folder, name: nameState } : folder
			)
		);
		setModalOpen(false);
	};

	const handleContextMenu = (e) => {
		console.log(e);
		e.preventDefault();
		openMenu();
	};

	const handleClick = ({ target }) => {
		const { action } = target.dataset;
		console.log(action);
		switch (action) {
			case 'Rename':
				openModal();
				break;
			case 'Download':
				break;
			case 'Move to Trash':
				break;
			case 'Delete':
				break;
			default:
		}
	};

	return (
		<div className="folders__item" onContextMenu={handleContextMenu}>
			<Folder size={24} color="currentColor" />
			<span className="folders__item-text">{name}</span>
			<button className="btn--icon" title="More" onClick={openMenu}>
				<MoreVertical color="#fff" size={20} />
			</button>
			{isMenuOpen && (
				<Menu
					items={['Download', 'Rename', 'Move to Trash', 'Delete']}
					handleClick={handleClick}
				/>
			)}
			{modalIsOpen && generateModal('Rename')}
		</div>
	);
}

export default FoldersItem;
