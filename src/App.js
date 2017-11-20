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
const ipc = window.ipcRenderer;


class App extends Component {

  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    this.state = {
      id : '',
      appName: "react",
      name: '',
      records: []
    };

  }


  onInput(e) {
    this.setState({
      id: e.target.value
    })
  }
  onSubmit() {
    // erro props does not have property
    this.props.onSubmit(this.state.id);
  }

  componentDidMount() {
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
      // console.log(items);
      this.setState({records: items})
    })

  }

  render() {
    // console.log("state is: ", this.state.name);
    // console.log(this.state.records);
    // testing props
    let x = 24;
    // console.log(this.props)

    return (

      
      <Router>
        <div>
        <Header className="App-header" />
        <Banner logo="hey"/>
        <Switch>
            <Route exact path="/" render={Home}/>
            <Route exact path="/add" render={Add}/>
            {/* <Route exact path={"/:id"} render={ (props) => (
              <Record name= { this.state.name } x={x}/>
            )}/> */}
            <Route exact path='/form' render= {
              (props) => (
                <Form name="Foo" />
              )
            }/>
            <Route exact path="/records" render= {
              (props) => (
                <Records records={ this.state.records }/>
              )
            }/>
            
            </Switch>
              <p>{console.log(  4 === 4 ? true: false)}</p>
            <form onSubmit={this.onSubmit}>
              <input 
              type="text"
              value={ this.state.value }
              onChange={ this.onInput }
              placeholder="type the record here"/>
              <button type="submit">Search</button>
            </form>
            
        </div>
      </Router>

    );
  }
}

export default App;
