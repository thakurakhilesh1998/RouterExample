import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import {Error} from './Error';
import {Switch,Route} from 'react-router-dom';

function App() {
 
    return (
      <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route component={Error}></Route>
      </Switch>
      </>
    );

}

export default App;
