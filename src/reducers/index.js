import settingsReducer from "./settings";
import deckReducer from "./deck"
import gameStateReducer from "./gameState";

const combineReducer = {
    deck: deckReducer,
    settings: settingsReducer,
    gameState: gameStateReducer
}

export default combineReducer