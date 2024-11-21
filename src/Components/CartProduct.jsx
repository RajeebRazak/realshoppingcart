import React,{ useContext } from "react";
import { BsPlus } from "react-icons/bs";
import { IoIosRemove } from "react-icons/io"
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {

    const {  image, headName, originalPrice, discountedPrice, quantity } = product;

    const {cart , dispatch} = useContext(CartContext)


    const Increase = (id) => {
      const Index = cart.findIndex((ele)=>ele.id === id )
      if (cart[Index].quantity < 10) {
        dispatch ({type: "Increment" , id})
      }
    }
    const Decrease = (id) => {
      const Index = cart.findIndex((ele)=>ele.id === id )
      if (cart[Index].quantity > 1) {
        dispatch ({type: "Decrement" , id})
      }
    }
  return (
    <div className="d-flex border mb-4">
      <img src={image} alt={headName} className="w-25 h-25" />
      <div className="details ms-4">
        <h5 className="mt-5">{headName}</h5>
        <span className="text-muted text-decoration-line-through">
          ${originalPrice.toFixed(2)}
        </span>
        ${discountedPrice.toFixed(2)}
        <div className="button">
            <button className="btn btn-outline-warning mx-2" onClick={()=>{Increase(product.id)}}><b><BsPlus/></b></button>
            <button className="btn btn-outline-primary mx-2" ><b>{quantity}</b></button>
            <button className="btn btn-outline-warning mx-2" onClick={()=>{Decrease(product.id)}}><b><IoIosRemove /></b></button>
            <button className="btn btn-outline-danger" onClick={()=>dispatch({type:"RemoveCart", id:product.id})}> Remove </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
