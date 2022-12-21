import {
	useGetAllPostQuery,
	useGetPostByIdQuery,
	useGetPostByLimitQuery,
	useDeletePostMutation,
} from "./services/post";

function App() {
	// const { data, isError, isSuccess, isLoading } = useGetPostByIdQuery(1);
	// const limitData = useGetPostByLimitQuery(20).data;
	const [deletePost, res] = useDeletePostMutation();
	return (
		<div className="app">
			<h1>Hello</h1>
		</div>
	);
}

export default App;
