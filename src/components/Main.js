import React, { Component,} from 'react';
import Card from './Card';
import List from './List';
import Batch from './Batch';
// import axios from 'axios';
class Main extends Component {
    state = {
        clicked : false,
        name: 'shivam',
        email:'',
        password:'',
        batch:'Ramanujan',
        img:['https://images.unsplash.com/photo-1595705386584-5222ea2727bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1605615016732-03add3ee505d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1605621382161-064df670fd41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'],
        data:[]
    }
    handleClick=()=>
    {
        // console.log("click function");
        this.setState({clicked:!this.state.clicked})
    }
    componentDidMount()
    {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(val=>this.setState({data:val.data})).catch(err=>console.log(err))
    }
    render() {
        console.log(this.state.clicked);
        return (<div>
            <div>{this.state.data.map(value=><h1>{value.id}</h1>)}</div>
        <div>
                <h1>
                {this.state.name}
                </h1>
                <List jsj={this.state.name}></List>
                </div>
                <button onClick={this.handleClick}>Click me</button>
                {this.state.clicked===true?<div>
                    {this.state.img.map(val=><Card lin={val} ></Card>)}
                </div>:<div></div>}
                
        <Batch batch_data={this.state.batch}></Batch>
                </div>);
    }
}

export default Main;