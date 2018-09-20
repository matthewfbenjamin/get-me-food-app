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

export const setCafe = () => ({ type: c.SET_CAFE })
export const setRestaurant = () => ({ type: c.SET_RESTAURANT })
export const setBar = () => ({ type: c.SET_BAR })
export const setThreeMinutes = () => ({ type: c.SET_THREE_MINUTES })
export const setTenMinutes = () => ({ type: c.SET_TEN_MINUTES })
export const setTwentyMinutes = () => ({ type: c.SET_TWENTY_MINUTES })

const setLocationBegin = () => ({ type: c.SET_LOCATION_BEGIN })
const setLocationSuccess = (coords) => ({ type: c.SET_LOCATION_SUCCESS, latitude: coords.latitude, longitude: coords.longitude })
const setLocationFail = (errorMessage) => ({ type: c.SET_LOCATION_FAIL, errorMessage })

export const getLocation = (navigator) => {
  return (dispatch) => {
    dispatch(setLocationBegin)
    navigator.geolocation.getCurrentPosition(
      (position) => dispatch(setLocationSuccess(position.coords)),
      (error) => dispatch(setLocationFail(error.message)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }
}
