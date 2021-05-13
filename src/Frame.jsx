import React, { Component } from 'react';
import './App.css';

class Frame extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <button className='mButton' onClick={
                    this.props.toogleFrame()
                }></button>
                <iframe className='miframe'  src="https://www.youtube.com/embed/GbFaFfl2E1k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
         );
    }
}
 
export default Frame;