import * as c from './constants'
import { normalize, schema } from 'normalizr'
import fakeData from '../response.json'

const business = new schema.Entity('businesses')
const schemaToUse = { businesses: [business] }
const normalizeData = (data) => normalize(data, schemaToUse)

getYelpResults = (searchTerm, latitude, longitude, searchRadius, moneyString, limit, offset) => {
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
export const updateOffset = (newOffset) => ({ type: c.UPDATE_OFFSET, newOffset })
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

const setResultsBegin = () => ({ type: c.SET_RESULTS_BEGIN })
const setResultsSuccess = (data) => ({ type: c.SET_RESULTS_SUCCESS, data })
const setResultsFail = (errorMessage) => ({ type: c.SET_RESULTS_FAIL, errorMessage })

export function getResults(searchTerm, latitude, longitude, searchRadius, moneyString, limit, offset) {
  return async function (dispatch) {
    try {
      const results = await dispatch(getYelpResults(searchTerm, latitude, longitude, searchRadius, moneyString, limit, offset))
      dispatch(setResultsBegin)
      const normalizedResults = await normalizeData({businesses: results.payload.data.businesses})
      dispatch(setResultsSuccess(normalizedResults))
    } catch (err) {
      dispatch(setResultsFail)
    }
  }
}

/*
{
  "id": "xTnivXEdEtXrnhp-z4JGvg",
  "alias": "la-parisienne-new-york-5",
  "name": "La Parisienne",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8i6Hgi2iOA06CgDK8ED4pQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/la-parisienne-new-york-5?adjust_creative=AHz3sGxkZjAzv8uu0Q9hqg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AHz3sGxkZjAzv8uu0Q9hqg",
  "review_count": 177,
  "categories": [
      { "alias": "cafes", "title": "Cafes" },
      { "alias": "french", "title": "French" },
      { "alias": "breakfast_brunch", "title": "Breakfast & Brunch" }
  ],
  "rating": 4.5,
  "coordinates": { "latitude": 40.70961, "longitude": -74.0093799 },
  "transactions": [ "pickup", "delivery" ],
  "price": "$$",
  "location": {
      "address1": "9 Maiden Ln",
      "address2": null,
      "address3": "",
      "city": "New York",
      "zip_code": "10038",
      "country": "US",
      "state": "NY",
      "display_address": [ "9 Maiden Ln", "New York, NY 10038" ]
  },
  "phone": "+16467564911",
  "display_phone": "(646) 756-4911",
  "distance": 450.6092052184947
},
*/
