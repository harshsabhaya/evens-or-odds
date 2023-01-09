import React from 'react';
import { connect } from 'react-redux'

const GameState = ({ remaining, correctGuesses }) => {
    const guessText = correctGuesses === 0 || correctGuesses === 1 ? "guess" : "guesses"
    return (
        <div>
            <p>{remaining} cards remaining</p>
            <p>{correctGuesses} correct {guessText}</p>
        </div>
    )
}

export default connect(
    ({ 
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ({remaining, correctGuesses})
)(GameState);
