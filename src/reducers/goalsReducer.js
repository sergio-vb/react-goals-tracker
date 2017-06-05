export default function reducer(state={
	yearlyGoals: [],
	monthlyGoals: [],
	weeklyGoals: [],
	dailyGoals: []
}, action){

	switch (action.type){
		case "CREATE_GOAL":
			console.log("Fake goal created");
			state = Object.assign({}, state, {dailyGoals: state.dailyGoals.concat(action.payload)});
			break;
		default:
			state = Object.assign({}, state);
	}
	return state;
}