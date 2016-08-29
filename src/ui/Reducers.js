const todoInitialState = {
	todos: []
}
export default function(state == todoInitialState, action) {
	switch (action.type) {
		case "ADD_TODO":
			return {...state, todos:[...state.todos, ...action.todo]}

		case "TOGGLE_TODO":
			return {...state, todos:[...state.]}



})


	}


 default:
  return state
}