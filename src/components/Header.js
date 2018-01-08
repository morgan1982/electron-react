import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './add.css';

const Header = (props) => {

    return (
        <div className={classes.btnGroup}>
                <NavLink type="button"  to="/" exact activeClassName="active"className="btn">Home</NavLink>
                <NavLink type="button" to="/add" activeClassName="active" className="btn">Add</NavLink>
                <NavLink type="button" to="/10" activeClassName="active" className="btn">Record</NavLink>
                <NavLink type="button" to="/records" activeClassName="active" className="btn">Records</NavLink>
                

        </div>

    );
};

export default Header;