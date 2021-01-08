import React from 'react'
import './dashboardPage.sass'

import {
    useRouteMatch,
    Switch,
    Route
  } from "react-router-dom";
import DashboardSidebar from '../../components/admin-components/dashboard-sidebar/dashboardSidebar';
import AdminMain from '../../components/admin-components/admin-pages/admin-main/adminMain'
import AdminProductList from '../../components/admin-components/admin-pages/admin-products-list/adminProductList'


const DashboardPage = () => {
    let { path } = useRouteMatch();

    return (
        <div className='dashbord-main-cont'>
            <DashboardSidebar/>
            <Switch>
                <Route exact path={path} >
                    <AdminMain />
                </ Route>
                <Route path={path} >
                    <AdminProductList />
                </Route>
            </Switch>
        </div>
    )
}

export default DashboardPage
