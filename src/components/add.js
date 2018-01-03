import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Add extends Component {

    NavigateHome (props) {
        this.props.history.push("/"); // check what this is doing 
    }


    render () {

        return (
        <div className="App" style={{ backgroundColor: "rgb(237, 239, 243)" }}>
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-2">Site-App
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="app" className="form-control"/>
          </div>
          <label className="control-label col-sm-2">Site-Link
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="site-link" className="form-control"/>
          </div>
          <label className="control-label col-sm-2">User
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="user" className="form-control"/>
          </div>
          <label className="control-label col-sm-2">Password
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="pass" className="form-control"/>
          </div>
          <label className="control-label col-sm-2">Email
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="email" className="form-control"/>
          </div>
        </div>
        <button type="submit" className="btn btn-dark sub">Add Record</button>
      </form>
    </div>
        )

    }
}

export default withRouter(Add);