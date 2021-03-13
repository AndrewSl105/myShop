import React from 'react';
import "./category.sass"
import {data} from './cat-data'
import {useSpring, animated} from 'react-spring'

const Category = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})


    return (
        <div className='category-cont'>
            {
                data.map(el => {
                    console.log(el.img)
                    return <animated.div style={props} className='category-item-cont'>
                        <div className="red" style={{backgroundImage: `url(${el.img})`, width: "100%", height: "100%"}}>
                            {el.name}
                        </div>
                    </animated.div>
                })
            }

        </div>
    )
}


export default Category;