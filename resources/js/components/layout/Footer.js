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
                            <li><Link className="nav-link" to='/'>Home</Link></li>
                            <li><Link className="nav-link" to='/'>Home</Link></li>
                            <li><Link className="nav-link" to='/'>Home</Link></li>
                        </ul>
                    </Col>

                    <Col xs={24} md={8} className="column-footer">
                        <h5>График работы</h5>
                        <ul className="footerbar">
                            <li>24 часа в сутки</li>
                            <li>7 дней в неделю</li>
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
                            <li><i className="fa fa-location-arrow"> </i> <span>ADDRESS</span></li>
                            <li><i className="fa fa-phone"> </i>
                                <span>+7 ZIP
                                    <a href="tel:+7 PHONE" className="phone_number">PHONE</a>
                                </span>
                            </li>
                            <li><i className="fa fa-clock"> </i> <span>Пн - Вс: 10:00 - 18:00</span></li>
                        </ul>

                    </Col>
                </Row>

                <div className="row footer-bottom">
                    <div className="col-12 col-sm-6"><p> App Name</p></div>
                    <div className="col-12 col-sm-6"><p className="float-right">Все права защищены &nbsp;&nbsp; © </p></div>
                </div>
            </footer>
        )
    }
}