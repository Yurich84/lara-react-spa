import React, {Component} from 'react';
import {Row, Col, Button, Form, Input} from 'antd';
import { Switch, Route, Link } from 'react-router-dom'


export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    render(){
        return (
            <footer>

                <Row gutter={20}>
                    <Col xs={24} md={8} className="column-footer">
                        <h5>Links</h5>
                        <ul className="footerbar">
                            <li><Link className="nav-link" to='/'>About</Link></li>
                            <li><Link className="nav-link" to='/'>Test</Link></li>
                        </ul>
                    </Col>

                    <Col xs={24} md={8} className="column-footer">
                        <h5>Working time</h5>
                        <ul className="footerbar">
                            <li>24 hours</li>
                            <li>7 days</li>
                        </ul>
                        <br/>
                        <div className="search-art">
                            <Form layout="inline" onSubmit={this.handleSubmit.bind(this)} className="demo-form-inline">
                                <Form.Item>
                                    <Input type="name" placeholder="Name" name="name" className="form-control" />
                                </Form.Item>
                                <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                                    <i className="fa fa-search"> </i>
                                </Button>
                            </Form>
                        </div>
                    </Col>

                    <Col xs={24} md={8} className="column-footer">
                        <h5>Contacts</h5>
                        <ul className="footerbar">
                            <li><i className="fa fa-location-arrow"> </i> <span>{ window.Laravel.address }</span></li>
                            <li><i className="fa fa-phone"> </i>
                                <span>+7 ({ window.Laravel.zip }) { window.Laravel.phone }</span>
                            </li>
                            <li><i className="fa fa-clock"> </i> <span>Пн - Вс: 10:00 - 18:00</span></li>
                        </ul>

                    </Col>
                </Row>

                <div className="row footer-bottom">
                    <div className="col-12 col-sm-6"><p>{ window.Laravel.appName }</p></div>
                    <div className="col-12 col-sm-6"><p className="float-right">All rights reserved &nbsp;&nbsp; © </p></div>
                </div>
            </footer>
        )
    }
}