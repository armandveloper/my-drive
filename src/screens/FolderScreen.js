import React, { useRef, useState } from 'react';
import { FolderPlus, Upload } from 'react-feather';
import ScreenHolder from '../components/layout/ScreenHolder';
import WorkSpace from '../components/WorkSpace';
import FoldersItem from '../components/drive/FoldersItem';
import Modal from '../components/ui/Modal';

// Folder format
// {
//   id: '1',
//   name: 'Folder 1'
// }

function FolderScreen() {
	const [folders, setFolders] = useState([
		{
			id: '1',
			name: 'Folder 1',
		},
	]);

	const [modalIsOpen, setModalOpen] = useState(false);

	const [folder, setFolder] = useState('');

	const modalBtn = useRef(null);

	const handleFolderChange = (e) => {
		const value = e.target.value;
		modalBtn.current.disabled = value.trim() === '';
		setFolder(value);
	};

	const openModal = () => {
		setModalOpen(true);
	};

	const handleNewFolder = (e) => {
		e.preventDefault();
		// TODO: Petición al backend
		setFolders([
			...folders,
			{ id: new Date().getMilliseconds(), name: folder.trim() },
		]);
		setModalOpen(false);
		setFolder('');
	};

	return (
		<ScreenHolder title="My Folders">
			<WorkSpace>
				<div className="workspace__header">
					<button
						className="btn btn--secondary space-r-1"
						onClick={openModal}
						title="New Folder"
					>
						<FolderPlus size={24} color="currentColor" />
					</button>
					<div>
						<label
							className="btn btn--secondary"
							aria-label="Upload File"
						>
							<Upload size={24} color="currentColor" />

							<input type="file" name="file" className="hidden" />
						</label>
					</div>
				</div>
				<div className="folders__grid">
					{folders.map((folder) => (
						<FoldersItem key={folder.id} />
					))}
				</div>
				<Modal isOpen={modalIsOpen} setModalOpen={setModalOpen}>
					<form className="form" onSubmit={handleNewFolder}>
						<div className="form__group">
							<label htmlFor="folder">Name:</label>
							<input
								type="text"
								aria-label="Folder name"
								id="folder"
								className="form__control"
								value={folder}
								onChange={handleFolderChange}
							/>
						</div>
						<button
							ref={modalBtn}
							disabled
							className="btn btn--primary"
						>
							Create
						</button>
					</form>
				</Modal>
				;
			</WorkSpace>
		</ScreenHolder>
	);
}

export default FolderScreen;
