import React, {Component} from 'react';
import {Layout, Form, Button} from 'element-react';
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

                <Layout.Row gutter="20">
                    <Layout.Col md="8" classname="column-footer">
                        <h6>Links</h6>
                        <ul className="footerbar">
                            <li><Link className="nav-link" to='/'>Home</Link></li>
                            <li><Link className="nav-link" to='/'>Home</Link></li>
                            <li><Link className="nav-link" to='/'>Home</Link></li>
                        </ul>
                    </Layout.Col>

                    <Layout.Col md="8" classname="column-footer">
                        <h6>График работы</h6>
                        <ul className="footerbar">
                            <li>24 часа в сутки</li>
                            <li>7 дней в неделю</li>
                        </ul>
                        <br/>
                        <div className="search-art">
                            <Form inline={true} onSubmit={this.handleSubmit.bind(this)} className="demo-form-inline">
                                <Form.Item>
                                    <input type="name" placeholder="Name" name="name" className="form-control" />
                                </Form.Item>
                                <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                                    <i className="fa fa-search"> </i>
                                </Button>
                            </Form>
                        </div>
                    </Layout.Col>

                    <Layout.Col md="8" classname="column-footer">
                        <h6>Контакты</h6>
                        <ul className="footerbar">
                            <li><i className="fa fa-location-arrow"> </i> <span>ADDRESS</span></li>
                            <li><i className="fa fa-phone"> </i>
                                <span>+7 ZIP
                                    <span className="show_phone">Показать телефон</span>
                                    <a href="tel:+7 " className="phone_number">PHONE</a>
                                </span>
                            </li>
                            <li><i className="fa fa-clock"> </i> <span>Пн - Вс: 10:00 - 18:00</span></li>
                        </ul>

                    </Layout.Col>
                </Layout.Row>

                <div className="row footer-bottom">
                    <div className="col-12 col-sm-6"><p> App Name</p></div>
                    <div className="col-12 col-sm-6"><p className="float-right">Все права защищены &nbsp;&nbsp; © </p></div>
                </div>
            </footer>
        )
    }
}