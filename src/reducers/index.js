import { DECK, SET_GAME_STARTED, SET_INSTRUCTION_EXPANDED} from '../actions/types'
import fetchStates from './fetchStates'

const DEFAULT_SETTING = {
    gameStarted: false,
    instructionsExpanded: false
}

const rootReducer = (state = DEFAULT_SETTING, action) => {
    switch (action.type) {
        case SET_GAME_STARTED: 
            return {
                ...state,
                gameStarted: action.gameStarted
            }
            
        case SET_INSTRUCTION_EXPANDED:
            return {
                ...state,
                instructionsExpanded: action.instructionsExpanded
            }
        case DECK.FETCH_SUCCESS:
            const {remaining, deck_id } = action
            return {
                ...state, remaining, deck_id, fetchState: fetchStates.success
            }

        case DECK.FETCH_ERROR:
            return {
                ...state, message: action.message, fetchState: fetchStates.error
            }
        default:
            return state
    }
}

export default rootReducer