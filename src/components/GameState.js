import React from 'react';
import { connect } from 'react-redux'

const correctGuessKeyRecord = "CORRECT_GUESS_RECORD_IN_DECK"

const checkRecord = (correctGuesses) => {
    const record = Number(localStorage.getItem(correctGuessKeyRecord))

    
    if (correctGuesses > record) {
        localStorage.setItem(correctGuessKeyRecord, correctGuesses)
        return { record: correctGuesses, isNewRecord: true };
    }

    return { record, isNewRecord: false  };
}

const GameState = ({ remaining, correctGuesses }) => {
    const guessText = correctGuesses === 0 || correctGuesses === 1 ? "guess" : "guesses"
    const { record, isNewRecord } = checkRecord(correctGuesses)
    const recordText = isNewRecord ? "🎉 New Record" : "Record"

    return (
        <div>
            <h3>{recordText}: {record}</h3>
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

