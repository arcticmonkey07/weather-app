import { combineReducers } from 'redux';
import weatherReducer from './reducers/weather';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;