import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    change = e => {
        const searchString = e.target.value;

        //if(searchString === '') this.props.search('reset');
        this.setState({ searchString });
    }

    submit = e => {
        e.preventDefault();
        //console.log(this.state.searchString);
        const searchString = this.state.searchString;
        //if(searchString !== '') this.props.search(searchString);
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.submit}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    defaultValue=""
                    placeholder="Category"
                    value={this.state.searchString}
                    onChange={this.change}
                    required />

                <button
                    className="btn btn-danger my-2"
                    type="submit">
                    Search
                </button>
            </form>
        );
    }
}
