import { createStore, combineReducers, applyMiddleware } from 'redux'
import actions from './actions'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  actions
})


export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)
