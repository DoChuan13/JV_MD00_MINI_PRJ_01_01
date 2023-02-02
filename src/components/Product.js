import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkExistProduct } from "../redux/reducers/reducerList/commonFunction";
import * as Selector from "../redux/selectors/selector";
import * as actionType from "../redux/actions/actions";
import * as messageType from "../redux/actions/message";
import * as constantMessage from "../constants/messageType";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  let listProduct = useSelector(Selector.listProduct);
  let dispatch = useDispatch();
  let { product } = props;
  let currency = product.productPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  let elementBuyBtn = (
    <>
      <span className="price"> {currency}</span>
    </>
  );

  const getQuantify = (e) => {
    let value = e.target.value;
    // if (value === "") setQuantity(1);
    if (isNaN(parseInt(value))) return;
    setQuantity(parseInt(value));
  };

  const buyProduct = (e) => {
    e.preventDefault();
    let index = checkExistProduct(product, listProduct);
    if (quantity > listProduct[index].productRemain) {
      window.alert(
        "Không đủ nguồn hàng, kho hàng chỉ còn lại " +
          listProduct[index].productRemain +
          " sản phẩm."
      );
      dispatch(messageType.buy_failed(constantMessage.BUY_FAILED));
      return;
    }

    dispatch(actionType.buy_product({ product, quantity }));
    dispatch(messageType.buy_success(constantMessage.BUY_SUCCESS));
  };

  if (product.productRemain !== 0) {
    elementBuyBtn = (
      <>
        <input
          name="quantity-product-1"
          type="number"
          min={1}
          value={quantity}
          onChange={getQuantify}
        />
        <a data-product={1} href="/" className="price" onClick={buyProduct}>
          {currency}
        </a>
      </>
    );
  }

  return (
    <div className="media product">
      <div className="media-left">
        <a href="/">
          <img
            className="media-object"
            src={product.productImage}
            alt={product.productName}
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.productName}</h4>
        <p>{product.productTitle}</p>
        {elementBuyBtn}
      </div>
    </div>
  );
}

export default Product;
