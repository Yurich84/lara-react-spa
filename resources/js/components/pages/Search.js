import React from 'react'

export default class Search extends React.Component { 

	constructor() {
		super();
		this.state = {
			showSpinner: false,
			prices: [],
			items: [],
			startParams: {
	            max_bedrooms: 0,
	            max_bathrooms: 0,
	            max_storeys: 0,
	            max_garages: 0,
	            name: ''
	        },
			searchParams: {
                bedrooms: 0,
                bathrooms: 0,
                storeys: 0,
                garages: 0,
                name: ''
			},
		}
		this.fetchProperties = this.fetchProperties.bind(this);
	}

	/**
     * Searching Properties
     */
    fetchProperties(item) {
    	let searchParams = Object.assign({}, this.state.searchParams);
    	if(!!item) searchParams[item.target.name] = item.target.value;
    	this.setState({searchParams})

        this.setState({showSpinner: true});
        axios.post('/api/search', {
            ...searchParams,
            min_price: this.state.prices[0],
            max_price: this.state.prices[1]
        })
        .then(response => (
        	this.setState({items: response.data}), 
        	this.setState({showSpinner: false})
    	))
        .catch(function (error) {console.log(error);});
    }

    /**
     * get start params
     */
     fetchStartParams() {
		axios.get('/api/start_params').then(response => (
        	this.setState({startParams: response.data}),
        	this.setState({prices: [response.data.min_price, response.data.max_price]}),
    		this.fetchProperties()
    	)).catch(function (error) {console.log(error);});
     }

    /**
     * Reset Button
     */
    handleReset(e) {
        e.preventDefault();
        this.state.searchParams = this.state.startParams;
        this.fetchStartParams();
        this.serchForm.reset();
    }

    componentWillMount() {
		this.fetchStartParams();
    }

    renderProperties() {
		return this.state.items.map((item, key) => {
		    return (
		        <div key={key} className="row">
                    <div className="col-2">{ item.name }</div>
                    <div className="col-2">{ item.price }</div>
                    <div className="col-2">{ item.bedrooms }</div>
                    <div className="col-2">{ item.bathrooms }</div>
                    <div className="col-2">{ item.storeys }</div>
                    <div className="col-2">{ item.garages }</div>
                </div>   
		    );
		})
	}



	render() {
		return (
			<div>
		        <form ref={el => this.serchForm = el}>
		            <div className="row">
		                <div className="form-group col-3">
		                    <select name="bedrooms" className="form-control" onChange={this.fetchProperties}>
		                        <option value="0">Bedrooms</option>
		                        {[ ...Array(+this.state.startParams.max_bedrooms).keys()].map( (value) => 
									<option key={value} value={value+1}>{value+1}</option>
								 )}
		                    </select>
		                </div>
		                <div className="form-group col-3">
		                    <select name="bathrooms" className="form-control" onChange={this.fetchProperties}>
		                        <option value="0">Bathrooms</option>
		                        {[ ...Array(+this.state.startParams.max_bathrooms).keys()].map( (value) => 
									<option key={value} value={value+1}>{value+1}</option>
								 )}
		                    </select>
		                </div>
		                <div className="form-group col-3">
		                    <select name="storeys" className="form-control" onChange={this.fetchProperties}>
		                        <option value="0">Storeys</option>
		                        {[ ...Array(+this.state.startParams.max_storeys).keys()].map( (value) => 
									<option key={value} value={value+1}>{value+1}</option>
								 )}
		                    </select>
		                </div>
		                <div className="form-group col-3">
		                    <select name="garages" className="form-control" onChange={this.fetchProperties}>
		                        <option value="0">Garages</option>
		                        {[ ...Array(+this.state.startParams.max_garages).keys()].map( (value) => 
									<option key={value} value={value+1}>{value+1}</option>
								 )}
		                    </select>
		                </div>

		                <div className="form-group col-3">
		                    <input type="name" placeholder="Name" name="name" className="form-control" onChange={this.fetchProperties} />
		                </div>
		                

		                <div className="form-group col-3">
		                    <button onClick={this.handleReset.bind(this)} className="btn btn-outline-secondary w-100">Reset</button>
		                </div>

		            </div>

		        </form>

		        <hr/>

	        	{ this.state.showSpinner 
	        		? (
	        			<div className="w-100 text-center">
			                <img src="/imgs/loader.gif" />
			            </div>
	        		)
		            : (this.state.items.length > 0) 
		            ? (
						<div>
			                <div className="row lead">
			                    <div className="col-2">Name</div>
			                    <div className="col-2">Price</div>
			                    <div className="col-2">Bedrooms</div>
			                    <div className="col-2">Bathrooms</div>
			                    <div className="col-2">Storeys</div>
			                    <div className="col-2">Garages</div>
			                </div>
			                
			                { this.renderProperties() }
			            </div>
	            	)
	            	: (
	            		<div>Sorry, we could not find any results</div>
            		)
			    }

		    </div>
		)
	}
}