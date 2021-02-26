import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import cartReducer from './cartReducer';
import wishListReducer from './wishListReducer';
import { orderByPriceReducer } from './orderByPrice.filter.reducer';

export const rootReducer = combineReducers({
  orderBy: orderByPriceReducer,
  cart: cartReducer,
  wishlist: wishListReducer,
  dataReducer,
});
