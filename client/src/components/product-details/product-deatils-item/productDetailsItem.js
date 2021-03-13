import React from 'react'
import './productDetailsItem.sass'
import Carousel from 'react-bootstrap/Carousel'
import { addProductToCart} from '../../../redux/actions';
import { connect } from 'react-redux';
import {useSpring, animated, config} from 'react-spring'


const ProductDetailsItem = props => {

    let slides = props.images.map(el => {
        return <Carousel.Item >
            <img
            className="d-block w-100"
            src={el}
            alt="First slide"
            />
        </Carousel.Item>
    })

    const styles = useSpring({
        to: {opacity: 1, color: 'black', transform:'transform: scale(1)',}, 
        from: {
        opacity: 0, color: 'gray',     
        transform:'transform: scale(0.5)',
        }
    })

    return (
        <animated.div config={config.slow} style={styles}>
            <div className='product-details'>
                <div className='product-cont'>
                    <div className='product-img'>
                        <Carousel slide='false' fade>
                            {slides}
                        </Carousel>
                    </div>
                    <div className='product-description'>
                        <h2>
                            {props.name}
                        </h2>
                        <p>
                            {props.country}
                        </p>
                        <p className='product-price'>
                            {props.price}$
                        </p>
                        <p>
                            {props.category}
                        </p>
                        <button           
                            onClick={() => {
                                props.dispatch(addProductToCart({ ...props.product }));
                            }}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}

export default connect(null, null)(ProductDetailsItem);

