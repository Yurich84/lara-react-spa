import React, { Component } from 'react';
import {Layout} from 'element-react';

import Header from './layout/Header';
import SideBar from './layout/SideBar';
import Content from './layout/Content';


export default class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Layout.Row gutter="20">
                    {/*<Layout.Col span="6">*/}
                        {/*<SideBar />*/}
                    {/*</Layout.Col>*/}
                    {/*<Layout.Col span="18">*/}
                        <Content />
                    {/*</Layout.Col>*/}
                </Layout.Row>
            </div>
        );
    }
}

