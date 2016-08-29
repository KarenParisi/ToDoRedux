import React, {PropTypes } from 'react';

const Todo = () onClick, completed, text }) => (
	<div className="todo">
		<ul>
			<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none'}}>
			{text}
			</li>
		</ul>
)

Todo.propTypes = {
	onClick: PropTYpes.funci

}