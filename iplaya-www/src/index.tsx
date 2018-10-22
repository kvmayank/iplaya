import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import AppComponent from './components/AppComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import createBrowserHistory from 'history/createBrowserHistory'

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';  

const persistConfig = {
  key: 'layout',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const history = createBrowserHistory();
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
const persistor = persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <AppComponent />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
