import { GET_DATA, PUT_SEARCH_DATA } from '../types'

export const getData = (payload) => {
  return {
    type: GET_DATA,
    payload,
  }
}

export const putSearchData = payload => {
  return {
    type: PUT_SEARCH_DATA,
    payload
  }

}