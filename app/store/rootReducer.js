import { combineReducers } from "@reduxjs/toolkit";
import weatherSliceReducer from './slices/weatherSlice';

const rootReducer = combineReducers({
  weather: weatherSliceReducer,
});

export default rootReducer;