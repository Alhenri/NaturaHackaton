import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import NotFound from './pages/NotFound'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route path='/Cadastro' component={ Cadastro } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);