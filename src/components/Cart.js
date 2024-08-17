import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { Trash } from "lucide-react";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  const truncateName = (name) => {
    if (name.length > 150) {
      return name.substring(0, 150) + "...";
    }
    return name;
  };

  if(cartItems.length===0) return <h2 style={{textAlign: 'center', marginTop: '10%'}}>Cart is Empty...</h2>

  return (
    <div>
      
      <h2 style={{textAlign: 'center'}}>Cart</h2>
      {cartItems.map((item) => (
        <>
          <div className="cart-item-container">
            <div key={item?.id} className="cart-info-container">
              <div className="item-info">
                <div>
                  <span>{item?.name}</span> <br />
                  <span>
                    {" "}
                    &#8377; {item?.defaultPrice / 100 || item?.price / 100}
                  </span>{" "}
                  <br />
                  <span style={{ color: "#616161", fontSize: "14px" }}>
                    {item?.description && truncateName(item?.description)}
                  </span>
                </div>
              </div>
              <div className="item-img-container">
                <img
                  className="item-img"
                  src={ITEM_IMG_URL + item?.imageId}
                  alt=""
                />
                <button
                  onClick={() => handleAddItem(item?.card?.info)}
                  className="add-button"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <button className="add-button">Place Order</button>
        <button onClick={() => dispatch(clearCart())} style={{color: 'red'}} className="add-button">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
