import data from './data/data.json'
const GET_ITEM_ID = 'GET_ITEM_ID'

const initialState = {
  data: { data },
  idItem: null,
  isOpen: true
}


export const actions = (state = initialState, action = {}) => {
  console.log(state)
  switch (action.type) {
    case GET_ITEM_ID: {
      return {
        ...state,
        idItem: action.payload.id,
        isOpen: action.payload.isOpen
      }
    }
    default:
      return state
  }
}

export default actions

export const changeItemId = (id, isOpen) => {
  return {
    type: GET_ITEM_ID,
    payload: {
      id,
      isOpen
    }
  }
}
