import React from "react";
import { useContext } from "react";
import { studentContext } from "./studentContext";

const Student = () => {
	const { student } = useContext(studentContext);
	return (
		<div className="student">
			<ol>
				{student.map((stu) => {
					return <li key={stu.id}>{stu.name}</li>;
				})}
			</ol>
		</div>
	);
};

export default Student;
