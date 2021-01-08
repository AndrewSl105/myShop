import React from 'react'
import './homePage.sass'
import ProductList from '../../components/product-list/product-list/productList'

const HomePage = () => {
    return (
        <div className='home-cont'>
            <ProductList />
        </div>
    )
}

export default HomePage
