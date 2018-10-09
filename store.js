import React from 'react'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { Actions as RouterActions, Router } from 'react-native-router-flux'
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import dataReducer from './data'
import routerReducer from './router';
import routes from './routes'

const AppNavigator = RouterActions.create(routes)
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('restaurant'))
// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('results'))

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

const reducer = combineReducers({
  nav: navReducer,
  router: routerReducer,
  data: dataReducer,
});

const middleware = []
middleware.push(createReactNavigationReduxMiddleware('root', state => state.nav))

export const ReduxNavigator = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = state => ({
  state: state.nav,
})
export const ReduxRouter = connect(mapStateToProps)(Router)

const client = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  responseType: 'json',
  headers: { 'Authorization': 'Bearer dvhgw8axIEU5a4Pi0mR-u9qtif5zv8X0qELiBPsOShlYjEKWjx9wRGl4f_SkaC-_07Eij24LQjzZnq4-ge_ShAv_ngMod8PTNwnPNNwrRLATeuyvWulG3_BMChx4W3Yx' }
});

middleware.push(thunkMiddleware)
middleware.push(axiosMiddleware(client))

const store = createStore(reducer, applyMiddleware(...middleware))

export default store
