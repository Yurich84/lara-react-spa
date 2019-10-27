import React, {Component} from 'react';
import {routes} from '../../routes';
import { Switch, Route, Link } from 'react-router-dom'

export default class Header extends Component {
    render(){
        return (
            <div>

                <nav className="navbar navbar-expand-lg bg-navbar">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars fa-lg"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="sf-menu navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Категории</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {routes.map((route, index) => (
                                        <li key={index}>
                                            <Link className="dropdown-item" to={route.path}>{route.name}</Link>
                                        </li>
                                    ))}

                                    <li><a className="dropdown-item text-danger" href="#">Распродажа</a></li>
                                </ul>
                            </li>

                            {routes.map((route, index) => (
                                <li key={index+'_'} className="nav-item">
                                    <Link className="nav-link" to={route.path}>{route.name}</Link>
                                </li>
                            ))}

                        </ul>

                    </div>
                </nav>
            </div>

        )
    }
}