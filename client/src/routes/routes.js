import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/home-page/home-page'
import AuthPage from '../pages/auth-page/auth-page'
import CatalogPage from '../pages/catalog-page/catalogPage'
import productDetailsCont from '../components/product-details/prodcut-details-cont/productDetailsCont'
import AdminMain from '../components/admin-components/admin-pages/admin-main/adminMain'
import AdminProductList from '../components/admin-components/admin-pages/admin-products-list/adminProductList'
import AdminTheeming from '../components/admin-components/admin-pages/admin-theaming/adminTheeming'
import DashboardSidebar from '../components/admin-components/dashboard-sidebar/dashboardSidebar'




export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/auth" component={AuthPage} />
        <Route
          path="/dashboard"
          render={({ match: { url } }) => (
            <>
              <DashboardSidebar />
              <Route path={`${url}/`} component={AdminMain} exact />
              <Route path={`${url}/dashProducts`} component={AdminProductList} />
              <Route path={`${url}/admTheeming`} component={AdminTheeming} />
            </>
          )}
        />
      <Route path="/catalog" component={CatalogPage} />  
      <Route path="/product" component={productDetailsCont} />  
    </Switch>
  );
}