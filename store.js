import { applyMiddleware, createStore } from "redux";

import reducer from "reducers"


store = createStore(reducer);

store.subscribe( () => {
	console.log("Store changed, new state: ", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Kell"});
store.dispatch({type: "CHANGE_AGE", payload: 27});

export default store;