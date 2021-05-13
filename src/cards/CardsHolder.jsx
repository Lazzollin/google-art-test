import React from 'react';
import '../App.css';
import Card from './Card.jsx';

class CardsHolder extends React.Component {
    state = {selectedCard: 2}

    updateSelected = (x) => {this.setState((state) => {
        return {selectedCard: x}
    })}

    renderCards() {
        let i = 0
        let positionsArray = [0,1,0,0,0]
        while (i < 5) {
            if ( i === this.state.selectedCard) {
                positionsArray[i] = 0
            } else if (i === this.state.selectedCard-1) {
                positionsArray[i] = 1
            } else if (i === this.state.selectedCard+1) {
                positionsArray[i] = 1
            } else if (i === this.state.selectedCard-2) {
                positionsArray[i] = 2
            } else if (i === this.state.selectedCard+2) {
                positionsArray[i] = 2
            } else if (i === this.state.selectedCard-3) {
                positionsArray[i] = 3
            } else if (i === this.state.selectedCard+3) {
                positionsArray[i] = 3
            } else if (i === this.state.selectedCard-4) {
                positionsArray[i] = 4
            } else if (i === this.state.selectedCard+4) {
                positionsArray[i] = 4
            }
            i++
        }
        console.log(positionsArray)
        let key = -1
        return (
            positionsArray.map((value) => {
                key++
                return <Card {
                    ...{position: value,
                    key: key,
                    absolutePosition: key,
                    updateSelected: this.updateSelected,
                    toogleFrame: this.props.toogleFrame
                }
                }/>
            })
        )
    }

    render() { 
        return ( 
          <div className='horizontal-cards'>
              {this.renderCards()}
          </div>
      )
      }
  }
   
export default CardsHolder;