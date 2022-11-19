import { useState } from "react";
import axios from "axios";
import { useRef, useContext } from "react";
import { studentContext } from "./studentContext";
const Home = () => {
	const name = useRef();
	const { setStudent } = useContext(studentContext);
	const handleSubmit = (e) => {
		const nameValue = name.current.value;
		e.preventDefault();
		const fitlterData = async () => {
			const URL = `http://127.0.0.1:8000/student/?search=${nameValue}`;
			console.log(URL);
			try {
				const response = await axios.get(URL);
				setStudent(response.data);
			} catch (error) {}
		};
		fitlterData();
	};
	return (
		<div className="home">
			<form action="" onSubmit={handleSubmit}>
				<input type="text" placeholder="Search..." ref={name} />
				<button type="submit">Search</button>
			</form>
		</div>
	);
};
export default Home;
