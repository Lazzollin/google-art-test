import React, { Component } from 'react'
import CardsHolder from './cards/CardsHolder.jsx'
import Frame from './Frame.jsx'

class Main extends Component {
    
    state = {}
    
    toogleFrame = () => {this.setState((state) => {
        return {frameShow: !this.state.frameShow}
    })}

    componentDidMount() {
        this.setState({
            frameShow: false 
        })
    }
    
    frameRender() {
        return (this.state.frameShow && <Frame {...{toogleFrame: this.toogleFrame}}/>)
    }

    render() { 
        return (
        <div className="App">
            <header className="App-header">
            <CardsHolder {...{toogleFrame: this.toogleFrame}}/>
            {this.frameRender()}
            </header>
        </div>
        );
    }
}
 
export default Main;