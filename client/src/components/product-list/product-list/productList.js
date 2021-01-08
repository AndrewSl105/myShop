import React from 'react'
import withHocs from './productListHoc';
import ProductItem from '../product-item/productItem'
import './product-list.sass'
//import products from './developmentList'

const ProductList =(props) => {


    const { data = {} } = props;
    const { products = [] } = data;
    console.log(products)



    return (
        <div className='product-list-cont'>
            {
                products.map (product => {
                    return <ProductItem key={product.id} product={product}  />
                })
            }
        </div>
    )
}


export default withHocs(ProductList);