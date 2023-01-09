import {FETCH_DECK_RESULT, SET_GAME_STARTED, SET_INSTRUCTION_EXPANDED} from '../actions/types'

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
        case FETCH_DECK_RESULT:
            const {remaining, deck_id } = action
            return {
                ...state, remaining, deck_id
            }
        default:
            return state
    }
}

export default rootReducer