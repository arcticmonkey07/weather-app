import React, { FC, useState } from 'react';
import './Main.css';
import { Input } from 'antd';
import Geocode from "react-geocode";

const { Search } = Input;

const GOOGLE_API_KEY = 'AIzaSyDhO6aEwEWbUCVvSFRffBE5t2ZLtxks_vU';
const OPEN_WEATHER_KEY = 'd0d3f8027069eff90e6ce91c8e818d52';

const Main: FC = () => {
  const [city, setCity] = useState<string>('');
  const [timezone, setTimezone] = useState<any>([]);

  Geocode.setApiKey(GOOGLE_API_KEY);
  Geocode.setLanguage("ru");
  Geocode.setRegion("ru");

  const getLatAndLong = (city) => {
    Geocode.fromAddress(city).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        const { long_name } = response.results[0].address_components[0];
        setTimezone(prev => [...prev, long_name]);
        
        let api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${OPEN_WEATHER_KEY}`

        fetch(api)
          .then(response => response.json())
          .then(data => console.log(data))
      },
      error => {
        console.error(error);
      }
    );
  };

  const onAdd = () => {
    getLatAndLong(city);
  }

  return (
    <div className='container'>
      <div className="main">
        <h2>Добавьте город</h2>
        <Search className='input' placeholder="input city" onSearch={onAdd} onChange={(e) => setCity(e.target.value)} enterButton />
        {/* <p className='city'>{timezone}</p> */}
        <ul>
          {timezone.map(item => <li className='city' key={item.lat}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Main;
