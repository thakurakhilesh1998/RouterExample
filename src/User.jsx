import React from 'react';
import {useParams} from 'react-router-dom';

const User=({match})=>{
    const {name,lname}=useParams();
    return(<>
        <h3>User Account</h3>
        <h4>Your name is: {name} {lname}</h4>
    </>);
}

export {User};