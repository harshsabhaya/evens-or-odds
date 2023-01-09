import { SET_GAME_STARTED, SET_INSTRUCTION_EXPANDED} from '../actions/types'
import fetchStates from './fetchStates'

const DEFAULT_SETTING = {
    gameStarted: false,
    instructionsExpanded: false
}

const settingsReducer = (state = DEFAULT_SETTING, action) => {
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
    
        default:
            return state
    }
}

export default settingsReducer