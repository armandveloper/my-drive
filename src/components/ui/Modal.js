import React, { useRef } from 'react';

function Modal({ children, isOpen, setModalOpen }) {
	const modal = useRef(null);

	const closeModal = ({ target }) => {
		if (target.classList.contains('modal__overlay')) {
			modal.current.classList.add('modal--out');
			setTimeout(() => {
				setModalOpen(false);
			}, 400);
		}
	};

	return isOpen ? (
		<div className="modal__overlay" onClick={closeModal}>
			<div className="modal" ref={modal}>
				{children}
			</div>
		</div>
	) : null;
}

export default Modal;
