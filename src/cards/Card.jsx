import React, { Component } from 'react';

class Card extends Component {
    state = { }
    render() { 
        return ( <div className={`card${this.props.position}`} onMouseOver = {() =>
            {
                console.log(`mouse over card :${this.props.absolutePosition}`)
                this.props.updateSelected(this.props.absolutePosition)
                console.log(super.selectedCard)
            }
        } >
            <div className={`image${this.props.absolutePosition}`}>
                {this.playButton(this.props.absolutePosition)}
                <div className='title'>Title lorep ipsum</div>
                <div className='subtitle'>subtitle Lorem ipsum dolor sit</div>
                
            </div>
        </div> );
    }

    playButton(x) {
        if (x === 4) {
            return (
                <div className='videoButton' onClick={() => {
                    this.props.toogleFrame()
                    console.log('click!')
                }}></div>
            )
        }
    }

    openFCiframe() {
        return (
            <iframe className='miframe' width="560" height="315" src="https://www.youtube.com/embed/GbFaFfl2E1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
    }
}
 
export default Card;