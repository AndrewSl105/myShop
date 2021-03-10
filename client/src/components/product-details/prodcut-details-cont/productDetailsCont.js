import React from 'react'
import {useLocation} from "react-router-dom";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ProgressBar } from 'primereact/progressbar';
import ProductDetailsItem from '../product-deatils-item/productDetailsItem'
import "./productDetailsCont.sass"
import Spiner from '../../spiner/spiner';

const productQuery = gql`
    query product($Id: ID!) {
        product(id: $Id) {
            name
            description
            image
            quantity
            price
        }
    }
`;

const productDetailsCont = () => {
    const search = useLocation().search;
    const Id = new URLSearchParams(search).get('id');

    return (
        <Query query={productQuery} variables={{ Id }}>
            {({ data }) => {
                if (!data) return <Spiner />
                const product = data.product;
                return (
                    <div className='product-details-cont'>
                        <ProductDetailsItem product={product} />
                    </div>
                );
            }}
        </Query>
    )
}


export default productDetailsCont

