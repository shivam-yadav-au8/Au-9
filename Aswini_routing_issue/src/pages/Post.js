import './filesForCSS/Post.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import React from 'react';


const Post=(props)=>{

    // const redirect=(id)=>{
    //     props.history.push("/pos")
    // }
    const handleClick=(abc,def)=>{
        props.history.push(`/det/${abc}/${def}`); 
    };
    return(
        <section >
            <div onClick={()=>handleClick(props.id,props.title)}>
            <h1>id: {props.id}</h1>
            <h2>Title: {props.title}</h2>
            </div>
        </section>
    )}

export default withRouter(Post);