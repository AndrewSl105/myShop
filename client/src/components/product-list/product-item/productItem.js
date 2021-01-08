import React from 'react';
import './product-item.sass'
import { Link } from 'react-router-dom';


const ProductItem = (props) => {

    const product = props.product
    return (
        <div className='product-item-cont'>
            <Link to={`/product/?id=${product.id}`}>
                <div className='product-img'>
                    <img src={product.image} />
                </div>
                <div className='product-decription'>
                    <h2>
                        {product.name}
                    </h2>
                </div>
            </Link>
        </div>
    )
}


export default ProductItem;