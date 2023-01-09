import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewDeck } from '../actions/deck';
import { endGame, startGame } from '../actions/settings';
import Instructions from './instructions';

class App extends Component {
  startGame = () => {
    this.props.startGame()
    this.props.fetchNewDeck()
  }

  render() {
    console.log("this.props", this.props)
    return (
      <div>
        <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <button onClick={this.props.endGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameStarted: state.gameStarted,
    instructionExpanded: state.instructionExpanded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    endGame: () => dispatch(endGame()),
    fetchNewDeck: () => dispatch(fetchNewDeck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);