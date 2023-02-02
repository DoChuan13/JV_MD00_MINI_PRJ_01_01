//Check Exist Product in your cart
export const checkExistProduct = (product, state) => {
  for (let i = 0; i < state.length; i++) {
    if (product.productId === state[i].productId) {
      return i;
    }
  }
  return -1;
};
