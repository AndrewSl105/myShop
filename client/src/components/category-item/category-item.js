import React from 'react';
import "./category-item.sass"
import {useSpring, animated} from 'react-spring'


const CategoryItem = () => {
    const styles = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div style={styles} className='category-item-cont'>
            <div className='category-item-cont'>
                {props.name}
            </div>
        </animated.div>
    )
}


export default CategoryItem;