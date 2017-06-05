export function createGoal(description){
	return {
		type: "CREATE_GOAL",
		payload: description
	}
}