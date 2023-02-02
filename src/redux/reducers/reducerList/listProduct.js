import * as constantAction from "../../../constants/actionType";
import { checkExistProduct } from "./commonFunction";

let initialState = [
  {
    productId: 1,
    productName: "Pizza",
    productPrice: 12,
    productQuantity: 10,
    productRemain: 10,
    productImage: "images/pizza.jpg",
    productTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  },
  {
    productId: 2,
    productName: "Hamburger",
    productPrice: 20,
    productQuantity: 2,
    productRemain: 2,
    productImage: "images/hamburger.jpg",
    productTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  },
  {
    productId: 3,
    productName: "Bread",
    productPrice: 20,
    productQuantity: 20,
    productRemain: 20,
    productImage: "images/bread.jpg",
    productTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  },
  {
    productId: 4,
    productName: "Cake",
    productPrice: 15,
    productQuantity: 7,
    productRemain: 7,
    productImage: "images/cake.jpg",
    productTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
  },
];

let initListProduct = JSON.parse(localStorage.getItem("listProduct"));
if (initListProduct != null) {
  initialState = initListProduct;
} else {
  localStorage.setItem("listProduct", JSON.stringify(initialState));
}

const listProduct = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case constantAction.BUY_PRODUCT_TYPE:
      index = checkExistProduct(action.payload.product, state);
      state[index].productRemain -= action.payload.quantity;
      localStorage.setItem("listProduct", JSON.stringify(state));
      return [...state];

    case constantAction.RETURN_PRODUCT:
      index = checkExistProduct(action.payload.product, state);
      console.log(action.payload);
      state[index].productRemain =
        state[index].productQuantity - action.payload.quantity;
      localStorage.setItem("listProduct", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default listProduct;
