import React, { Component } from 'react';


export default class Records extends Component {

    constructor (props) {
        super(props);

        this.state = {
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
        window.ipcRenderer.send("name", this.state.value);
        window.ipcRenderer.on("filtered", () => {
            // console.log(this.props.records[0].name);
            this.setState({
                name: this.props.records[0].name,
                id: this.props.records[0].id,
                email: this.props.records[0].email,
                pass: this.props.records[0].password,
                web: this.props.records[0].web
            });
            // console.log("event received");
            // console.log(this.state.name);
        })
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }


render () {
    // console.log(this.props.records[0].name);
    console.log(this.state.id);
    console.log(this.state.name);
    console.log(this.state.pass);
    console.log(this.state.email);
    console.log(this.state.web);
    
    



    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value}
            onChange={this.handleChange}/>
            <button type="Submit">find</button>
        </form>
        <ul>
            <li>ID: {this.state.id}</li>
            <li>NAME: {this.state.name}</li>
            <li>LINK:<a href="{this.state.web}">{this.state.web}</a></li>
            <li>PASS: {this.state.pass}</li>
            <li>EMAIL: {this.state.email}</li>
        </ul>
        </div>
    )
}
};
