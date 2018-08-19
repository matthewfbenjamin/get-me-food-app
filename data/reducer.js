import * as c from './constants'

const initState = {
  cafes: {
    cafeArray: [],
    loading: false,
    finished: false,
    error: null,
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case c.GET_CAFES:
      return {
        ...state, cafes: {
          ...state.cafes,
          loading: true,
          finished: false,
        }
      }
    case c.GET_CAFES_SUCCESS:
      console.log(action)
      return {
        ...state, 
        cafes: {
          ...state.cafes,
          loading: false,
          finished: true,
          cafes: action.payload.data.businesses,
          error: null,
        }
      }
    case c.GET_CAFES_FAIL:
      return {
        ...state,
        loading: false,
        finished: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}