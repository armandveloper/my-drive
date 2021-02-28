import React from 'react';
import ScreenHolder from '../components/layout/ScreenHolder';
import WorkSpace from '../components/WorkSpace';
import FilesItem from '../components/drive/FilesItem';
import files from '../files';
import { Upload } from 'react-feather';

function HomeScreen() {
	return (
		<ScreenHolder title="My Files">
			<WorkSpace>
				<div className="workspace__header">
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
				<div className="files__grid">
					{files.map((file) => (
						<FilesItem key={file.id} file={file} />
					))}
				</div>
			</WorkSpace>
		</ScreenHolder>
	);
}

export default HomeScreen;
