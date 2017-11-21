import React, { Component } from 'react';

export default class Settings extends Component {

    constructor(props) {
        super();
        this.age = props.user.age;

        this.state = {
            age: "",
            appName: ""
        }

        this.onMakeOlder = this.onMakeOlder.bind(this);
    }
    
    onMakeOlder() {
            this.age += 3;
            this.setState({
                age: this.age
            });
        }
    onAppChange() {
        // here the prop (appName) is passed to the parent
        this.props.appChange(this.state.appName);
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            appName: e.target.value
        })
    }
    


    render () {


        return (
            <div>
                <p>{this.props.user.name}, your age is {this.age}</p>
                <h2>{this.props.children}</h2>
                <button
                onClick={this.onMakeOlder} 
                className="btn btn-danger">Make me older</button>
                <button className="btn btn-positive"
                onClick={this.props.greet}
                >greet</button>
                <div className="input-group">
                    <button className="btn btn-negative"
                            onClick={() => this.onAppChange()}
                    >Change App</button>
                    <input type="text"
                            onChange={(e) => this.handleChange(e)}
                            />
                </div>

            </div>
        )
    }
}

Settings.propTypes = {
    // name: React.propTypes.string
}
