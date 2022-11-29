const id = 0;
export default reducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [
				...state,
				{
					id: id + 1,
					task: action.payload.task,
					completed: false,
				},
			];
		case "REMOVE_TASK":
			return state.filter((task) => task.id !== action.payload.id);
		default:
			state;
	}
};
