import React from "react";
import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "../services/student";

const ViewStudent = () => {
	const { id } = useParams();
	const { data } = useGetStudentQuery(id);
	return (
		<>
			{data ? (
				<div>
					<h1>Student Details</h1>
					<p>
						<strong>Id</strong>:{data.id}
					</p>
					<p>
						<strong>Name:</strong>
						{data.name}
					</p>
					<p>
						<strong>Age:</strong>
						{data.age}
					</p>
					<p>
						<strong>Roll:</strong>
						{data.roll}
					</p>
				</div>
			) : null}
		</>
	);
};

export default ViewStudent;
