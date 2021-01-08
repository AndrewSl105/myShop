import React from 'react'
import './productDetailsItem.sass'

const ProductDetailsItem = props => {
    const product = props.product

    return (
        <div className='product-details'>
            <div className='product-cont'>
                <div className='product-img'>
                    <img src={product.image} />
                </div>
                <div className='product-description'>
                    <h2>
                        {product.name}
                    </h2>
                    <p>
                        {product.description}
                    </p>
                    <p className='product-price'>
                        {product.price}
                    </p>
                    <p>
                        {product.quantity}
                    </p>
                </div>
            </div>
        </div>
    )
}



export default ProductDetailsItem
