import React from 'react';
import AddTodo from "ui/AddTodo";
import Filter from "ui/FIlter";
import TodoList from "ui/TodoList";

export default React.createClass({
	render: function () {
		return (
			<div className="app">
				<AddTodo />
				<TodoList />
				<Filter />
			</div>
		)
	}
})