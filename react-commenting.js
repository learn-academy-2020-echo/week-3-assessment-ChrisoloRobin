// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1)this loads a class called Dice from a folder called Dice
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2)loads constructor & props which allow us to pass components through our application
  constructor(props){
    super(props)
    // 3)create a dynatic static for us to reference
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4)this is the static start state of the dice
    let { rollImages, diceLog } = this.state
    // 5)this funcation calculates the random dice roll
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6)this is the state of the new after calculating a new value
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7)this is the output of the application
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 8)this is where the "game" is displayed - dice seen by user
        // also wehere we reference dice mechanic
        <Dice
          // 9) this is a reference function in which the roll is displayed as well as the coresponding side of the dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10) this loads the application through react and outputs the information above
export default Board
