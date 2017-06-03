export default function reducer(state={}, action){

	switch (action.type){
		case "SET_USER_NAME":
			state = Object.assign({}, state, {name: action.payload});
			break;
		case "SET_USER_AGE":
			state = Object.assign({}, state, {age: action.payload});
			break;
	}
	return Object.assign({}, state);
}

