import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//routes
import Home from './components/home';
import Header from './components/Header';
import Add from './components/add';
const ipc = window.ipcRenderer;
// const { app } = electron.remote;

class App extends Component {

  componentDidMount() {
    ipc.on('test', (e, args) => {
      console.log(args);
      console.log("hey there !")
    })
    ipc.send('ping');
    ipc.on('pong', () => {
      console.log('pong was here');

    })

  }

  render() {

    return (

      
      <Router>
        <div>
        <Header className="App-header" />
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={Add}/>

        </div>
      </Router>

    );
  }
}

export default App;
