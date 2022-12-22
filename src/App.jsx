import Home from "./pages/home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import ViewStudent from "./pages/ViewStudent";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/edit/:id" element={<Edit />}>
						Edit
					</Route>
					<Route path="/view/:id" element={<ViewStudent />}>
						View
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
