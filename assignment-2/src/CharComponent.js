import React, { Component } from 'react';

class CharComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const style = {
            display: 'inline-block',
            border: '1px solid black',
            padding: '16px',
            margin: '16px',
            textAlign: 'center'
        }

        return (
            <div style={style} onClick={this.props.click}>
                {this.props.char}
            </div>
        )
    }
}

export default CharComponent;