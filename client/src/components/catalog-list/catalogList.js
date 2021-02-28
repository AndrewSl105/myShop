import React from 'react'
import ProductList from '../product-list/product-list/productList'
import './catalogList.sass'



const CatalogList = () => { 
  return (
    <div className='catalog-list-cont'>
        <ProductList />
    </div>
  )
}

export default CatalogList
