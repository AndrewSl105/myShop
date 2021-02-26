import React from 'react';
import './product-item.sass'
import { Link } from 'react-router-dom';


const ProductItem = (props) => {

    const product = props.product

    const images = props.gallery[0]
    console.log(images)

    console.log(props.name)
    return (
        <div className='product-item-cont'>
            <Link to={`/product/?id=${props.id}`}>
                <div className='product-img'>
                   <img src={images} />
                </div>
                <div className='product-decription'>
                    <h2>
                        {props.name}
                    </h2>
                </div>
            </Link>
        </div>
    )
}


export default ProductItem;