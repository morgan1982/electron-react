import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//routes
import Home from './components/home';
import Header from './components/Header';
import Add from './components/add';
import Record from "./components/record";
import Form from "./components/addForm";
const ipc = window.ipcRenderer;
// const { app } = electron.remote;

class App extends Component {

  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    this.state = {
      id : '',
      appName: "react",
      name: ''
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
        // console.log(items[0].name);
        var appName = items[0].name;
        this.setState({name: appName});
    })

  }

  render() {
    console.log("state is: ", this.state.name);
    // console.log(this.props)

    return (

      
      <Router>
        <div>
        <Header className="App-header" />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={Add}/>
            <Route path={"/:id"} render={ (props) => (
              <Record name= { this.state.name }/>
            )}/>
            <Route path='/form' render= {
              (props) => {
                <Form name="Foo" />
              }
            }/>
            
            </Switch>

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
