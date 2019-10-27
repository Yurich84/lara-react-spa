import React from 'react'

import $ from "jquery";

export default class Test extends React.Component {
	constructor() {
		super();
	}


	handleClick(e) {
	   console.log(e.target);
	}


	render() {
		return (
			<div>
				<h4 style={{ textAlign: 'center' }}>Test</h4>

				<br clear="all" />
        		<button className="btn btn-sm btn-primary test-btn" onClick={this.handleClick} >Test button in JSX</button>
			</div>
		)
	}
}