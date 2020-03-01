import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react' 

export * from './selectors'
export * from './store'
export { skillEdit, charEdit, playerEdit, charCreate } from './actions'

export function useActions(actions, deps) {
    const dispatch = useDispatch()
    return useMemo(() => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    }, deps ? [dispatch, ...deps] : deps)
  } 