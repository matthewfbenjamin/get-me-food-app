import React from 'react'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import dataReducer from './data'
import routerReducer from './router';

const reducer = combineReducers({
  routes: routerReducer,
  data: dataReducer,
});

const client = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  responseType: 'json',
  headers: { 'Authorization': 'Bearer dvhgw8axIEU5a4Pi0mR-u9qtif5zv8X0qELiBPsOShlYjEKWjx9wRGl4f_SkaC-_07Eij24LQjzZnq4-ge_ShAv_ngMod8PTNwnPNNwrRLATeuyvWulG3_BMChx4W3Yx' }
});

const middleware = []
middleware.push(thunkMiddleware)
middleware.push(axiosMiddleware(client))

const store = createStore(reducer, applyMiddleware(...middleware))

export default store
