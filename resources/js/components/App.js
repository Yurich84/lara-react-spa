import React, { Component } from 'react';
import {Layout} from 'element-react';

import Header       from './layout/Header';
import Breadcrumbs  from './layout/Breadcrumbs';
import Footer  from './layout/Footer';
import SideBar      from './layout/SideBar';
import Content      from './layout/Content';


export default class App extends Component {

    render() {

        return (
            <div className="container" id="sidebar">
                <Header />
                <br/>
                <Layout.Row gutter="20">
                    <Layout.Col span="24">
                        <Content />
                    </Layout.Col>
                </Layout.Row>
                <Footer />
            </div>
        );
    }
}

