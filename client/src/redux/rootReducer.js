import { combineReducers } from 'redux';
import dataReducer from './dataReducer';


export const rootReducer = combineReducers({
  //orderBy: orderByPriceReducer,
  //cart: cartReducer,
  //wishlist: wishListReducer,
  styles: dataReducer
});
