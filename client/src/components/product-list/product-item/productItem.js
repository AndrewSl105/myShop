import React from 'react';
import './product-item.sass'
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'

const ProductItem = (props) => {
    const images = props.gallery[0]
    const styles = useSpring({opacity: 1, from: {opacity: 0}})
    console.log(props.name)
    return (
        <animated.div style={styles}>
            <div className='product-item-cont'>
                <Link to={`/product/?${props.id}`}>
                    <div className='product-img'>
                        <img src={images} alt='i' />
                    </div>
                    <div className='product-decription'>
                        <h2>
                            {props.name}
                        </h2>
                    </div>
                </Link>
            </div>
        </animated.div>
    )
}


export default ProductItem;