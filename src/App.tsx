import React, { FC } from 'react';
import './App.css';

import Main from './components/Main';

const App: FC = () => {

  // useEffect(() => {
    // navigator.geolocation.getCurrentPosition(position => setLatitude(position.coords.latitude));
    // navigator.geolocation.getCurrentPosition(position => setLongitude(position.coords.longitude));
  // }, [])

  // const getGeolocation = () => {
  //   return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => setCity(data.results[8].formatted_address))
  // }

  return (
    <div className='app'>
      <Main />
    </div>
  );
}

export default App;
