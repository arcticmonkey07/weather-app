import React, { FC, ChangeEvent, useState } from 'react';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCity, delCity } from '../../redux/actions/weather';
import { Input, Typography, Tag } from 'antd';
import Geocode from "react-geocode";

import { ICity } from '../../redux/types';
import Forecast from '../Forecast/Forecast';

const { Search } = Input;
const { Title } = Typography;

const GOOGLE_API_KEY = 'AIzaSyDhO6aEwEWbUCVvSFRffBE5t2ZLtxks_vU';
const OPEN_WEATHER_KEY = 'd0d3f8027069eff90e6ce91c8e818d52';

const Main: FC = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.cities);
  const [town, setTown] = useState<string>('');
  const [forecast, setForecast] = useState<any>();

  Geocode.setApiKey(GOOGLE_API_KEY);
  Geocode.setLanguage("ru");
  Geocode.setRegion("ru");

  const getLatAndLong = (city: string): void => {
    Geocode.fromAddress(city).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        const { long_name } = response.results[0].address_components[0];

        let api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely,hourly&appid=${OPEN_WEATHER_KEY}`

        fetch(api)
          .then(response => response.json())
          .then(data => {
            const item = {
              id: Date.now(),
              cityName: long_name,
              forecast: data.daily
            }
            console.log(data)
            dispatch(setCity(item));
          })


      },
      error => {
        console.error(error);
      }
    );
  };

  const cityHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTown(e.target.value);
  }

  const onAdd = (): void => {
    getLatAndLong(town);
    setTown('');
  };

  const delHandler = (id: number): void => {
    dispatch(delCity(id));
  };

  return (
    <>
      <div className='addCity__container'>
        <div className="addCity__main">
          <Title className='addCity__title' level={3}>Добавьте город</Title>
          <Search className='addCity__input' placeholder="input city" onSearch={onAdd} onChange={cityHandleChange} value={town} enterButton="Add" />
          <div className='addCity__cities-container'>
            {cities.length ? cities.map((item: ICity) => <Tag className='city' closable onClose={() => delHandler(item.id)} key={item.id}>{item.cityName}</Tag>) : ''}
          </div>
        </div>
      </div>
      {cities.length ? cities.map((item: ICity) => <Forecast cityName={item.cityName} forecast={item.forecast} />) : ''}
    </>
  )
}

export default Main;
