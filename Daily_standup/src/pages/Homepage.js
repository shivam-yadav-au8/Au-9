import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
class Homepage extends Component {
    state = {  }
    handleRedirect=()=>
    {
        this.props.hisory.push('/extended');
    }
    render() { 
        return (<div><h1>Homepage</h1>

        <Link to="/extended">Go to extended</Link>
        <Navbar />
      <Main />
      </div>  );
    }
}
 
export default Homepage;