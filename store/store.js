import { createStore, combineReducers } from 'redux'
import { skillsReducer } from './reducers'

const character = combineReducers({
    skills: skillsReducer
});

export const store = createStore(character);