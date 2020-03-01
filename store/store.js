import { createStore, combineReducers, applyMiddleware } from 'redux'
import { skillsReducer, charReducer, playerReducer } from './reducers'
import createSagaMiddleware from 'redux-saga';

import { charCreate } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const character = combineReducers({
    char: charReducer,
    skills: skillsReducer,
    player: playerReducer
});

export const store = createStore(
    character,
     applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(charCreate);



    