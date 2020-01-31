import { createStore, combineReducers } from 'redux'
import { skillsReducer, charReducer, playerReducer } from './reducers'

const character = combineReducers({
    char: charReducer,
    skills: skillsReducer,
    player: playerReducer
});

export const store = createStore(character);