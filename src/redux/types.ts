import { SET_CITY, DEL_CITY } from './constants';

export interface IWeatherState {
  cities: Array<Object>
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

export type WeatherActionTypes = ISetCityAction | IDelCityAction ;