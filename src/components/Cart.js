import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkExistProduct } from "../redux/reducers/reducerList/commonFunction";
import * as Selector from "../redux/selectors/selector";
import * as constantMessage from "../constants/messageType";
import * as actionType from "../redux/actions/actions";
import * as messageType from "../redux/actions/message";

function Cart(props) {
  const [quantity, setQuantity] = useState(0);
  let { cart } = props;
  let listProduct = useSelector(Selector.listProduct);
  let index = checkExistProduct(cart, listProduct);
  let dispatch = useDispatch();

  //!Get Value from props and Set to Child Component's State
  useEffect(() => {
    setQuantity(cart.quantity);
  }, [cart.quantity]);

  const getChangedValue = (e) => {
    let value = e.target.value;
    // if (value === "") setQuantity(1);
    if (isNaN(parseInt(value))) return;
    setQuantity(parseInt(value));
    dispatch(messageType.pending_update(constantMessage.PENDING_UPDATE));
  };

  const updateCartItem = (e) => {
    e.preventDefault();
    if (quantity > listProduct[index].productQuantity) {
      window.alert(
        "Không thể chỉnh sửa số hàng trong giỏ vượt quá với kho.\nTrong kho còn lại " +
          listProduct[index].productRemain +
          " hàng"
      );
      setQuantity(cart.quantity);
      dispatch(messageType.ready_buy(constantMessage.UPDATE_FAILED));
      return;
    }
    dispatch(actionType.return_product({ product: cart, quantity: quantity }));
    dispatch(actionType.update_cart({ product: cart, quantity: quantity }));
    dispatch(messageType.update_success(constantMessage.UPDATE_SUCCESS));
  };

  const deleteCartItem = (e) => {
    e.preventDefault();
    let checkConfirm = window.confirm("Are you sure delete this Item?");
    if (!checkConfirm) {
      dispatch(messageType.ready_buy(constantMessage.CANCELLED_DELETE));
      return;
    }
    dispatch(actionType.return_product({ product: cart, quantity: 0 }));
    dispatch(actionType.delete_cart({ product: cart }));
    dispatch(messageType.delete_success(constantMessage.DELETE_SUCCESS));
  };

  let currency = listProduct[index].productPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let subTotal = (listProduct[index].productPrice * quantity).toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  );

  return (
    <tr>
      <th scope="row">{props.stt}</th>
      <td>{listProduct[index].productName}</td>
      <td>{currency}</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          min={1}
          value={quantity}
          onChange={getChangedValue}
        />
      </td>
      <td>
        <strong>{subTotal}</strong>
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          href="/"
          data-product=""
          onClick={updateCartItem}
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          href="/"
          data-product=""
          onClick={deleteCartItem}
        >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default Cart;
