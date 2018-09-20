import * as c from './constants'

const initState = {
  searchTerm: ''
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case c.SET_CAFE:
      return {
        ...state,
        searchTerm: 'cafe',
        searchRadius: 0,
      }
    case c.SET_RESTAURANT:
      return {
        ...state,
        searchTerm: 'restaurant'
      }
    case c.SET_BAR:
      return {
        ...state,
        searchTerm: 'bar'
      }
    case c.SET_THREE_MINUTES:
      return {
        ...state,
        searchRadius: 300,
      }
    case c.SET_TEN_MINUTES:
      return {
        ...state,
        searchRadius: 1000,
      }
    case c.SET_TWENTY_MINUTES:
      return {
        ...state,
        searchRadius: 2000,
      }
    default:
      return state;
  }
}