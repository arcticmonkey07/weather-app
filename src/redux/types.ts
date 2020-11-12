import { SET_CITY, DEL_CITY, SET_FORECAST } from './constants';

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

// interface ISetForecastAction {
//   type: typeof SET_FORECAST,
//   payload: []
// }


export type WeatherActionTypes = ISetCityAction | IDelCityAction ;