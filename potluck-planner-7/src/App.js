import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Components/homepage.js';
import Login from './Components/Login.js';


function App() {
  return (
    <div className="App">
      
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Log In</Link>
      </nav>

    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
      <Route exact path='/'>
        <Home />
      </Route>


    </div>
  );
}

export default App;
