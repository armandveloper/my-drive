import React from 'react';
import { Search, LogOut } from 'react-feather';

function Header({ title }) {
	return (
		<header className="header">
			<div className="header__inner">
				<h1 className="heading-1">{title}</h1>
				<div className="search__box">
					<button type="submit" className="btn--icon search__btn">
						<Search
							className="search__icon"
							size={16}
							color="#3c3c3e"
						/>
					</button>
					<input
						type="text"
						className="search__input"
						placeholder="What are you looking for?"
						aria-label="Type the item what your looking for"
					/>
				</div>
				<button className="btn--icon btn--logout" title="Log out">
					<LogOut color="currentColor" size={24} />
				</button>
			</div>
		</header>
	);
}

export default Header;
