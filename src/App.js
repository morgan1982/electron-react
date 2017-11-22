import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//routes
import Home from './components/home';
import Header from './components/Header';
import Add from './components/add';
import Record from "./components/record";
import Records from "./components/Records";
import Form from "./components/addForm";
import Banner from "./components/Banner";
import Settings from "./components/Settings";
const ipc = window.ipcRenderer;

class App extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this
      .onSubmit
      .bind(this);
    this.onInput = this
      .onInput
      .bind(this);

    this.state = {
      values: [],
      id: '',
      appName: "react",
      name: '',
      records: []
    };
    console.log("consructor");
    setTimeout(() => {
      this.setState({status: 1})
    }, 2000)
  }

  componentWillMount() {
    // console.log("componentWillmount");
  }
  componentDidMount() {
    // console.log('component did mount')
  }
  componentWillReceiveProps(nextProps) {
    // console.log("componentWillReiceive props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("should component update", nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log("component will update", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDid update", prevProps, prevState);
  }
  componentWillUnmount() {
    // console.log("componentWillunmount");
  }
  //pass method to the childs
  onGreet() {
    alert("error");
  }
  // name comes from the method inside the settins component
  onAppChange(name) {
    this.setState({appName: name})
  }

  onInput(e) {
    this.setState({id: e.target.value})
  }
  onSubmit() {
    // erro props does not have property
    this
      .props
      .onSubmit(this.state.id);
  }

  componentDidMount() {

    ipc.send('selectAll');

    ipc.on('records', (e, records) => {
      // console.log(records);
      let values = records.map((items) => {
        return Object
          .values(items)
          .filter((vals) => {
            return vals !== null;
          })
      })
      console.log(values);
      this.setState({values})
    });

    // console.log(rec);

    ipc.on('test', (e, args) => {
      console.log(args);
      console.log("hey there !")
    })
    ipc.send('ping');
    ipc.on('pong', () => {
      console.log('pong was here');

    })
    ipc.on('items', (e, items) => {
      this.setState({records: items});
    })
    ipc.on('filtered', (e, items) => {
      console.log(items);
      this.setState({records: items})
    })

  }

  render() {
    // console.log("state is: ", this.state.name); console.log(this.state.records);
    // testing props
    let x = 24;
    // console.log(this.props)
    let user = {
      name: "john",
      lastName: "doe",
      age: 25,
      hobbies: [
        "catch",
        "surfing",
        "eating",
        "sleeping",
        "books",
        "painting"
      ]
    }

    return (

      <Router>
        <div>
          <ul>

            {(this.state.values).map((record, i) => {
              return <li key={i}>
                <div className="records">
                  <div className="rec-container">
                    <div className="recLabel">ID:</div>
                    <div>{record[1]}</div>
                  </div>
                  <div className="rec-container">
                    <div className="recLabel">NAME:</div>
                    <div>{record[2]}</div>
                  </div>
                  <div className="rec-container">
                    <div className="recLabel">USER:</div>
                    <div>{record[4]}</div>
                  </div>
                  <div className="rec-container">
                    <div className="recLabel">PASSWORD:</div>
                    <div>{record[3]}</div>
                  </div>
                </div>
              </li>
            })}

          </ul>
          <h1>{this.state.appName}</h1>
          <Header className="App-header"/>
          <Settings
            user={user}
            greet={this.onGreet}
            appChange={this
            .onAppChange
            .bind(this)}>
            <p>the children</p>
          </Settings>
          <Banner logo="hey" user={user}/>
          <div className="btn btn-primary">push</div>
          <Switch>
            <Route exact path="/" render={Home}/>
            <Route exact path="/add" render={Add}/> {/* <Route exact path={"/:id"} render={ (props) => (
              <Record name= { this.state.name } x={x}/>
            )}/> */}
            <Route exact path='/form' render= { (props) => ( <Form name="Foo" /> ) }/>
            <Route
              exact
              path="/records"
              render=
              { (props) => ( <Records records={ this.state.records }/> ) }/>

          </Switch>
          <p>{console.log(4 === 4
              ? true
              : false)}</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onInput}
              placeholder="type the record here"/>
            <button type="submit">Search</button>
          </form>

        </div>
      </Router>

    );
  }
}

export default App;
