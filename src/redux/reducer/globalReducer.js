import { GET_DATA, PUT_SEARCH_DATA } from '../types'

  const initialState = {
    data: []
  }

export default (state = initialState, action) => {
  switch(action.type) {

      case GET_DATA:
        return { ...state }
      case PUT_SEARCH_DATA:
        return { ...state, data: action.payload }
      default:
        return state;  
  }
}