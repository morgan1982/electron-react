import React from 'react';

import shortener from '../utils/object-shorter';
import classes from '../App.css';





const Home = (props) => {

    let obj = props.records.map((obj) => {
      return (
        <div
        key={obj.id}
        className={classes.record}
        > 
          <h1 className={classes.title}>{obj.name}</h1>
          <div>
            <div>email: {obj.email}</div>
            <div>url: {obj.web}</div>
          </div>
          <div>
            <div>user: {obj.user}</div>
          </div>
          <div className={classes.passContainer}>pass
            <div className={classes.pass}>{obj.password}</div>
          </div>
        </div>
      ) 
    })

    return (
      <div>
        {obj}
    </div>
    )


  }

  export default Home;