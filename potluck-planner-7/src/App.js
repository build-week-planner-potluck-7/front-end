import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Components/homepage.js';
import Login from './Components/Login.js';
import Event from './Components/eventForms.js';
import Food from './Components/foodForm.js';
import Guests from './Components/attendeeForm.js';


function App() {
  return (
    <div className="App">
      
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
      </nav>

    <Switch>
      {/* <Route path='/guests'>
        <Guests />
      </Route> */}

      <Route path='/foodForm'>
        <Food />
      </Route>

      <Route path='/eventForm'>
        <Event />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>
    
      <Route exact path='/'>
        <Home />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
