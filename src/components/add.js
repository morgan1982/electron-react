import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Add extends Component {

    NavigateHome () {
        this.props.history.push("/");
    }


    render () {


        return (
    <div>
        <h1 className="add">New Record</h1>
        <form action="#">
            <div className="btn-container">
                <label htmlFor="#">App</label>

                <input type="text"/>
                <button id="import" type="submit">import</button>
                <button onClick={ this.NavigateHome.bind(this) }>go</button>
            </div>
        </form>
    </div>
        )

    }
}

export default withRouter(Add);