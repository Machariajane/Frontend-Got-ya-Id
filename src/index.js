import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './redux/Store'

axios.defaults.baseURL= 'https://proud-walleye-ideally.ngrok-free.app/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token')


ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
)


