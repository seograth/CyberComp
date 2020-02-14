import { SKILL_EDIT, CHAR_EDIT, CHAR_CREATE, PLAYER_EDIT } from "./actions";
import { takeEvery } from 'redux-saga/effects'

export function* test() {
    yield takeEvery('*', function* (action) {
        console.log('sagaetsi', action)
    })
}