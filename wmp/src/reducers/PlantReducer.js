//plant reducer

import {
    FETCH_DATA,
    UPDATE_PROPERTIES,
    SET_ERROR,
    SET_USER,
  } from '../actions';
  
  const initialState = {
    userId: -1,
    error: '',
    isFetchingData: false,
  };
  
  export const plantReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          isFetchingData: true
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
          isFetchingData: false
        };
      case SET_USER:
        return {
          ...state,
          userId: action.payload
        };
      default:
        return state;
    }
  };