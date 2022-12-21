import {
	useGetAllPostQuery,
	useGetPostByIdQuery,
	useGetPostByLimitQuery,
	useDeletePostMutation,
	useCreatePostMutation,
	useUpdatePostMutation,
} from "./services/post";

function App() {
	// const { data, isError, isSuccess, isLoading } = useGetPostByIdQuery(1);
	// const limitData = useGetPostByLimitQuery(20).data;
	// const [deletePost, res] = useDeletePostMutation();
	// const [createPost, response] = useCreatePostMutation();
	const [updatePost, response] = useUpdatePostMutation();
	return (
		<div className="app">
			<h1>Hello</h1>
		</div>
	);
}

export default App;
