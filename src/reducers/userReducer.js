export default function reducer(state={
	name: "John Doe",
	age: 99
}, action){

	switch (action.type){
		case "SET_USER_NAME":
			state = Object.assign({}, state, {name: action.payload});
			break;
		case "SET_USER_AGE":
			state = Object.assign({}, state, {age: action.payload});
			break;
		default:
			state = Object.assign({}, state);
	}
	return state;
}