import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteStudentMutation } from "../services/student";

const StudentRows = ({ student }) => {
	const redirect = useNavigate();
	const [deleteStudent, res] = useDeleteStudentMutation();

	const deleteStudentById = (id) => {
		deleteStudent(id);
	};
	return (
		<tr>
			<td>{student.id}</td>
			<td>{student.name}</td>
			<td>
				<button onClick={() => redirect(`/view/${student.id}`)}>
					View
				</button>
			</td>
			<td>
				<button onClick={() => deleteStudentById(student.id)}>
					Delete
				</button>
			</td>
			<td>
				<button onClick={() => redirect(`/edit/${student.id}`)}>
					Edit
				</button>
			</td>
		</tr>
	);
};

export default StudentRows;
