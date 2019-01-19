import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
    render() {
        return (
            <div class="UserOutput">
                <p>My name is {this.props.name}</p>
                <p>I like.... </p>
            </div>
        );
    }
}

export default UserOutput;