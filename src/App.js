import React, {Component} from 'react';
import classes from './App.css';
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
//utils
import shortener from './utils/object-shorter';

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
      let shortedValues = shortener(records, 'name');
      // console.log(shortedValues)
      this.setState({
        records: shortedValues
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
    let obj = this.state.records.map((obj) => {
      return (
        <div
        key={obj.id}
        className={classes.record}
        > 
          <h1 className={classes.title}>{obj.name}</h1>
          <div>email: {obj.email}</div>
          <div>pass</div>
          <div className={classes.pass}>{obj.password}</div>
        </div>
      ) 
    })

    return (

      <Router>
      
        <div>

          <h1>{this.state.appName}</h1>
          {obj}
          <Header className="App-header"/>
          <Settings
            user={user}
            greet={this.onGreet}
            appChange={this
            .onAppChange
            .bind(this)}
            >
            {this.state.values}
          </Settings>
          <List
            records={this.state.values}
          />
          <Banner logo="hey" user={user}/>
          <div className="btn btn-primary">push</div>
          <Switch>
            <Route exact path="/" render={Home}/>
            <Route exact path="/add" render={Add}/>
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
