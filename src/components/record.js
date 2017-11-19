import React, {Component} from 'react';

export default class Record extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: ""
        }
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <div>Records</div>
                <div>{this.props.name}</div>
                <div></div>
            </div>
        )
    };

};
