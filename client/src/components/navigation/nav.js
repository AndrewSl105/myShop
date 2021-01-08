import React from 'react'
import './nav.sass';
import logo from '../images/logo.png'
import cart from '../images/cart.svg'
import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <div className='nav-cont'>
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
