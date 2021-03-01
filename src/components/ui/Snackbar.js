import React, { useState, useEffect, useRef } from 'react';

function Snackbar({ autoHide = 4000, open, type, text }) {
	const [isOpen, setIsOpen] = useState(open);
	const snackbar = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			snackbar.current.style.animation = 'fadeOut 0.5s ease';
			setTimeout(() => {
				setIsOpen(false);
			}, 500);
		}, autoHide);
	}, [autoHide]);

	return (
		isOpen && (
			<div
				ref={snackbar}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
				className={'snackbar ' + type}
			>
				<span className="snackbar__text">{text}</span>
			</div>
		)
	);
}

export default Snackbar;
