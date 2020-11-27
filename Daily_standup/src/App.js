import React from 'react';
import logo from './logo.svg';
import Main from './components/Main';
import Navbar from './components/Navbar';
import extended from './pages/Extended';
import homepage from './pages/Homepage';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/homepage" component={homepage}></Route>
        <Route path="/extended" component={extended}></Route>
        {/* <Redirect to="/"></Redirect> */}
      </Switch>
    </div>
  );
}

export default App;
