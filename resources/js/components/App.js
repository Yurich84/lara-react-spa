import React, { Component } from 'react';
import {Row, Col} from 'antd';

import Header       from './layout/Header';
import Breadcrumbs  from './layout/Breadcrumbs';
import Footer  from './layout/Footer';
import Content      from './layout/Content';


export default class App extends Component {

    render() {

        return (
            <div className="container" id="sidebar">
                <Header />
                <br/>
                <Row gutter={20}>
                    <Col span={24}>
                        <Content />
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }
}

