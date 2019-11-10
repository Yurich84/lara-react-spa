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
				<h1>Test</h1>
        		{/*<button className="btn btn-sm btn-primary test-btn" onClick={this.handleClick} >Test button in JSX</button>*/}
			</div>
		)
	}
}