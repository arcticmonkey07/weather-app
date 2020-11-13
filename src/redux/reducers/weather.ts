import { SET_CITY, DEL_CITY, SET_GEO_CITY } from './../constants';
import { IWeatherState, WeatherActionTypes } from './../types';

let savedCities;

if (localStorage.getItem('cities')) {
  savedCities = JSON.parse(localStorage.getItem('cities') || '');
} else {
  savedCities = [];
}

const initialState: IWeatherState = {
  cities: savedCities,
  geolocationCity: ''
};

const weather = (state = initialState, action: WeatherActionTypes): IWeatherState => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        cities: state.cities.concat(action.payload),
      };
    case DEL_CITY:
      return {
        ...state,
        cities: state.cities.filter((item: any) => item.id !== action.payload)
      }
    case SET_GEO_CITY:
      return {
        ...state,
        geolocationCity: action.payload
      }
    default:
      return state;
  }
};

export default weather;