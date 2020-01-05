import { useSelector } from 'react-redux'

export function useSkills (skill) {
    return useSelector(state => skill ? state.skills[skill] : state.skills)
}