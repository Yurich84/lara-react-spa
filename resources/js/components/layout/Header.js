import React, {Component} from 'react';
import {routes} from '../../routes';
import { Switch, Route, Link } from 'react-router-dom'

export default class Header extends Component {
    render(){
        return (
            <div>
                <header id="header">

                    <div className="container">

                        <div id="logo">
                            <a href="/">
                                logo
                            </a>
                        </div>


                        <div className="header_tel">
                        <span>+7 ZIP_CODE
                            <span className="show_phone">Show Phone</span>
                            <a href="tel:+7 ZIP_CODE PHONE_NUM" className="phone_number">PHONE_NUM</a>
                        </span>
                        </div>

                        <div className="header_cart2">
                            <a href="#"><i className="fa fa-shopping-cart"> </i>
                                <b>Корзина<span>:</span></b>
                                <span className="cart-total-items"><span id="col_kor" className="count">CART_COUNT</span></span>
                                <span className="non_korz">item(s)</span>
                            </a>
                        </div>

                        <div className="header_search row d-none d-sm-inline-flex">

                        </div>

                    </div>
                </header>

                <br clear="all" />

                <nav className="navbar navbar-expand-lg bg-navbar">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars fa-lg"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="sf-menu navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Главная</a></li>

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