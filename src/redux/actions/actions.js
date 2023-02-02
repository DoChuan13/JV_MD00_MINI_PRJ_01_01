import * as constantAction from "../../constants/actionType";

export const buy_product = (value) => {
  return {
    type: constantAction.BUY_PRODUCT_TYPE,
    payload: value,
  };
};

export const update_cart = (value) => {
  return {
    type: constantAction.UPDATE_CART_TYPE,
    payload: value,
  };
};

export const delete_cart = (value) => {
  return {
    type: constantAction.DELETE_CART_TYPE,
    payload: value,
  };
};

export const return_product = (value) => {
  return {
    type: constantAction.RETURN_PRODUCT,
    payload: value,
  };
};
