import Todo from "./components/Todo";
import TodoProvider from "./components/TodoContext";
function App() {
	return (
		<TodoProvider>
			<div className="app">
				<Todo></Todo>
			</div>
		</TodoProvider>
	);
}

export default App;
