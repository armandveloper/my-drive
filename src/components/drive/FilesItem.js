import React from 'react';
import { File, Headphones, Image, MoreHorizontal, Play } from 'react-feather';
import useMenu from '../../hooks/useMenu';
import Menu from '../ui/Menu';

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

function FilesItem({ file }) {
	const { isMenuOpen, openMenu } = useMenu(false);
	const { ext, name, mimeType } = file;
	return (
		<div className="files__item">
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
					/>
				)}
			</div>
			<div className="files__item-footer">
				{name}.{ext}
			</div>
		</div>
	);
}

export default FilesItem;
