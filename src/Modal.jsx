import DeleteModal from "./DeleteModal";
import { useState } from "react";

export default function Modal() {
	// State to store whether the modal is open or not
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to open the modal
	const openModal = () => {
		setIsModalOpen(true);
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Function to handle the delete confirmation
	const handleDeleteConfirm = () => {
		// Perform the delete operation here
		console.log("Deleting item...");
		closeModal();
	};

	return (
		<div>
			<button onClick={openModal}>Delete</button>
			<DeleteModal
				isOpen={isModalOpen}
				onConfirm={handleDeleteConfirm}
				onCancel={closeModal}
			/>
		</div>
	);
}
