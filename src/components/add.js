import React from 'react';
import { withRouter } from "react-router-dom";



const Add = (props) => {


        return (
        <div className="App" style={{ backgroundColor: "rgb(237, 239, 243)",
                                      margin: "2em",
                                      border: "2px solid skyblue" }}>
      <form className="form-horizontal" onSubmit={props.submited}>
        <div className="form-group">
          <label className="control-label col-sm-2">Site-App
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="app" className="form-control" onChange={props.changed} />
          </div>
          <label className="control-label col-sm-2">Site-Link
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="url" className="form-control" onChange={props.changed}/>
          </div>
          <label className="control-label col-sm-2">User
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="user" className="form-control" onChange={props.changed}/>
          </div>
          <label className="control-label col-sm-2">Password
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="pass" className="form-control" onChange={props.changed}/>
          </div>
          <label className="control-label col-sm-2">Email
          </label>
          <div className="col-sm-10 col-md-4">
            <input type="text" id="email" className="form-control" onChange={props.changed}/>
          </div>
        </div>
        <button type="submit" className="btn btn-dark sub">Add Record</button>
      </form>
    </div>
        )

    }

export default withRouter(Add);