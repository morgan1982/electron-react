import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Add extends Component {
    constructor(props) {
      super(props);

      this.state = {
        app: "",
        url: "",
        user: "",
        pass: "",
        email: ""
      }
    }

    NavigateHome (props) {
        this.props.history.push("/"); // check what this is doing 
    }

    changeHandler = (e) => {
      const record = [...this.state];
      //state[url] = value of the input for the url for instance
      console.log(e.target.value)
      record[e.target.id] = e.target.value;
      this.setState(record)
    } 


    handleSubmit = (event) => {
      event.preventDefault();
      const record = this.state
      console.log(record);
    }


    render () {

        return (
        <div className="App" style={{ backgroundColor: "rgb(237, 239, 243)",
                                      margin: "2em",
                                      border: "2px solid skyblue" }}>
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-2">Site-App
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="app" className="form-control" onChange={this.changeHandler} />
          </div>
          <label className="control-label col-sm-2">Site-Link
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="url" className="form-control" onChange={this.changeHandler}/>
          </div>
          <label className="control-label col-sm-2">User
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="user" className="form-control" onChange={this.changeHandler}/>
          </div>
          <label className="control-label col-sm-2">Password
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="pass" className="form-control" onChange={this.changeHandler}/>
          </div>
          <label className="control-label col-sm-2">Email
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="email" className="form-control" onChange={this.changeHandler}/>
          </div>
        </div>
        <button type="submit" className="btn btn-dark sub">Add Record</button>
      </form>
    </div>
        )

    }
}

export default withRouter(Add);