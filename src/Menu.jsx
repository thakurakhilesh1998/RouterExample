import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

const Menu=()=>{

    return(<>
        <div className="menu_style">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink exact activeClassName="active" to="/services">Services</NavLink>
            <NavLink exact activeClassName="active" to="/about">About</NavLink>
            <NavLink exact activeClassName="active" to="/user">User</NavLink>
        </div>
    </>);
}

export {Menu};