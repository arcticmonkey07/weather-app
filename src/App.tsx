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
