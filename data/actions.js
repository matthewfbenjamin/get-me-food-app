import * as c from './constants'

getYelpResults = (searchTerm, latitude, longitude, searchRadius, moneyString) => {
  return {
    type: c.GET_RESULTS,
    payload: {
      request: {
        url: `/businesses/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}&radius=${searchRadius}&price=${moneyString}`
      }
    }
  };
}

export const clearSearchTerm = () => ({ type: c.CLEAR_SEARCH_TERM })
export const setCafe = () => ({ type: c.SET_CAFE })
export const setRestaurant = () => ({ type: c.SET_RESTAURANT })
export const setBar = () => ({ type: c.SET_BAR })
export const clearDistance = () => ({ type: c.CLEAR_DISTANCE })
export const setThreeMinutes = () => ({ type: c.SET_THREE_MINUTES })
export const setTenMinutes = () => ({ type: c.SET_TEN_MINUTES })
export const setTwentyMinutes = () => ({ type: c.SET_TWENTY_MINUTES })
export const setMoneyArray = (moneyArray) => ({ type: c.SET_MONEY_ARRAY, moneyArray })
const setLocationBegin = () => ({ type: c.SET_LOCATION_BEGIN })
const setLocationSuccess = (coords) => ({ type: c.SET_LOCATION_SUCCESS, latitude: coords.latitude, longitude: coords.longitude })
const setLocationFail = (errorMessage) => ({ type: c.SET_LOCATION_FAIL, errorMessage })

export function getLocation (navigator) {
  return function (dispatch) {
    dispatch(setLocationBegin)
    navigator.geolocation.getCurrentPosition(
      (position) => dispatch(setLocationSuccess(position.coords)),
      (error) => dispatch(setLocationFail(error.message)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }
}

export function getResults(searchTerm, latitude, longitude, searchRadius, moneyString) {
  return async function (dispatch) {
    const results = await dispatch(getYelpResults(searchTerm, latitude, longitude, searchRadius, moneyString))
    console.log(results)
  }
}