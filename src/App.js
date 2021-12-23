import React from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';

import Home from './Components/homepage';
import Login from './Components/Login.js';
import Signup from './Components/Signup';
import Logout from './Components/Logout.js';
import Event from './Components/eventForms.js';
import Food from './Components/foodForm.js';

// import Guests from './Components/attendeeForm.js';

function App() {
  return (
    <Router>
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

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>
        
        <PrivateRoute path='/logout' component={Logout}>
          <Logout />
        </PrivateRoute>
    
        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
