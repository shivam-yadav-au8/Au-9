import Axios from 'axios';
import React from 'react';
import users from './dummy';

let somedata=[]
const Empty=(props)=>{
    console.log(props)
    console.log(users)

    
    // Axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
    //     [...somedata]=response.data
        
    // });
    // console.log(somedata)
    return(
    <h1>hello: {users[0]}</h1>
        
    );
}
export default Empty;