import React, {Component} from 'react';
import {routes} from '../../routes';
import { Route, Switch } from 'react-router-dom'

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default class Content extends Component {

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <Switch>
                        {routes.map((route, index) => (
                            <RouteWithSubRoutes key={index} {...route} />
                        ))}
                    </Switch>
                </section>
            </div>
        )
    }
}