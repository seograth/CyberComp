import { createStore, combineReducers } from 'redux'
import { skillsReducer, charReducer } from './reducers'

const character = combineReducers({
    char: charReducer,
    skills: skillsReducer
});

export const store = createStore(character);