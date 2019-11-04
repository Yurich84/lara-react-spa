import React, {Component} from 'react'
import { useParams } from "react-router-dom"

export default class Category extends Component {

    constructor() {
        super();
        this.state = {
            data: {},
        };
    }

    /**
     * Show Category
     */
    loadData(slug) {
        axios.get('/api/categories/'+slug).then(response => {
            this.setState({data: response.data});
        }).catch(error => { console.log(error) });
    };

    componentDidMount() {
        this.loadData(this.props.match.params.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            this.loadData(nextProps.match.params.slug);
        }
    }

	render() {
		return (
			<div>
				<h4 style={{ textAlign: 'center' }}>Category { this.state.data && this.state.data.name }</h4>

			</div>
		)
	}
}
