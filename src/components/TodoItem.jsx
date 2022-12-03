import React, { useContext } from "react";
import { todoContext } from "./TodoContext";

const TodoItem = ({ todoitem, index }) => {
	const { todo, setTodo } = useContext(todoContext);
	const removeItem = (index) => {
		setTodo((preState) => {
			return preState.filter((todo, ind) => {
				return ind !== index;
			});
		});
	};
	const checkTodo = (id) => {
		setTodo((preState) => {
			return preState.map((item) => {
				return id === item.id
					? { ...item, completed: !item.completed }
					: item;
			});
		});
	};

	return (
		<li>
			<input
				type="checkbox"
				onClick={(e) => checkTodo(todoitem.id)}
				checked={todoitem.complete}
			/>
			<span className={todoitem.completed ? "cross" : ""}>
				{todoitem.tododata}
			</span>
			<button onClick={() => removeItem(index)}>Delete</button>
		</li>
	);
};

export default TodoItem;
