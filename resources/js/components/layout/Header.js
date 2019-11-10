import React, {Component} from 'react';
import {routes} from '../../routes';
import { Switch, Route, Link } from 'react-router-dom'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            categoryList: []
        }
    }

    componentDidMount() {
        this.fetchCategories();
    }

    /**
     * Get Categories
     */
    fetchCategories() {
        axios.get('/api/categories').then(response => {
            this.setState({categoryList: response.data});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
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
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {this.state.categoryList.map((category, index) => (
                                        <li key={index}>
                                            <Link className="dropdown-item" to={'/category/' + category.slug}>{category.name}</Link>
                                        </li>
                                    ))}

                                    <li><a className="dropdown-item text-danger" href="#">Sale</a></li>
                                </ul>
                            </li>

                            {routes.map((route, index) => (
                                route.show ?
                                <li key={index+'_'} className="nav-item">
                                    <Link className="nav-link" to={route.path}>{route.name}</Link>
                                </li>
                                : ''
                            ))}

                        </ul>

                    </div>
                </nav>

            </div>
        )
    }
}