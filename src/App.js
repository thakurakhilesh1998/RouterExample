import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import {Error} from './Error';
import {Services} from './Services';
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
        <Route path="/about" component={()=><About name="About"/>}/>
        <Route component={Error}></Route>
      </Switch>
      </>
    );

}

export default App;
