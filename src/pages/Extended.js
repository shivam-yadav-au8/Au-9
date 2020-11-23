import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Extended extends Component {
    state = {  }
    render() { 
        return (<div>
            <h1>Extended</h1>
            <Link to="/homepage">Go to homepage</Link>
        </div>  );
    }
}
 
export default Extended;