import React, {Component} from 'react';
import {routes} from '../../routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 d-flex justify-content-center">
                        {routes.map((route, index) => (
                            <Link key={index} className="nav-item nav-link" to={route.path}>{route.name}</Link>
                        ))}
                      {/*<Link className="nav-item nav-link" to="/">Home</Link>*/}
                    </div>
                  </div>
                </nav>
            </header>
        )
    }
}