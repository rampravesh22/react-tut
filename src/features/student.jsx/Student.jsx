import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, deleteStudent, toggleComplete } from "./studentSlice";
const Student = () => {
	const input = useRef();
	const students = useSelector((state) => state.studentList.students);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addStudent(input.current.value));
		input.current.value = "";
	};

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input type="text" placeholder="Enter name" ref={input} />
				<button>Add Student</button>
			</form>

			{students.map((student) => {
				return (
					<li key={student.id} style={{ listStyle: "none" }}>
						<div className="contents">
							{student.complete ? (
								<span style={{ textDecoration: "line-through" }}>
									{student.name}
								</span>
							) : (
								student.name
							)}
						</div>
						<button onClick={() => dispatch(deleteStudent(student.id))}>
							Delete
						</button>
						<button onClick={() => dispatch(toggleComplete(student.id))}>
							Toggle Complete
						</button>
					</li>
				);
			})}
		</div>
	);
};

export default Student;
