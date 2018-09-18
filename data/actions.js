import * as c from './constants'

/*
export function getCafes(location) {
  console.log('in action')
  return {
    type: c.GET_CAFES,
    payload: {
      request: {
        url: `/businesses/search?term=cafe&latitude=40.781480&longitude=-73.949600`
      }
    }
  };
}
*/

// export const setCafe = () => ({ type: c.SET_CAFE })
export const setRestaurant = () => ({ type: c.SET_RESTAURANT })
// export const setBar = () => function(dispatch) { dispatch({ type: c.SET_BAR }) }

export function setBar(text) {
  return { type: c.SET_BAR }
}

export function setCafe() {
  return {
    type: c.SET_CAFE,
  }
}