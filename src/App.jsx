import { useReducer, useState } from "react";
const ACTIONS = {
	ADD_TODO: "ADD_TODO",
	TOGGLE_TODO: "TOGGLE_TODO",
};
const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)];
		case ACTIONS.TOGGLE_TODO:
	}
};
function newTodo(name) {
	return { id: Date.now(), name: name, complete: false };
}
function App() {
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName("");
	};
	return (
		<div className="app">
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default App;
