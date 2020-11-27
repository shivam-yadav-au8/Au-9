import Data from './Data';
import Empty from './Empty';
import Post from './Post';
import Detail from './Detail';
import {Switch,Route} from 'react-router-dom';

import React, { Component }  from 'react';
// const Here=(props)=>{

//     props.history.push('/')

//     return(
//     <link to={'/'}><div>Error 404</div>go back</link>)
    
// }
const Routes = () => {
    return ( 
        <Switch>
            <Route exact path='/'  component={Data}/>
            <Route exact path='/pos' component={Post}/>
            <Route exact path='/det/:id/:title' component={Detail}/>
        </Switch>
     );
}
 
export default Routes;