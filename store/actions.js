export const SKILL_EDIT = 'SKILL_EDIT'
export const CHAR_EDIT = 'CHAR_EDIT'
export const CHAR_CREATE = 'CHAR_CREATE'
export const PLAYER_EDIT = 'PLAYER_EDIT'

export function skillEdit (payload) {
    return {type: SKILL_EDIT, payload}
}

export function charEdit (payload) {
    return {type: CHAR_EDIT, payload}
}

export function charCreate (payload) {
    return {type: CHAR_CREATE, payload}
}

export function playerEdit (payload) {
    return {type: PLAYER_EDIT, payload}
}
