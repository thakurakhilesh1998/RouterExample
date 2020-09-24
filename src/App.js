import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import {Error} from './Error';
import {Services} from './Services';
import {User} from './User';
import {Switch,Route} from 'react-router-dom';
import {Menu} from './Menu';

function App() {
 
    return (
      <>
      <Menu/>
      <Switch>
        <Route exact path="/" component={()=>
          <Home name="Home"/>
        }/>
        <Route exact path="/services" render={()=>
          <Services name="Services"/>
        }></Route>
        <Route exact path="/about" component={()=><About name="About"/>}/>
        <Route path="/user/:name/:lname" component={User}/>
        <Route component={Error}></Route>
      </Switch>
      </>
    );

}

export default App;
