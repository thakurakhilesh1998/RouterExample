import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

const Menu=()=>{

    return(<>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" to="/about">About</NavLink>
    </>);
}

export {Menu};