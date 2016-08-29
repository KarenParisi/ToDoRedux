import React from "react";

const AddTodo = React.createClass({
	render: () {
		return (
			<div className="addTodo">
			</div>
		);
	}
});
export default AddTodo; 
//no state// called by the Container
//action//
const ADD_TODO = 'ADD_TODO' {
	type: ADD_TODO,
	text: 'text'
}
//action creator
export const addTodo =(text) ==> {
	return {
		type: "ADD_TODO",
		text: 
		completed:false
	}
}
//reducer
const todoInitialState = {
  todos:[]
}
export default funtion)stae =initialState, action) {
	switch (action.type) {
		case "ADD_TODO":
		return{...state, todo:[...state.todo,...action.todo]}
	}
}




///////////
const TodoList = React.createClass({
	render: () {
		return (
			<div className="todoList">
			</div>
		);
	}
});
export default TodoList;
//state(2): Todos(array) & visabiltyFilter(boolean) /called by the Container
//action
const TOGGLE_TODO = 'TOGGLE_TODO'{
	type: TOGGLE_TODO,
	index: 5
}
//action creator
export const toggleTodo = (index) {
	return {
		type:TOGGLE_TODO,
		index: 
	}
}
//reducer
const toggleInitialState = {
	
}




/////////////
const Filter = React.createClass({
	render: () {
		return (
			<div className="filter">
			</div>
		);
	}
});
export default Filter;
//state: CurrentFilter //called by the Container
//action
const SET_VISIBILTY_FILTER = 'SET_VISIBILTY_FILTER'{
	type: SET_VISIBILTY_FILTER,
	filter:SHOW_COMPLETED
}
//action creator
export const setVisibilityFilter = (filter) {
	return {
		type: "SET_VISIBILTY_FILTER",
		filter
	}
}
//reducer
const initialState = {
	visabilityFilter: VisabilityFilter.SHOW_ALL,
	todos: []
}



