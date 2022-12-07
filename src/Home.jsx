import React from "react";
import store from "./store";
import { bugAdded, bugResolved } from "./actions";

const Home = () => {
	store.dispatch(bugAdded("bug1"));
	store.dispatch(bugAdded("bug2"));
	store.dispatch(bugResolved(1));

	console.log(store.getState());
	return <div>Home</div>;
};

export default Home;
