import { createStore, combineReducers } from 'redux'
import actions from './actions'

const rootReducer = combineReducers({
  actions
})

export const store = createStore(rootReducer)