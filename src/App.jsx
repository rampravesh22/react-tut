import { useGetAllPostQuery } from "./services/post";

function App() {
	const { data, isError, isSuccess, isLoading } = useGetAllPostQuery();
	console.log(data);
	return (
		<div className="app">
			<div>{isLoading ? <h2>Loding...</h2> : null}</div>
			<div>{isError ? <h2>Error</h2> : null}</div>
			{data
				? data.map((post) => {
						return <li key={post.id}>{post.title}</li>;
				  })
				: null}
		</div>
	);
}

export default App;
