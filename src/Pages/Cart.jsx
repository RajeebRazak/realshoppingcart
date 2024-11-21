import React, { useContext } from "react";
import CartProduct from "../Components/CartProduct";
import { CartContext } from "../Features/ContextProvider";
import { totalItem, totalPrice } from "../Features/CartReducer";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length == 0 ) {
    <h2> Cart is empty !<span><Link to='/' >Go to Shopping</Link></span></h2>
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          {cart.map((ele, index) => {
            return (
              <div key={index}>
                <CartProduct product={ele} />
              </div>
            );
          })}
        </div>
        <div className="col-4">
          <div className="bg-secondary p-3 text-white">
            <h5>Total Item : {totalItem(cart)} </h5>
            <h5>Total Price : ${totalPrice(cart)}</h5>
            <button className="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
