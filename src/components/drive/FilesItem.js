import React, { useState, useRef } from 'react';
import { File, Headphones, Image, MoreHorizontal, Play } from 'react-feather';
import useMenu from '../../hooks/useMenu';
import Menu from '../ui/Menu';
import Modal from '../ui/Modal';

const iconsForMimeTYpe = {
	'audio/': (
		<Headphones
			size={76}
			color="currentColor"
			className="files__item-icon"
		/>
	),
	'video/': (
		<Play size={76} color="currentColor" className="files__item-icon" />
	),
	'image/': (
		<Image size={76} color="currentColor" className="files__item-icon" />
	),
	'text/': (
		<File size={76} color="currentColor" className="files__item-icon" />
	),
};

const renderIcon = (mimeType) => {
	return iconsForMimeTYpe[mimeType.substring(0, mimeType.indexOf('/') + 1)];
};

function FilesItem({ file, setFiles }) {
	const { isMenuOpen, openMenu, closeMenu } = useMenu(false);

	const [modalIsOpen, setModalOpen] = useState(false);

	const { id, ext, name, mimeType } = file;

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
		setFiles((files) =>
			files.map((file) =>
				file.id === id ? { ...file, name: nameState } : file
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
		<div className="files__item" onContextMenu={handleContextMenu}>
			<div className="files__item-body">
				<button
					className="btn--icon btn--menu"
					title="More"
					onClick={openMenu}
				>
					<MoreHorizontal color="#fff" size={24} />
				</button>
				{renderIcon(mimeType)}
				{isMenuOpen && (
					<Menu
						items={[
							'Download',
							'Rename',
							'Move to Trash',
							'Delete',
						]}
						handleClick={handleClick}
					/>
				)}
			</div>
			<div className="files__item-footer">
				{name}.{ext}
			</div>
			{modalIsOpen && generateModal('Rename')}
		</div>
	);
}

export default FilesItem;
