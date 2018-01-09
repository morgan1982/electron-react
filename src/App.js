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
      records: [],
      record: {
        app: "",
        url: "",
        user: "",
        pass: "",
        email: ""
      },
      showForm: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

  }

  //pass method to the childs
  onGreet() {
    alert("error");
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

  
  changeHandler = (e) => {

    const newState = {...this.state}
    newState.record[e.target.id] = e.target.value;
    this.setState(newState)
  }

  submitHandler = (e) => {
    e.preventDefault();
    const record = [this.state.record];
    let id = this.state.records.length + 1;
    record.push(id);
    
    ipc.send("insert", (e, record));
    this.setState({
      record: {
        app: "",
        url: "",
        user: "",
        pass: "",
        email: ""
      },

    })
    
  }
  devHandler = () => {
    ipc.send("devtoggler");
  }
  formToggler = () => {
    console.log("add form btb clicked")
    let showForm;
    this.state.showForm == false ? showForm = true : showForm = false;
    this.setState({
      showForm
    }) 
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
    let addForm = null;
    if (this.state.showForm === true) {
      addForm = (
        <div className={classes.col2}>
          <Add
            id="addform" 
            changed={(e) => this.changeHandler(e)}
            submited={(e) => this.submitHandler(e)}
            values={this.state.record}
          />
        </div>
      )
    }


    return (

      <Router>
      
        <div className={classes.body}>
        <div className={classes.col1}>
        <div className={classes.devtools}
             onClick={this.devHandler}>dev tools</div>
             
             <div type="button" className={classes.noDrag} onClick={this.formToggler}>toggle form</div>
             <div className={classes.black }>testing</div>
          <Header className="App-header"/> 


          <Switch>
            <Route exact path="/" render={ (props) => ( <Home records={this.state.records}/>)}/>
            <Route exact path="/add" render={(props) => (<Add
                                                          id="addform" 
                                                          changed={(e) => this.changeHandler(e)}
                                                          submited={(e) => this.submitHandler(e)}
                                                          values={this.state.record}/>)}/>
            <Route exact path='/form' render= { (props) => ( <Form name="Foo" /> ) }/>
            <Route
              exact
              path="/records"
              render=
              { (props) => ( <Records records={ this.state.records }/> ) }/>

          </Switch>
          </div>
            {addForm}
        </div>

      </Router>

    );
  }
}

export default App;
