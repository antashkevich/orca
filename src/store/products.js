const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = {
  list: {}
}


export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        list: action.payload
      }
    }
    default:
      return state
  }
}

export const addItem = (id) => {
  return (dispatch, getState) => {
// 
    return dispatch({
      type: GET_PRODUCTS,
      payload: {}
    })
  }
}


