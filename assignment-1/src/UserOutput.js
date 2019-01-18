import React, { Component } from 'react';

class UserOutput extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
                <p>I like.... </p>
            </div>
        );
    }
}

export default UserOutput;