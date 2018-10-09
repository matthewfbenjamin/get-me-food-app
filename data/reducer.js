import * as c from './constants'

const initState = {
  searchTerm: '',
  location: {
    requesting: false,
    error: null,
    latitude: null,
    longitude: null,
  },
  money: [],
  limit: 20,
  offset: 0,
  searchRadius: 0,
  results: {
    loading: true,
    resultsArray: [],
    resultsObj: {}
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case c.SET_CAFE:
      return {
        ...state,
        searchTerm: 'cafe',
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
    case c.CLEAR_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: '',
      }
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
    case c.CLEAR_DISTANCE:
      return {
        ...state,
        searchRadius: null,
      }
    case c.SET_LOCATION_BEGIN:
      return {
        ...state,
        location: {
          ...state.location,
          requesting: true,
        },
      }
    case c.SET_LOCATION_SUCCESS:
      return {
        ...state,
        location: {
          ...state.location,
          requesting: false,
          latitude: action.latitude,
          longitude: action.longitude,
        },
      }
    case c.SET_LOCATION_FAIL:
      return {
        ...state,
        location: {
          ...state.location,
          error: action.errorMessage,
        },
      }
    case c.SET_MONEY_ARRAY:
      return {
        ...state,
        money: action.moneyArray,
      }
    case c.GET_RESULTS:
      return {
        ...state,
      }
    case c.SET_RESULTS_BEGIN:
      return {
        ...state
      }
    case c.SET_RESULTS_SUCCESS:
      return {
        ...state,
        results: {
          ...state.results,
          resultsArray: [...state.results.resultsArray, ...action.data.result.businesses],
          resultsObj: {
            ...state.results.resultsObj,
            ...action.data.entities.businesses
          },
        }
      }
    case c.UPDATE_OFFSET:
      return {
        ...state,
        offset: action.newOffset,
      }
    default:
      return state;
  }
}