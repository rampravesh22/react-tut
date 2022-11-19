import Home from "./components/Home";
import Student from "./components/Student";
import { StudentProvider } from "./components/studentContext";
function App() {
	return (
		<div className="app">
			<StudentProvider>
				<Home></Home>
				<Student></Student>
			</StudentProvider>
		</div>
	);
}

export default App;
