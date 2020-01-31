import { useSelector } from 'react-redux'

export function useSkills (skill) {
    return useSelector(state => skill ? state.skills[skill] : state.skills)
}

export function useChar (char) {
    return useSelector(state => char ? state.char[char] : state.char)
}

export function usePlayer (player) {
    return useSelector(state => player ? state.player[player] : state.player)
}