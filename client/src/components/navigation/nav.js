import React from 'react'
import './nav.sass';
import logo from '../images/logo.png'
import cart from '../images/cart.svg'
import {useLocation} from "react-router-dom";
import {
    Link
} from "react-router-dom";

const Nav = () => {


    const horizonStyles = {
        width: '100%',
        height: "70px",
        minHeight: 'initial',
        flexFlow: "row"
    }

    const verticalStyles = {
        width: "100px",
        minHeight: "100vh",
        flexFlow: "column"
    }


    const search = useLocation().search;
    const Id = new URLSearchParams(search).get('id');
    return (
        <div className='nav-cont' style={verticalStyles}>
            <div className='logo-cont'>
                <Link to="/">
                    <img src={logo} alt='logo fashion hub' />
                    <h1>
                        Style Hub
                    </h1>
                </Link>
            </div>
            <div className='cart-cont'>
                    <img src={cart} alt='logo fashion hub' />
            </div>
            <div className='nav-left-cont'>
                <ul className='nav-items-list'>
                    <Link to="/auth">
                        Log in
                    </Link>
                    <Link to="/dashboard">
                        Admin
                    </Link>
                    <Link to="/catalog">
                        Catalog
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
