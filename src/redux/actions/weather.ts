import { SET_CITY, DEL_CITY, SET_GEO_CITY } from './../constants';
import { WeatherActionTypes, ICity } from './../types';

export const setCity = (item: ICity): WeatherActionTypes => ({
  type: SET_CITY,
  payload: item,
});

export const delCity = (item: number): WeatherActionTypes => ({
  type: DEL_CITY,
  payload: item
})

export const setGeoCity = (item: string): WeatherActionTypes => ({
  type: SET_GEO_CITY,
  payload: item
})