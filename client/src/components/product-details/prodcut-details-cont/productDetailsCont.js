import React from 'react'
import {useLocation} from "react-router-dom";
//import { Query } from 'react-apollo';
//import { gql } from 'apollo-boost';
//import  { useState, useEffect } from 'react';
//import ProductDetailsItem from '../product-deatils-item/productDetailsItem'
import "./productDetailsCont.sass"
import Spiner from '../../spiner/spiner';
//import _ from 'lodash';
import { connect } from 'react-redux';
import { requestApiData } from '../../../redux/actions';
import { bindActionCreators } from 'redux';
import ProductItem from '../../product-list/product-item/productItem';
import ProductDetailsItem from '../product-deatils-item/productDetailsItem';

/*
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
*/
class productDetailsCont extends React.Component {

    componentDidMount() {
        this.props.requestApiData();
        
    }


    render ()  {
        let id = this.props.location.search
        id = id.substring(1); 
        const products = this.props.products
        let product = products.find(x => x.sku === id)
        console.log(product)
        let name = product && product.name
        let country = product && product.country
        let images = product && product.gallery
        let price = product && product.price
        let category = product && product.category

        if (!product) {
            return <Spiner />
        }
        
        console.log(name)
    
        return (
            <div className='product-details-cont'>
                <ProductDetailsItem
                    name={name}
                    country={country}
                    images={images}
                    price={price}
                    category={category}
                    id={id}
                    product={product && product}
                />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
      products: state.dataReducer,
    };
  };
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiData }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(productDetailsCont);
  

