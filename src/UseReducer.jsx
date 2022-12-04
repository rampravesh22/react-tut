import React, { useReducer } from "react";
const reducer = (state, action) => {
	console.log(action.payload);
	switch (action.type) {
		case "INC":
			return state + 1;
		case "DEC":
			return state - action.payload.decreaseBy;
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
				<button
					onClick={() =>
						dispatch({ type: "DEC", payload: { decreaseBy: 10 } })
					}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default UseReducer;
