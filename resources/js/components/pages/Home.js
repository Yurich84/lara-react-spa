import React from 'react'
import {Row, Col, Spin} from 'antd';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            loadCategory: true,
            categoryList: []
        }
    }

    componentDidMount() {
        this.fetchCategories();
    }

    /**
     * Get Categories
     */
    fetchCategories() {
        this.setState({loadCategory: true});
        axios.get('/api/categories').then(response => {
            this.setState({categoryList: response.data});
        }).catch(error => {
            console.log(error);
        }).finally(() => this.setState({loadCategory: false}));
    }

	render() {
		return (
			<Row>
                <div className="gl_kar">
                    <div>We've been making beautiful furniture in individual sizes on Italian equipment since 1995.
                        Delivery and setting up for free.
                    </div>
                    <img src="/imgs/templ/gl.jpg" />
                </div>

                <br/>

                <Spin spinning={this.state.loadCategory} size="large">
                    <Row gutter={20} style={{minHeight:100}}>
                        {this.state.categoryList.map((category, index) => (
                            <Col sm={12} md={6} className="mt-3" key={index} >
                                <Link className="custom_showcase" to={'/category/' + category.slug} >
                                    <Row>
                                        <Col span={14} className="inside">
                                            <h3>{ category.short_name }</h3>
                                            <p>{ category.prod_qty } pcs - from ${category.min_price / 50}</p>
                                        </Col>
                                        <Col span={10}>
                                            <img src={ "/imgs/category/min/" + category.image } width="120" alt={ category.name } />
                                        </Col>
                                    </Row>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Spin>
			</Row>
		)
	}
}