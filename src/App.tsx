import React, { FC } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware  } from 'redux';
import rootReducer from './redux/reducers/weather';
import thunk from 'redux-thunk';

import Main from './components/Main/Main';
import Geolocation from './components/Geolocation/Geolocation';

const App: FC = () => {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  // const getGeolocation = () => {
  //   return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => setCity(data.results[8].formatted_address))
  // }

  return (
    <Provider store={store}>
      <div className='app'>
        <Main />
        <Geolocation />
      </div>
    </Provider>
  );
}

export default App;
