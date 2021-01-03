import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small> By: {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock}lect in stock - order soon!</small>
        </p>
        <br />
        <button
          className="cart-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faCartPlus} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
