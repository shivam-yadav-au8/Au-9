import React, { Component } from 'react';
class Detail extends Component {
    state = {  }
    render() { 
        console.log(this.props.match.params.id)
        return (<div>
            <h1>{this.props.match.params.id}</h1>
            <h1>{this.props.match.params.title}</h1>
        </div>  );
    }
}
 
export default Detail;