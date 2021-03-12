import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_CART_ITEM_QUANTITY,
  INCREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from './types';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  console.log(state)

  switch (action.type) {
    case INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const incrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;

      return { ...state, cart: updatedCart };

    case DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const decrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      decrementedItem.quantity--;

      updatedCart[updatedItemIndex] = decrementedItem;

      return { ...state, cart: updatedCart };

    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
        console.log(updatedCart)
      }

      return { ...state, cart: updatedCart };
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      updatedCart.splice(updatedItemIndex, 1);

      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export default cartReducer;
