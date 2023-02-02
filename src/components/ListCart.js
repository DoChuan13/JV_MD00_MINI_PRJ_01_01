import React from "react";
import Cart from "./Cart";
import CartInfo from "./CartInfo";
import Notify from "./Notify";
import * as Selector from "../redux/selectors/selector";
import { useSelector } from "react-redux";

function ListCart() {
  let listCart = useSelector(Selector.listCart);
  let elementCart = listCart.map((cart, index) => {
    return <Cart key={index} cart={cart} stt={index + 1} />;
  });

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Name</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {/* CART BODY */}
              {elementCart}
            </tbody>
            <tfoot id="my-cart-footer">
              {/* CART FOOTER */}
              <CartInfo />
            </tfoot>
          </table>
        </div>
      </div>
      <Notify />
    </div>
  );
}

export default ListCart;
