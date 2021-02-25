//import { RECEIVE_API_DATA } from './actions';

import { UPGRATE_NAV_STYLES } from "../types";

const initialState = {
    styles: [
      {id: 1, width: "aws", othervalue: "was"},
      {id: 2, height: "goo", othervalue: "nano"},
    ]
  }
  
  export default (state = initialState, action) => {
    let updatedStyles;


    switch (action.type) {
      case UPGRATE_NAV_STYLES:
      updatedStyles = [...state.styles, action.payload]
      
      console.log(updatedStyles)

      

    default:
        return state;
    }
  };
  