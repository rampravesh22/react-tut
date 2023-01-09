import axios from "axios";
import { useState } from "react";

function App() {
	const [show, setShow] = useState(true);
	const [hide, setHide] = useState(false);
	const [students, setStudents] = useState([]);
	const [loadin, setLoadin] = useState(false);

	const handleShow = () => {
		setLoadin(true);
		setTimeout(() => {
			const getData = async () => {
				try {
					const response = await axios.get(
						"http://localhost:8000/student/"
					);
					setStudents(response.data.results);

					setLoadin(false);
					setShow(false);
					setHide(true);
				} catch (error) {
					setLoadin(false);
				}
			};
			getData();
		}, 4000);
	};

	const handleHide = () => {
		setStudents([]);
		setShow(true);
		setHide(false);
	};

	return (
		<div className="app">
			{show ? <button onClick={handleShow}>Show Students</button> : null}
			{hide ? <button onClick={handleHide}>Hide Students</button> : null}
			{loadin ? <h1>Loading Data...</h1> : null}
			<ul>
				{students.map((student) => {
					return <li key={student.id}>{student.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
