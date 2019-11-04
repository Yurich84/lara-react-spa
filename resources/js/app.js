require('./bootstrap');

import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';

import App from './components/App';

render(
    <ConfigProvider locale={enUS}>
        <Router>
            <App/>
        </Router>
    </ConfigProvider>
, document.getElementById('root'));