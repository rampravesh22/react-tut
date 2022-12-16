import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	students: [
		{ id: 1, name: "Rampravesh", complete: false },
		{ id: 2, name: "Jatin", complete: false },
		{ id: 3, name: "Harsih", complete: false },
		{ id: 4, name: "Manishi", complete: false },
		{ id: 5, name: "Girish", complete: false },
		{ id: 6, name: "Saneet", complete: false },
	],
};

const studentSlice = createSlice({
	name: "studentList",
	initialState,
	reducers: {
		addStudent: (state, action) => {
			if (action.payload.length > 1) {
				state.students.push({
					id: state.students.length + 1,
					name: action.payload,
					complete: false,
				});
			}
		},
		deleteStudent: (state, action) => {
			state.students = state.students.filter((student) => {
				return student.id !== action.payload;
			});
		},
		toggleComplete: (state, action) => {
			state.students = state.students.map((student) => {
				return student.id === action.payload
					? { ...student, complete: !student.complete }
					: student;
			});
		},
	},
});

export default studentSlice.reducer;
export const { addStudent, deleteStudent, toggleComplete } =
	studentSlice.actions;
