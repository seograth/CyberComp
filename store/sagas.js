import { SKILL_EDIT, CHAR_EDIT, CHAR_CREATE, PLAYER_EDIT } from "./actions";
import { fork, takeEvery } from 'redux-saga/effects'
import { statInsert } from "./redb";

export function* charCreate() {
    yield takeEvery(CHAR_CREATE, function* (action) {
        const loadDb = yield fork(statInsert, action.payload)
    })
}