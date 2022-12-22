import React from "react";
import AddStudent from "../components/AddStudent";
import StudentRows from "../components/StudentRows";
import { useGetAllStudentQuery } from "../services/student";
const Home = () => {
	const { data, isError, isSuccess } = useGetAllStudentQuery();

	return (
		<div className="home">
			<AddStudent></AddStudent>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>View</th>
						<th>Delete</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{data
						? data.map((student) => {
								return (
									<StudentRows student={student} key={student.id} />
								);
						  })
						: null}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
