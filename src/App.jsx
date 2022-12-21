import { useGetAllPostQuery, useGetPostByIdQuery } from "./services/post";

function App() {
	const { data, isError, isSuccess, isLoading } = useGetPostByIdQuery(1);
	return (
		<div className="app">
			<div>{isLoading ? <h2>Loding...</h2> : null}</div>
			<div>{isError ? <h2>Error</h2> : null}</div>

			<div className="data-by-id">{data.title}</div>
		</div>
	);
}

export default App;
