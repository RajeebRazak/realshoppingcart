import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

function Product({ product }) {
  const { imgName, image, headName, originalPrice, discountedPrice } = product;

  const { dispatch } = useContext(CartContext);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {imgName && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            {imgName}
          </div>
        )}
        <img className="card-img-top" src={image} alt={headName} />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{headName}</h5>
            <span className="text-muted text-decoration-line-through">
              ${originalPrice.toFixed(2)}
            </span>
            ${discountedPrice.toFixed(2)}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => dispatch({ type: "AddCart", product })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
