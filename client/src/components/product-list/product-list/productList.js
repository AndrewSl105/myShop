import React, { useState, useEffect }  from 'react'
import withHocs from './productListHoc'
import ProductItem from '../product-item/productItem'
import './product-list.sass'
import {paginationPipe} from '../../pagination-pipe/paginationPipe'
import Pagination from '../../pagination/pagination'
import { ProgressBar } from 'primereact/progressbar'
import { ProgressSpinner } from 'primereact/progressspinner';


const ProductList =(props) => {
    const { data = {} } = props;
    const { products = [] } = data;


    if (!products.length) {
        return <ProgressSpinner />
    }

    const [pageArgs, setPageArgs] = useState({
        currentPage: 1,
        perPage: 10
    });

    const onPrev = () => {
        const updatedState = { ...pageArgs }
        updatedState.currentPage = pageArgs.currentPage - 1
        setPageArgs(updatedState)
    };
    
    const onNext = () => {
        setPageArgs({
        ...pageArgs,
        currentPage: pageArgs.currentPage+1
        })
    };

    const goPage = (n) => {
        setPageArgs({
          ...pageArgs,
          currentPage: n,
        });
    };

    return (
        <div className='product-list-cont'>
         
            <div className='product-list'>
                {
                    paginationPipe(products, pageArgs).map (product => {
                        return <ProductItem key={product.id} product={product}  />
                    })
                }
            </div>
            <Pagination                 
                totalItemsCount={products.length}
                currentPage={pageArgs.currentPage}
                perPage={pageArgs.perPage}
                pagesToShow={8}
                onGoPage={goPage}
                onPrevPage={onPrev}
                onNextPage={onNext}>
            </Pagination>
        </div>
    )
}


export default withHocs(ProductList);