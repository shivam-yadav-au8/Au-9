import React from 'react';
import {connect} from 'react-redux';
const List = (props) => {
    console.log(props.abc.userid.user)
    return (<div>{props.jsj}</div>);
}
  
// export default List;
// import React, { Component } from 'react';
// class List extends Component {
//     state = {  }
//     rendeListr() { 
//         return (<div>{this.props.jsj}</div>  );
//     }
// }
//  List
const mapstatetoprops=state=>
{
    return{
        abc:state
    };
};
export default connect(mapstatetoprops,{})(List);