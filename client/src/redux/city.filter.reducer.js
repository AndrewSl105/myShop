import { ADD_CITY_TO_FILTER, REMOVE_CITY_FROM_FILTER } from '../actions';

export const cityFilterReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_CITY_TO_FILTER:
      if (state.includes(action.city)) return state;
      return (state += action.city);
    case REMOVE_CITY_FROM_FILTER:
      console.log('remove city', action);
      const reg = new RegExp(action.city, 'gi');
      return state.replace(reg, '');
    default:
      return state;
  }
};
