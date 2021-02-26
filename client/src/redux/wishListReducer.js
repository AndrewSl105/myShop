import { ADD_FAVOURITES, REMOVE_PRODUCT_FROM_FAV } from './types';

const initialState = {
  favourites: [],
};

const wishListReducer = (state = initialState, action) => {
  let updatedItemIndex;
  let updatedFavourites;

  switch (action.type) {
    case ADD_FAVOURITES:
      updatedFavourites = [...state.favourites];
      updatedItemIndex = updatedFavourites.findIndex(
        (product) => product.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedFavourites.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedFavourites[updatedItemIndex],
        };

        updatedItem.quantity++;
        updatedFavourites[updatedItemIndex] = updatedItem;
      }

      return { ...state, favourites: updatedFavourites };
    case REMOVE_PRODUCT_FROM_FAV:
      updatedFavourites = [...state.favourites];
      updatedItemIndex = updatedFavourites.findIndex(
        (item) => item.id === action.payload
      );

      updatedFavourites.splice(updatedItemIndex, 1);

      return { ...state, favourites: updatedFavourites };
    default:
      return state;
  }
};

export default wishListReducer;
