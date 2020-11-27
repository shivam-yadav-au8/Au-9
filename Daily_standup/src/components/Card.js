import React, { Component } from 'react';
class Card extends Component {
    state = {  }
    render() { 
        return (<div>
            <img src={this.props.lin} ></img>
        </div> );
    }
}
 
export default Card;