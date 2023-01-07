import {SET_GAME_STARTED, SET_INSTRUCTION_EXPANDED} from './types'

export const startGame = () => {
    return {
        type: SET_GAME_STARTED,
        gameStarted: true
    }
}

export const endGame = () => {
    return {
        type: SET_GAME_STARTED,
        gameStarted: false
    }
}

export const expandInstructions = () => {
    return {
        type: SET_INSTRUCTION_EXPANDED,
        instructionsExpanded: true
    }
}

export const collapseInstructions = () => {
    return {
        type: SET_INSTRUCTION_EXPANDED,
        instructionsExpanded: false
    }
}