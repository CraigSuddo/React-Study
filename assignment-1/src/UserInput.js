import React, { Component } from 'react';

class UserInput extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <input type="text" id="txt" onChange={this.props.changed}></input>
        );
    }
}

export default UserInput;