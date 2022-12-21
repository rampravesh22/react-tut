import {
	useGetAllPostQuery,
	useGetPostByIdQuery,
	useGetPostByLimitQuery,
} from "./services/post";

function App() {
	// const { data, isError, isSuccess, isLoading } = useGetPostByIdQuery(1);
	const limitData = useGetPostByLimitQuery(20).data;
	return (
		<div className="app">
			<ol>
				{limitData
					? limitData.map((post) => {
							return <li>{post.title}</li>;
					  })
					: null}
			</ol>
		</div>
	);
}

export default App;
