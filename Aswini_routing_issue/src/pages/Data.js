import React from 'react';
import {Component} from 'react';
import Axios from 'axios';
import Post from './Post';
import {Link} from 'react-router-dom';

class Data extends Component {
    constructor(props){
        super(props)
        this.state = { 
            data_:[]
            }
    }
    
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            this.setState(
                {data_:response.data} 
                )
        });
    }
    
    render() { 
        console.log(this.state.data_)
        console.log(this.props)

        return(<ul>
            {
            this.state.data_.map(post=>{
            return (<li key={post.id}>
                <Post  title={post.title} id={post.id} />
                </li>)
            }
         )
        }
        </ul>)}
    
}

export default Data;