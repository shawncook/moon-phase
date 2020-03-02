import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/index';
import data from './data'
import './../stylesheets/app.scss';

ReactDOM.render(
  <BrowserRouter>
    <App
      data={data}
    />
  </BrowserRouter>,
  document.getElementById('app')
);
