import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
export const studentContext = createContext();

export const StudentProvider = (props) => {
	const [student, setStudent] = useState([]);
	useEffect(() => {
		const getStudents = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/student/");
				setStudent(response.data);
				console.log(response.data);
			} catch (error) {}
		};
		getStudents();
	}, []);
	return (
		<>
			<studentContext.Provider value={{ student, setStudent }}>
				{props.children}
			</studentContext.Provider>
		</>
	);
};
