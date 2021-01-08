import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/home-page/home-page'
import AuthPage from '../pages/auth-page/auth-page'
import DashboardPage from '../pages/dashboard-page/dashboardPage'
import CatalogPage from '../pages/catalog-page/catalogPage'
import productDetailsCont from '../components/product-details/prodcut-details-cont/productDetailsCont'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard" component={DashboardPage} /> 
      <Route path="/catalog" component={CatalogPage} />  
      <Route path="/product" component={productDetailsCont} />  
    </Switch>
  );
}