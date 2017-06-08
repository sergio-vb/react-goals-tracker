import expect from "expect";

export default function reducer(state={
	yearly: [],
	monthly: [],
	weekly: [],
	daily: [{
		id: 0,
		goal: "Create a test first goal",
		status: "Incomplete",
	}]
}, action){

	switch (action.type){

		case "CREATE_GOAL":
			
			const newGoal = {
				id: Date.now(),
				goal: action.goal,
				status: "Incomplete"
			}
			
			state = Object.assign({}, state, {
				[action.timeframe]: state[action.timeframe].concat(newGoal)
			});
			break;

		
		default:
			state = Object.assign({}, state);
	}
	return state;
}

expect(
	reducer(undefined, { type: "TEST"})
).toEqual({
	yearly: [],
	monthly: [],
	weekly: [],
	daily: [{
		id: 0,
		goal: "Create a test first goal",
		status: "Incomplete",
	}]
});

console.log("goalsReducer tests passed!");
