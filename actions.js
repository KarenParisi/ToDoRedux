


//action//
const ADD_TODO = 'ADD_TODO' {
	type: ADD_TODO,
	text: 'text'
}

//action creater(functio to create the action)//
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
//to actually initiate a dispatch, pass the result to the dispatch() function://
dispatch(addTodo(text))


const TOGGLE_TODO = 'TOGGLE_TODO'{
	type: TOGGLE_TODO,
	index: 5
}

const SET_visibility_FILTER = 'SET_visibility_FILTER'{
	type: SET_visibility_FILTER,
	filter:SHOW_COMPLETED
}


//////


function addTodo(text){
	return {
		type: ADD_TODO,
		text
	}
}

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO ='TOGGLE_TODO'
export const SET_visibility_FILTER = 'SET_visibility_FILTER'

export const visibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
	SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export function addTodo(text){
	return {type:ADD_TODO, text}
}

export toggleTodo(index){
	return {type:TOGGLE_TODO, index}
}

export setVisablilityFilter(filter){
	return {type:SET_visibility_FILTER, filter}
}

//reducers//
//handle//
//set state//
const initialState = {
 	visibilityFilter: visibilityFilters.SHOW_ALL,
 	todos: [] 
}
function todoApp(state, action) {
	if (typeof state === 'undefined'){
		return initialState
	}
		return state
}


//change state//
function todoApp(state == initialState, action) {
	switch (action.type) {
		
		case SET_visibility_FILTER:
			return Object.assign({}, state, {visibilityFilter:action.filter})
			})
		case ADD_TODO:
		 	return Object.assign({}, state, {todos:[...state.todos, {text: action.text, completed: false}]
		 	})

		 case TOGGLE_TODO:
		 	return Object.assign({}, state, {todos: state.todos.map((todo, index) => {
		 		if (index === action.index) {
		 			return Object.assign({}, todo, {completed: !todo.completed})
		 		}
		 	return todo
			})
		 })
			default:
			return state
	}
}

//variation for the above//

function todos(state == [], action){
	switch (action.type) {
		case ADD_TODO:
			return [...state, {text:action.text, completed:false} 
		]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			
		})
			default: 
			return state
	}
}

function todoApp (state = initialState, action) {
	switch (action.type) {
		case SET_visibility_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			})
		case ADD_TODO:
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: todos(state.todos, action)
			})
			default: 
			return state
	}
}




























