import React, { useReducer } from "react";
const reducer = (state, action) => {
	switch (action.type) {
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		default:
			return state;
	}
};
const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, 0);
	return (
		<div className="use-reducer">
			<div className="increament ">
				<button onClick={() => dispatch({ type: "INC" })}>+</button>
			</div>
			<div className="state">{state}</div>

			<div className="decreament ">
				<button onClick={() => dispatch({ type: "DEC" })}>-</button>
			</div>
		</div>
	);
};

export default UseReducer;
