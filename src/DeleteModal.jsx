import React from "react";

function DeleteModal(props) {
	const { isOpen, onConfirm, onCancel } = props;

	// Render the modal if it is open
	if (isOpen) {
		return (
			<div className="modal-overlay">
				<div className="modal-content">
					<p>Are you sure you want to delete this item?</p>
					<div className="modal-actions">
						<button onClick={onConfirm}>Yes</button>
						<button onClick={onCancel}>No</button>
					</div>
				</div>
			</div>
		);
	}

	// If the modal is not open, render nothing
	return null;
}

export default DeleteModal;
