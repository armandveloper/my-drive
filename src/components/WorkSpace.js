import React from 'react';
import files from '../files';
import FilesItem from './drive/FilesItem';
import FoldersItem from './drive/FoldersItem';

function WorkSpace() {
	return (
		<main className="workspace">
			<div className="wrapper">
				<div className="workspace__header">
					<div>
						<label className="btn btn--secondary">
							Upload File
							<input type="file" name="file" className="hidden" />
						</label>
					</div>
				</div>
				<div className="files__grid">
					{files.map((file) => (
						<FilesItem key={file.id} file={file} />
					))}
				</div>
				<div className="folders__grid">
					<FoldersItem />
				</div>
			</div>
		</main>
	);
}

export default WorkSpace;
