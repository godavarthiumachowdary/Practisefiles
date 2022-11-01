

import React from "react";

export default class TwoWayBindingExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: 'uma'
        }
        //this.handleNameChange = this.handleNameChange.bind(this);
    }


    handleNameChange(e) {
        this.setState({
            Name: e.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h2>Register Product</h2>
                <input type="text" onChange={this.handleNameChange.bind(this)} />
                <br />
                <p>Hello!{this.state.Name}</p>
            </div>

        )
    }
}