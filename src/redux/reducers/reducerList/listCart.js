import * as constantAction from "../../../constants/actionType";
import { checkExistProduct } from "./commonFunction";
let initialState = [];

let initListCart = JSON.parse(localStorage.getItem("listCart"));
// console.log(!initListCart);
if (initListCart != null) {
  initialState = initListCart;
}

//Check Exist Product in your cart
// const checkExistProduct = (product, state) => {
//   for (let i = 0; i < state.length; i++) {
//     if (product.productId === state[i].productId) {
//       return i;
//     }
//   }
//   return -1;
// };

const listCart = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case constantAction.BUY_PRODUCT_TYPE:
      index = checkExistProduct(action.payload.product, state);
      if (index === -1) {
        state = [
          ...state,
          {
            productId: action.payload.product.productId,
            quantity: action.payload.quantity,
          },
        ];
      } else {
        state[index].quantity += action.payload.quantity;
      }
      localStorage.setItem("listCart", JSON.stringify(state));
      return [...state];

    case constantAction.UPDATE_CART_TYPE:
      index = checkExistProduct(action.payload.product, state);
      state[index].quantity = parseInt(action.payload.quantity);
      localStorage.setItem("listCart", JSON.stringify(state));
      return [...state];

    case constantAction.DELETE_CART_TYPE:
      index = checkExistProduct(action.payload.product, state);
      state.splice(index, 1);
      localStorage.setItem("listCart", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default listCart;
