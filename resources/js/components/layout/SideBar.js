import React, {Component} from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


export default class SideBar extends Component {

    render(){
        return (
            <div>
                <Link className="nav-item nav-link" to="/search">Search</Link>
                <Link className="nav-item nav-link" to="/test">Test</Link>
            </div>
        )
    }
}