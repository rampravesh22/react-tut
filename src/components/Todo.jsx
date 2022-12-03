import React, { useContext, useState } from "react";
import { todoContext } from "./TodoContext";
import TodoItem from "./TodoItem";
const Todo = () => {
	const { todo, setTodo } = useContext(todoContext);
	const [input, setInput] = useState("");
	const lastIndex = todo.length + 1;

	const addTodo = (e) => {
		e.preventDefault();
		if (input) {
			setTodo((preState) => [
				...preState,
				{ id: lastIndex, tododata: input, completed: false },
			]);
			setInput("");
		}
	};
	return (
		<div className="todo">
			<form action="" onSubmit={addTodo}>
				<input
					type="text"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<button>Add</button>
			</form>
			<ul>
				{todo.map((todoitem, index) => (
					<TodoItem
						key={index}
						index={index}
						todoitem={todoitem}
					></TodoItem>
				))}
			</ul>
		</div>
	);
};

export default Todo;
