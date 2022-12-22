import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const studentApi = createApi({
	reducerPath: "studentApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/",
	}),
	endpoints: (builder) => ({
		getAllStudent: builder.query({
			query: () => ({
				url: "student/",
				method: "GET",
			}),
		}),
		deleteStudent: builder.mutation({
			query: (id) => ({
				url: `student/${id}/`,
				method: "DELETE",
			}),
		}),
		getStudent: builder.query({
			query: (id) => ({
				url: `student/${id}/`,
				method: "GET",
			}),
		}),
		addStudent: builder.mutation({
			query: (data) => ({
				url: "student/",
				method: "POST",
				body: data,
				headers: {
					"content-type": "application/json;",
				},
			}),
		}),
		editStudent: builder.mutation({
			query: ({ id, ...data }) => {
				console.log("inside api ", id);
				console.log("inside api ", data);
				return {
					url: `student/${id}/`,
					method: "PUT",
					body: data,
					headers: {
						"content-type": "application/json;",
					},
				};
			},
		}),
	}),
});

export const {
	useGetAllStudentQuery,
	useDeleteStudentMutation,
	useGetStudentQuery,
	useAddStudentMutation,
	useEditStudentMutation,
} = studentApi;
