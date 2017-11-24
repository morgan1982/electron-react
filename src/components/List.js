import React from 'react';
import  sortener from './../utils/object-shorter'

const List = (props) => {

    // console.log(props.records);
    let items = props.records;
    // console.log(items);
    let sorted = sortener(items, "name");

    const records = sorted.map((item) => {
        return <li className="list-group-item" key={item.id}>{item.name}</li>   
    })

        

    return (
        <div className="container" style={{ background: 'skyblue' }}>
        <h1>Records</h1>
        <div className="row">
            <div className="col-md-6">element 1</div>
            <div className="col-md-6">element 2</div>            
        </div>
        <div className="row">
            <div className="col-md-6 col-lg-3">element 1</div>
            <div className="col-md-6 col-lg-3">element 2</div>
            <div className="col-md-6 col-lg-3">element 3</div>
            <div className="col-md-6 col-lg-3">element 4</div>            
        </div>
        <div className="row justify-content-center">
            <div className="col-md-2">col md 2</div>
            <div className="col-md-2">col md 2</div>
            <div className="col-md-2">col md 2</div>
        </div>
        <div className="jumbotron bg-info">
        <div className="container">
            <h1>Welcome</h1>
            <p>guides for the react  router v4</p>
        </div>
        </div>
        {/* <ul className="list-group">{records}</ul> */}
        </div>
    )
}

export default List;