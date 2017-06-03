import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "reducers";

const middleware = applyMiddleware(thunk, logger, promise());
const store = createStore(reducer, middleware);

/*store.subscribe( () => {
	console.log("Store changed, new state: ", store.getState());
});*/

export default store;

/* Pending:

- Adding middleware (promise, thunk, and logger)
- Using multiple reducers and combineReducers

*/