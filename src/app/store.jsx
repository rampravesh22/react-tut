import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import coinReducer from "../features/coin/coinSlice";
import studentReducer from "../features/student.jsx/studentSlice";
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		coiner: coinReducer,
		studentList: studentReducer,
	},
});
