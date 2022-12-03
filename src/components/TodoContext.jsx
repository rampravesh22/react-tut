import { createContext, useState } from "react";

export const todoContext = createContext();
const TodoProvider = (props) => {
	const [todo, setTodo] = useState([]);
	return (
		<todoContext.Provider value={{ todo, setTodo }}>
			{props.children}
		</todoContext.Provider>
	);
};
export default TodoProvider;
