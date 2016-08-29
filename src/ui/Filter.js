import React from 'react';

export default React.createClass({
	render: function () {
		return (
			<div className="filter">
				<ul>
					<li> SHOW: </li>
					<li> All </li>
					<li> Active </li>
					<li> Completed </li>
				</ul>
			</div>
		)
	}
})


const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'{
	type: SET_VISIBILITY_FILTER,
	filter:SHOW_COMPLETED
}


state:
CurrentFilter