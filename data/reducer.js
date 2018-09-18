import * as c from './constants'

const initState = {
  searchTerm: ''
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case c.SET_CAFE:
    console.log('SETTING CAFE!')
      return {
        ...state,
        searchTerm: 'cafe'
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
    default:
      return state;
  }
}