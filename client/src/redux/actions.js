import {
  UPGRATE_NAV_STYLES 
} from './types';



export const  upgrateNavStyles = (horizontalStyles) => {
  return {
    type: UPGRATE_NAV_STYLES ,
    payload: horizontalStyles,
  };
};





/*
export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const removeProductToCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export const removeProductFromFav = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_FAV,
    payload: productId,
  };
};

export const addProductToFavourites = (product) => {
  return {
    type: ADD_FAVOURITES,
    payload: product,
  };
};

export const incrementCartQuantity = (productId) => {
  return {
    type: INCREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const decrementCartQuantity = (productId) => {
  return {
    type: DECREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};
export const ADD_CITY_TO_FILTER = 'ADD_CITY_TO_FILTER';
export const REMOVE_CITY_FROM_FILTER = 'REMOVE_CITY_FROM_FILTER';

export const addCityToFilter = (brand) => {
  return {
    type: ADD_BRAND_TO_FILTER,
    brand,
  };
};

export const removeCityFromFilter = (brand) => {
  return {
    type: REMOVE_BRAND_FROM_FILTER,
    brand,
  };
};
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });

export const ORDER_BY_ASC = 'ORDER_BY_ASC';
export const ORDER_BY_DESC = 'ORDER_BY_DESC';
export const CLEAR_ORDER_BY_PRICE = 'CLEAR_ORDER_BY_PRICE';

export const orderByAsc = () => {
  return {
    type: ORDER_BY_ASC,
  };
};

export const orderByDesc = () => {
  return {
    type: ORDER_BY_DESC,
  };
};

export const clearOrderBy = () => {
  return {
    type: CLEAR_ORDER_BY_PRICE,
  };
};*/
