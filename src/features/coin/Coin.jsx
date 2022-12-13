import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "./coinSlice";
const Coin = () => {
	const coin = useSelector((state) => {
		return state.coiner.coin;
	});
	const dispatch = useDispatch();
	return (
		<div className="coin">
			<h1>Coin {coin}</h1>
			<button onClick={() => dispatch(increament())}>Increament</button>
			<button onClick={() => dispatch(decreament())}>decrement</button>
		</div>
	);
};

export default Coin;
