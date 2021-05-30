import './App.css';
import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { checkUser } from './store/actions/userActions'
import React from 'react';
import Navbar from './components/Header/Navbar';
import Home from './views/HomePage';
import ProductsPage from './views/ProductsPage';
import Cart from './views/Cart';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './views/ProductPage';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  })

 



  

  return (
    <Router>
     
     <Navbar />

      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:_id" exact component={ProductPage} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Login" exact component={LoginPage} />
          <Route path="/Register" exact component={RegisterPage} />
      </Switch>


    </Router>
  );
}

export default App;
