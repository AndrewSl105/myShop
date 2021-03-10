import React from 'react';
import "./category.sass"
import {data} from './cat-data'
import CategoryItem from '../category-item/category-item';

const Category = (props) => {



    return (
        <div className='category-cont'>
            {
                data.map(el => {
                    return <CategoryItem name={el.name} />
                })
            }

        </div>
    )
}


export default Category;