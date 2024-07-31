import React, { Component } from 'react'
import Status from './Status';
import './StatusBar.css';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className='statusbar__container'> 
                <Status uploader="true"/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
            </div>
         );
    }
}
 
export default StatusBar;