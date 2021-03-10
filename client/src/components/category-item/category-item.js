import React from 'react';
import "./category-item.sass"
import {useSpring, animated} from 'react-spring'


const CategoryItem = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div style={props} className='category-item-cont'>
            
        </animated.div>
    )
}


export default CategoryItem;