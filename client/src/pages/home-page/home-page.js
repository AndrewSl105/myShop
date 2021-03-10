import React from 'react'
import './homePage.sass'
import ProductList from '../../components/product-list/product-list/productList'
import Category from '../../components/category/category'

const HomePage = () => {
    return (
        <div className='home-cont'>
            {/* <ProductList />*/ }
            <Category />
        </div>
    )
}

export default HomePage
