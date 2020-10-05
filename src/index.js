import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import NotFound from './pages/NotFound'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro'
import CadastroCliente from './pages/CadastroCliente'
import CadastroLoja from './pages/CadastroLoja'
import Login from './pages/Login'
import Verificação from './pages/Verificação'
import Conta from './pages/Conta'
import BuscarLoja from './pages/BuscarLoja'
import LojasEncontradas from './pages/LojasEncontradas'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route path='/Cadastro' component={ Cadastro } exact />
      <Route path='/CadastroCliente' component={ CadastroCliente } exact />
      <Route path='/CadastroLoja' component={ CadastroLoja } exact />
      <Route path='/Login' component={ Login } exact />
      <Route path='/Verificação' component={ Verificação } exact />
      <Route path='/Conta' component={ Conta } exact />
      <Route path='/BuscarLoja' component={ BuscarLoja } exact />
      <Route path='/LojasEncontradas' component={ LojasEncontradas } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);