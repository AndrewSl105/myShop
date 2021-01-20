import React from 'react';
import './dashboardPage.sass';
import DashboardSidebar from '../../components/admin-components/dashboard-sidebar/dashboardSidebar';
import AdminMain from '../../components/admin-components/admin-pages/admin-main/adminMain';


const DashboardPage = () => {


    return (
        <div className='dashbord-main-cont'>
            <DashboardSidebar/>
            <AdminMain />
        </div>
    )
}

export default DashboardPage;
