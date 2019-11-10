import React, {Component} from 'react'
import { Row, Col, Card, Spin } from 'antd'

export default class Category extends Component {

    constructor() {
        super();
        this.state = {
            category: {},
            models: {},
            loadingModels: true,
        };
    }

    /**
     * Load Category
     */
    fetchCategory(slug) {
        return axios.get('/api/categories/'+slug).then(response => {
            this.setState({category: response.data});
        }).catch(error => { console.log(error) });
    };

    /**
     * Load Product Models
     */
    fetchModels(slug) {
        this.setState({loadingModels: true});
        axios.get('/api/models/by_category/'+slug).then(response => {
            this.setState({models: response.data.data});
        }).catch(error => {
            console.log(error)
        }).finally(() => this.setState({loadingModels: false}));
    };

    componentDidMount() {
        this.fetchCategory(this.props.match.params.slug).then(() => {
            this.fetchModels(this.props.match.params.slug)
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            this.fetchCategory(nextProps.match.params.slug).then(
                this.fetchModels(nextProps.match.params.slug)
            );
        }
    }

	render() {
		return (
			<div>
                <Spin spinning={this.state.loadingModels} size="large">
                    <h1>{ this.state.category && this.state.category.name }</h1>

                    <Row gutter={20}>
                        {_.map(this.state.models, model => {return (
                            (!!model.products.length && model.products[0].image) ?
                            <Col xs={12} sm={8} md={6} lg={4} key={model.id} className="mb-4">
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={"/imgs/products/min/" + model.products[0].image} />}
                                >
                                    <Card.Meta title={'$' + model.price / 50} description={model.name + ' ' + model.line} />
                                </Card>
                            </Col>
                            : ''
                        )})}
                    </Row>
                </Spin>
			</div>
		)
	}
}
