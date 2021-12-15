import React, { Component } from 'react';
import './timer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    };

    render () {
        const {count} = this.state
        return(
            <div className="myTimer">
               <div className="myInfo"><h1><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></h1></div>
               <div className><h1>{count}</h1></div>
            </div>
        )
    };
    
    componentDidMount(){
        this.myInterval = setInterval(() => {
        this.setState({
            count: this.state.count + 1
        })
    }, 1000)
    }; 
};

export default Counter;