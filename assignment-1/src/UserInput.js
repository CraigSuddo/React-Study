import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        const style = {
            backgroundColor: "#ffff00",
            padding:"10px",
            border:"1px solid #eee",
            marginBottom:"10px"
        };
        return (
            <input type="text" id="txt" style={style} value={this.props.name} onChange={this.props.changed}></input>
        );
    }
}

export default UserInput;