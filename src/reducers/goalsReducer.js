import expect from "expect";

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

expect(
	reducer(undefined, { type: "TEST"})
).toEqual({
	yearlyGoals: [],
	monthlyGoals: [],
	weeklyGoals: [],
	dailyGoals: []
});

expect(
	reducer(undefined, { type: "CREATE_GOAL", payload: "Master React and Redux"})
).toEqual({
	yearlyGoals: [],
	monthlyGoals: [],
	weeklyGoals: [],
	dailyGoals: ["Master React and Redux"]
});
console.log("goalsReducer tests passed!");
