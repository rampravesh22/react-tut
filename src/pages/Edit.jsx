import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	useEditStudentMutation,
	useGetStudentQuery,
} from "../services/student";

const Edit = () => {
	const paramId = useParams();
	const [input, setInput] = useState({
		name: "",
		age: "",
		roll: "",
	});
	const [editStudent, { isLoading, isSuccess, isError }] =
		useEditStudentMutation();
	const { data: studentData } = useGetStudentQuery(paramId.id);

	useEffect(() => {
		if (studentData) {
			setInput(studentData);
		}
	}, [studentData]);

	const handleInput = (e) => {
		setInput((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};
	const handleSumbit = async (e) => {
		e.preventDefault();
		await editStudent(input);
	};
	return (
		<div>
			<br />
			<form action="" method="put" onSubmit={handleSumbit}>
				<div className="form-input">
					<input
						type="text"
						placeholder="Enter name"
						onChange={handleInput}
						name="name"
						value={input.name}
						disabled={isLoading}
					/>
				</div>
				<div className="form-input">
					<input
						type="number"
						placeholder="Enter age"
						onChange={handleInput}
						name="age"
						value={input.age}
					/>
				</div>
				<div className="form-input">
					<input
						type="number"
						placeholder="Enter roll"
						onChange={handleInput}
						name="roll"
						value={input.roll}
					/>
				</div>
				<input type="submit" value={"Update"} />
			</form>
			<br />
			<br />
			{isLoading && <h1>Updating...</h1>}
			{isSuccess && <h1>Updated successfully!!</h1>}
		</div>
	);
};

export default Edit;
