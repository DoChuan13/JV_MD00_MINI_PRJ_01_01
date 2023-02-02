import React from "react";
import * as Selector from "../redux/selectors/selector";
import { useSelector } from "react-redux";

function CartInfo() {
  let listCart = useSelector(Selector.listCart);
  let listProduct = useSelector(Selector.listProduct);

  const calTotalAmmout = () => {
    let total = 0;
    listCart.forEach((cartItem) => {
      listProduct.forEach((product) => {
        if (product.productId === cartItem.productId) {
          total += product.productPrice * parseInt(cartItem.quantity);
        }
      });
    });
    return total;
  };

  let currency = calTotalAmmout().toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let elementCartInfo = (
    <tr>
      <th colSpan={6}>Empty product in your cart</th>
    </tr>
  );

  if (listCart !== null && listCart.length !== 0) {
    elementCartInfo = (
      <tr>
        <td colSpan={4}>
          There are <b>{listCart.length}</b> items in your shopping cart.
        </td>
        <td colSpan={2} className="total-price text-left">
          {currency}
        </td>
      </tr>
    );
  }

  return <>{elementCartInfo}</>;
}

export default CartInfo;
