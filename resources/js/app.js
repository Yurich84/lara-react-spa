require('./bootstrap');

import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import 'element-theme-default';

import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

i18n.use(locale);

import App from './components/App';

render(<Router><App/></Router>, document.getElementById('root'));