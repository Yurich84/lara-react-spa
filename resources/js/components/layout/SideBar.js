import React, {Component} from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


export default class SideBar extends Component {

    render(){
        return (
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                    }}
                >

                    <Link className="nav-item nav-link" to="/search">Search</Link>
                    <Link className="nav-item nav-link" to="/test">Test</Link>
                </div>

            </div>
        )
    }
}