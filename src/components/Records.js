import React, { Component } from 'react';


export default class Records extends Component {

    constructor (props) {
        super(props);

        this.state = {
            record: [],
            value: '',
            id: '',
            name: '',
            link: '',
            pass: '',
            email: '',
            web: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    handleSubmit(event) {
        
        event.preventDefault();
        // the name from the form 
        window.ipcRenderer.send("name", this.state.value);
        window.ipcRenderer.on("filtered", () => {
            // console.log(this.props.records[0]);
            let rawRecord = this.props.records[0];
            let rawArray = Object.values(rawRecord);
            var Record = rawArray.filter((item) => {
                return item !== null;
            })
            console.log("array", Record);


            this.setState({
                record: Record,
                value: ''
            });

        })
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }


render () {

    
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value}
            onChange={this.handleChange}/>
            <button type="Submit">find</button>
        </form>
        <ul>
            {/* {
                this.state.record.map((item, i) => {
                return <li key={i}>{item}</li>
            })} */}
            <li>ID: {this.state.record[1]}</li>
            <li>NAME: {this.state.record[0]}</li>
            <li>LINK:<a href="{this.state.record[5]}">{this.state.record[5]}</a></li>
            <li>PASS: {this.state.record[3]}</li>
            <li>EMAIL: {this.state.record[0]}</li>
        </ul>
        </div>
    )
}
};
