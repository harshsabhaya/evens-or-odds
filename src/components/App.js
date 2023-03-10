import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewDeck } from '../actions/deck';
import { endGame, startGame } from '../actions/settings';
import fetchStates from '../reducers/fetchStates';
import Card from './Card';
import DrawCard from './DrawCard';
import GameState from './GameState';
import Guess from './Guess';
import Instructions from './instructions';

class App extends Component {
  startGame = () => {
    this.props.startGame()
    this.props.fetchNewDeck()
  }

  render() {

    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occured.</p>
          <p>{this.props.message}</p>
        </div>
      ) 
    } 
    return (
      <div>
        <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <GameState />
            <br />
            <Guess />
            <br />
            <DrawCard />
            <hr />
            <Card />
            <hr />
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

  // access nested object
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state

  return { gameStarted, fetchState, message}
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    endGame: () => dispatch(endGame()),
    fetchNewDeck: () => dispatch(fetchNewDeck())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);