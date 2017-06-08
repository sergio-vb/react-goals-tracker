export function createGoal(goal, timeframe){
	return {
		type: "CREATE_GOAL",
		goal,
		timeframe
	}
}