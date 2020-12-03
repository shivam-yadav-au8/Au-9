import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import img from '../../assests/luemen-carlson-2rOl1KlIsS0-unsplash-removebg-preview.png';
import './Main.scss';
class Main extends Component {
    state = {  }
    render() { 
        return (<div className="main">
            <Navbar></Navbar>
            <div className="title">
                <h1>Hey,I'm</h1>
            </div>
            <div className="name">
                <h1>John</h1>
                <div className="yu"></div>
                </div>
                <div className="bb">
                    <div className="image">
                        <img src={img} alt="image"></img>
                    </div>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </div>
        </div>);
    }
}
 
export default Main;