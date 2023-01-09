import settingsReducer from "./settings";
import deckReducer from "./deck"

const combineReducer = {
    deck: deckReducer,
    settings: settingsReducer
}

export default combineReducer