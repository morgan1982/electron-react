import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
const ipcRenderer  = window.ipcRenderer;
// const { app } = electron.remote;




class App extends Component {

  componentDidMount() {
    // console.log(ipcRenderer);
    ipcRenderer.on('test', (e, args) => {
        console.log(args);
        console.log("hey there !")
    })
    ipcRenderer.send('ping');
    ipcRenderer.on('pong', () => {
      console.log('pong was here');
    })


      // console.log(ipcRenderer);
    

    // ipcRenderer.on('test', (e, item) => {
    //     console.log(item);
    //     console.log("listen to event")
    // })
    // console.log('GrandChild did mount.');
  }

  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
