import data from "./data/data.json"
const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = {
  data: { data }
}


export const actions = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        // data: action.payload
      }
    }
    default:
      return state
  }
}

export default actions

export const addItem = (id) => {
  return (dispatch, getState) => {
// 
    return dispatch({
      type: GET_PRODUCTS,
      payload: {}
    })
  }
}


