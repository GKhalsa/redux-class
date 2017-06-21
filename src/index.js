import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
// import createStore from './redux/createStore/createStore';
import {Provider} from 'react-redux';
// import Provider from './react-redux/provider/Provider'
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);
