import React from 'react'

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h2 style={{ textAlign: 'center' }}>Welcome furniture store</h2>
                <div className="gl_kar">
                    <div>We've been making beautiful furniture in individual sizes on Italian equipment since 1995.
                        Delivery and assembly for free.
                    </div>
                    <img src="/imgs/templ/gl.jpg" />
                </div>
			</div>
		)
	}
}