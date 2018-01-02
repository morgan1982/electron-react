import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//routes
import Home from './components/home';
import Header from './components/Header';
import Add from './components/add';
import Records from "./components/Records";
import Form from "./components/addForm";
import Banner from "./components/Banner";
import Settings from "./components/Settings";
import List from "./components/List";
const ipc = window.ipcRenderer;

class App extends Component {

  constructor(props) {
    super(props);



    this.state = {
      values: [],
      id: '',
      appName: "react",
      name: '',
      records: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

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


    // CONNECTION THE ELECTRON
  
  componentDidMount() {

    ipc.send('selectAll');

    ipc.on('records', (e, records) => {
      // console.log('the records', records);
      // console.log(records[0].name);
      // let parsedRecords = JSON.parse(records);
      // console.log(parsedRecords);
      let values = [];
      // values.push(parsedRecords);
      console.log(values);
      this.setState({
        records: records
      })
    });


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

    let x = 24;

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
    console.log(this.state.records[0]);
    let obj = this.state.records.map((obj) => {
      return (
        <div
        key={obj.id}
        >
          <div>name: {obj.name} email: {obj.email} pass: {obj.password}</div>
        </div>
      )
    })

    return (

      <Router>
      
        <div>

          <h1>{this.state.appName}</h1>
          {obj}
          {/* <h1>{this.state.records[0]}</h1> */}
          <Header className="App-header"/>
          {/* <p>{this.state.records}</p> */}
          <Settings
            user={user}
            greet={this.onGreet}
            appChange={this
            .onAppChange
            .bind(this)}>
            <h1>{this.state.values}</h1>
          </Settings>
          <List
            records={this.state.values}
          />
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
