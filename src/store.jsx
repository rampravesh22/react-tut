import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
	reducer /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
