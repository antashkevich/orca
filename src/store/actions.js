import data from './data/data.json'
const GET_ITEM_ID = 'GET_ITEM_ID'
const GET_LAYOUT = 'GET_LAYOUT'

const initialState = {
  data: { data },
  idItem: null,
  isOpen: true,
  layout: "list"
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
    case GET_LAYOUT: {
      return {
        ...state,
        layout: action.payload,
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

export const changeLayout = (layoutName) => {
  return {
    type: GET_LAYOUT,
    payload: layoutName
  }
}
