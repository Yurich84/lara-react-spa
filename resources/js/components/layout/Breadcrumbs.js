import React, {Component} from 'react';
import {routes} from '../../routes';
import { Switch, Route, Link } from 'react-router-dom'

export default class Breadcrumbs extends Component {
    render() {
        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/'>Home</Link>
                    </li>

                    {routes.map((route, index) => (
                        <li key={index} className="breadcrumb-item" >
                            {
                                route.url
                                ? <Link to={route.path}>{route.name}</Link>
                                : route.name
                            }
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}