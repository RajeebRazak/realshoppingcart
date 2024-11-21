import React from "react";
  
 export const totalItem = (cart) =>{
  return cart.reduce((sum, product) => sum + product.quantity, 0)
 }

 export const totalPrice = (cart) => {
  return cart.reduce((sum, product) => sum + product.originalPrice * product.quantity, 0); 
 }

 


const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddCart":
      return [...state, action.product];

    case "RemoveCart":
        return state.filter(product => product.id !== action.id);

    case "Increment":
       const IndexI = state.findIndex(product => product.id === action.id);
       state[IndexI].quantity += 1
       return [...state];

    case "Decrement":
        const IndexD = state.findIndex(product => product.id === action.id);
        state[IndexD].quantity -= 1
        return [...state];

    default:
      state;
  }
};

export default CartReducer;
