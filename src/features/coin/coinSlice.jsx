import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	coin: 0,
};

export const coinSlice = createSlice({
	name: "coiner",
	initialState,
	reducers: {
		increament: (state) => {
			state.coin += 1;
		},
		decreament: (state) => {
			state.coin -= 1;
		},
	},
});

export const { increament, decreament } = coinSlice.actions;
export default coinSlice.reducer;
