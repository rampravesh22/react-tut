import { useReducer, useState } from "react";
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD":
			return state + 1;
		case "REMOVE":
			return state - 1;
		default:
			return state;
	}
};
function App() {
	const [state, disptach] = useReducer(reducer, 0);
	return (
		<div className="app">
			<button onClick={() => disptach({ type: "ADD" })}>Add</button>
			<button onClick={() => disptach({ type: "REMOVE" })}>REMOVE</button>
			<br />
			<br />
			{state}
		</div>
	);
}

export default App;
