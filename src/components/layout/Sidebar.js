import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { File, Folder, User, Trash, UploadCloud } from 'react-feather';

function Sidebar() {
	return (
		<aside className="sidebar">
			<Link to="/" className="brand">
				<UploadCloud color="currentColor" size={24} />
				<span className="brand__text">My Drive</span>
			</Link>
			<nav className="sidebar__nav">
				<NavLink
					className="sidebar__nav-item"
					activeClassName="sidebar__nav-item--active"
					aria-label="Files"
					to="/"
					exact={true}
				>
					<File className="sidebar__icon" size={24} />
					<span className="sidebar__nav-item-text">Files</span>
					<span className="tooltip">Files</span>
				</NavLink>
				<NavLink
					className="sidebar__nav-item"
					activeClassName="sidebar__nav-item--active"
					aria-label="Folders"
					to="/folders"
				>
					<Folder className="sidebar__icon" size={24} />
					<span className="sidebar__nav-item-text">Folders</span>
					<span className="tooltip">Folders</span>
				</NavLink>
				<NavLink
					className="sidebar__nav-item"
					activeClassName="sidebar__nav-item--active"
					aria-label="Trash"
					to="/trash"
				>
					<Trash className="sidebar__icon" size={24} />
					<span className="sidebar__nav-item-text">Trash</span>
					<span className="tooltip">Trash</span>
				</NavLink>
				<NavLink
					className="sidebar__nav-item"
					activeClassName="sidebar__nav-item--active"
					aria-label="Search"
					to="/profile"
				>
					<User className="sidebar__icon" size={24} />
					<span className="sidebar__nav-item-text">Profile</span>
				</NavLink>
			</nav>
		</aside>
	);
}

export default Sidebar;
