import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import navStylesReducer from './theeming/navStylesReducer'


export const rootReducer = combineReducers({
  //orderBy: orderByPriceReducer,
  //cart: cartReducer,
  //wishlist: wishListReducer,
  styles: navStylesReducer 
});
