import { SET_CITY, DEL_CITY, SET_FORECAST } from './../constants';
import { WeatherActionTypes, ICity } from './../types';

export const setCity = (item: ICity): WeatherActionTypes => ({
  type: SET_CITY,
  payload: item,
});

export const delCity = (item: number): WeatherActionTypes => ({
  type: DEL_CITY,
  payload: item
})

// export const setForecast = (item: any): WeatherActionTypes => ({
//   type: SET_FORECAST,
//   payload: item
// })