import React from 'react';
import { connect } from 'react-redux';
import { fetchDrawCard } from '../actions/deck';


const DrawCard = ({deck_id, fetchDrawCard}) => {
    
    return (
        <div>
            <button onClick={fetchDrawCard(deck_id)}>Draw the next card!</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDrawCard : (deck_id) => () => dispatch(fetchDrawCard(deck_id))
    }
}

export default connect(
    // state destructuring
    // (state) => ({deck_id: state.deck.deck_id})
    // insted of above, below syntax is cleaner 
    ({deck: {deck_id}}) => ({deck_id}),
    mapDispatchToProps
)(DrawCard);
