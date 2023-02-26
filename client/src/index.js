import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import DataProvider from './components/SLAdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducers,compose(applyMiddleware(thunk)));
root.render(
  <>
  <DataProvider>
  <Provider store={store} >

  <App />

  </Provider>
  </DataProvider>
  </>
);

