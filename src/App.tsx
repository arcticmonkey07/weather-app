import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Geocode from "react-geocode";

import Main from './components/Main';

const GOOGLE_API_KEY = 'AIzaSyDhO6aEwEWbUCVvSFRffBE5t2ZLtxks_vU';
const OPEN_WEATHER_KEY = 'd0d3f8027069eff90e6ce91c8e818d52';

const App: FC = () => {
  const [city, setCity] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(position => setLatitude(position.coords.latitude));
    // navigator.geolocation.getCurrentPosition(position => setLongitude(position.coords.longitude));
  }, [])

  Geocode.setApiKey(GOOGLE_API_KEY);
  Geocode.setLanguage("ru");
  Geocode.setRegion("ru");

  const getLatAndLong = (city) => {
    Geocode.fromAddress(city).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
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

  const formHandler = (e) => {
    e.preventDefault();
    getLatAndLong(city);
  }

  // const getGeolocation = () => {
  //   return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => setCity(data.results[8].formatted_address))
  // }

  return (
    <div>
      <p>Ваш город?</p>
      {/* <button onClick={getGeolocation}>yes</button>
      <button>no</button>
      <p>{city}</p> */}

      <form onSubmit={formHandler}>
        <input onChange={(e) => setCity(e.target.value)} />
        <button type='submit'>send</button>
      </form>
      {/* {timezone} */}
    </div>
  );
}

export default App;
