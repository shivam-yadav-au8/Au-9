import React, { Component } from 'react';
import './Navbar.scss';
class Navbar extends Component {
    state = {
        clicked:true
      }

      handleCick=()=>{
          this.setState({clicked:!this.state.clicked});
      }
    render() { 
        return (<div className="navbar">
           
            <ul className="ul"><l1 className="hm"><i class="fas fa-bars" onClick={this.handleCick}></i></l1>
            {this.state.clicked? <>
            <l1>Home</l1>
            <l1>Services</l1>
            <l1>About</l1>
            <l1>Products</l1>
        </>: null}
        </ul>
            
        </div>  );
    }
}
 
export default Navbar;