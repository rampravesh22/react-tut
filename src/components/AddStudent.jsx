import React, { useState } from "react";
import { useAddStudentMutation } from "../services/student";

const AddStudent = () => {
	const [addStudentFun, { isSuccess }] = useAddStudentMutation();
	const [input, setInput] = useState({
		name: "",
		age: "",
		roll: "",
	});

	const handleInput = (e) => {
		setInput((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};
	const handleSumbit = (e) => {
		e.preventDefault();
		addStudentFun(input);
	};
	return (
		<div>
			<br />
			<form action="" method="post" onSubmit={handleSumbit}>
				<div className="form-input">
					<input
						type="text"
						placeholder="Enter name"
						onChange={handleInput}
						name="name"
						value={input.name}
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
				<input type="submit" value={"Add"} />
			</form>
			<br />
			<br />
			{isSuccess && <h1>Add successfully!!</h1>}
		</div>
	);
};

export default AddStudent;
