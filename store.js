import React from 'react'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux'

import {reducer} from './data'

const client = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  responseType: 'json',
  headers: { 'Authorization': 'Bearer dvhgw8axIEU5a4Pi0mR-u9qtif5zv8X0qELiBPsOShlYjEKWjx9wRGl4f_SkaC-_07Eij24LQjzZnq4-ge_ShAv_ngMod8PTNwnPNNwrRLATeuyvWulG3_BMChx4W3Yx' }
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

export default store

/*
Client ID
AHz3sGxkZjAzv8uu0Q9hqg

API Key
dvhgw8axIEU5a4Pi0mR-u9qtif5zv8X0qELiBPsOShlYjEKWjx9wRGl4f_SkaC-_07Eij24LQjzZnq4-ge_ShAv_ngMod8PTNwnPNNwrRLATeuyvWulG3_BMChx4W3Yx
*/
