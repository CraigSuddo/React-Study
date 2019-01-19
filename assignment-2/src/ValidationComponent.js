import React, {Component} from 'react';

class ValidationComponent extends Component {
    constructor(){
        super();
    }

    render() {
        let isLongEnough = false;
        isLongEnough = this.props.textLength > 5 ? true : false;

        return (
            <p>{isLongEnough ? "Long enough" : "Not long enough" }</p>
        );
    }
}

export default ValidationComponent;