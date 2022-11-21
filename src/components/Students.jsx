import { useEffect, useState } from "react";
import axios from "axios";
const URL = "http://127.0.0.1:8000/student/";
const Students = () => {
	const [students, setStudents] = useState([]);
	const [next, setNext] = useState("");
	const [previous, setPrevious] = useState("");
	useEffect(() => {
		const getStudents = async () => {
			try {
				const response = await axios.get(URL);
				setNext(response.data.next);
				console.log(response.data);

				setPrevious(response.data.previous);
				setStudents(response.data.results);
			} catch (error) {}
		};
		getStudents();
	}, []);
	const handleNext = () => {
		const getStudents = async () => {
			try {
				const response = await axios.get(next);
				setNext(response.data.next);
				setPrevious(response.data.previous);
				setStudents(response.data.results);
			} catch (error) {}
		};
		getStudents();
	};
	const handlePrevious = () => {
		const getStudents = async () => {
			try {
				const response = await axios.get(previous);
				setNext(response.data.next);
				setPrevious(response.data.previous);
				setStudents(response.data.results);
			} catch (error) {}
		};
		getStudents();
	};
	return (
		<div className="student">
			<ul>
				{students.map((student) => {
					return <li key={student.id}>{student.name}</li>;
				})}
			</ul>
			<div className="buttons">
				<button onClick={handlePrevious} disabled={!previous ? true : null}>
					Previous
				</button>
				<button onClick={handleNext} disabled={!next ? true : null}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Students;
