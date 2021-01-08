import React from 'react'
import { useState } from 'react'
import './dashboardSidebar.sass'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaAlignLeft } from 'react-icons/fa';
import {
    Link,
    useRouteMatch,
  } from "react-router-dom";


const DashboardSidebar = () => {

  let { url } = useRouteMatch();
    const [visibleState, setVisibility] = useState()
    return (
        <div class="sidebar-cont">
            <Sidebar visible={visibleState} onHide={() => setVisibility(false)}>
                <ul class="dash-side-list">
                    <li>  
                        <Link to={`${url}`} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/dashProducts`} >
                            Products
                        </Link>
                    </li>
                </ul>
            </Sidebar>
            <Button className='side-btn' onClick={(e) => setVisibility(true)}>
                <FaAlignLeft />
            </Button>
        </div>
    )
}

export default DashboardSidebar


