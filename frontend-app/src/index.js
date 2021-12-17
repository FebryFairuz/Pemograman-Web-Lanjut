import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {createStore} from 'redux';
import './index.css';
import App from './App';
import AuthReducers from "./component/reducers/AuthReducers";

const store = createStore(
  AuthReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
