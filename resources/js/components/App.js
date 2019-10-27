import React, { Component } from 'react';
import {Layout} from 'element-react';

import Header from './layout/Header';
import SideBar from './layout/SideBar';
import Content from './layout/Content';


export default class App extends Component {

    render() {

        return (
            <div className="container">
                <Header />
                <Layout.Row gutter="20">
                    <Layout.Col md="8" lg="6">
                        <SideBar />
                    </Layout.Col>
                    <Layout.Col md="6" lg="18">
                        <Content />
                    </Layout.Col>
                </Layout.Row>
            </div>
        );
    }
}

