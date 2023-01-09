import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd}) => {
    return (
        <div>
            <h3>Will it be Even or Odd?</h3>
            <button 
                onClick={setGuessEven}
                style={guess === "even" ? { background: "#00ff64" } : null}
            >Even</button>
            {" "}
            <button 
                onClick={setGuessOdd}
                style={guess === "odd" ? { background: "#00ff64" } : null}
            >Odd</button>            
        </div>
    )
}

export default connect(
    ({gameState: { guess } }) => ({guess}),
    { setGuessEven, setGuessOdd }
)(Guess)