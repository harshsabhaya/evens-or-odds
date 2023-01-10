import { DECK_DRAW, SET_GAME_STARTED, SET_GUESS } from "../actions/types";

const EVEN = ['2', '4', '6', '8', '10']
const ODD = ['ACE', '3', '5', '7', '9']

const DEFAULT_GAME_STATE = {
    guess: "", correctGuesses: 0
}
const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch(action.type) {
        case SET_GUESS:
            return { ...state, guess: action.guess}
        case SET_GAME_STARTED:
            return DEFAULT_GAME_STATE
        case DECK_DRAW.FETCH_SUCCESS:
            const { value } = action.cards[0]
            const { guess, correctGuesses } = state
            if (
                (guess === "even" && EVEN.includes(value)) || (guess === "odd" && ODD.includes(value))
            ) {
                return { ...state, correctGuesses: correctGuesses+1}
            }
            return state
        default:
            return state
    }
}

export default gameStateReducer