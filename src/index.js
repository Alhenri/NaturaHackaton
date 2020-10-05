import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import './index.css';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);