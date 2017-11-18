import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const ipc = window.ipcRenderer;
// const { app } = electron.remote;

class App extends Component {


  componentDidMount() {
    // console.log(ipcRenderer);
    // ipc.on('test', (e, args) => {
    //   console.log(args);
    //   console.log("hey there !")
    // })
    // ipc.send('ping');
    // ipc.on('pong', () => {
    //   console.log('pong was here');

    // })

  }



  render() {
    const Home = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1>hello</h1>
      </div>

    )
    const Add = () => (
      <div>
        <h1 className="add">Add the table</h1>
      </div>
    )

    return (

      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/add" component= { Add } />
        </div>
      </Router>



    );
  }
}

export default App;
