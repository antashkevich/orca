import { combineReducers } from 'redux'

import products from './products'

const createRootReducer = (history) =>
  combineReducers({
    products
  })

export default createRootReducer