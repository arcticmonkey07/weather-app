import { SET_CITY, DEL_CITY, SET_GEO_CITY } from './constants';

export interface IWeatherState {
  cities: Array<Object>
  geolocationCity: string
}

export interface ICity {
  id: number
  cityName: string
  forecast: []
}

// Actions
interface ISetCityAction {
  type: typeof SET_CITY,
  payload: ICity
}

interface IDelCityAction {
  type: typeof DEL_CITY,
  payload: number
}

interface ISetGeoCityAction {
  type: typeof SET_GEO_CITY,
  payload: string
}

export type WeatherActionTypes = ISetCityAction | IDelCityAction | ISetGeoCityAction;