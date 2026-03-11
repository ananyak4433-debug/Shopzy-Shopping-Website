import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from "../utils/cartSlice";

export const Cart = () => {

  const cartItems = useSelector((store) => store.cartItem.items);
  // const message = useSelector((store) => store.cartItem.message);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your Cart is Empty</h2>;
  }

  return (
    <div className="cart-container">

      <h1 className="cart-title">Shopping Cart</h1>
      
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      {cartItems.map((item) => (

        <div className="cart-row" key={item._id}>

          {/* PRODUCT INFO */}
          <div className="cart-product">

            <img src={item.photo} alt={item.title} />

            <div className="cart-info">

              <h4>{item.title}</h4>

              <p>Brand: {item.brand}</p>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item._id))}
              >
                Remove
              </button>

            </div>

          </div>

          {/* PRICE */}
          <div className="cart-price">
            ₹{item.price}
          </div>

          {/* QUANTITY */}
          <div className="cart-qty">

            <button
              onClick={() => dispatch(decreaseQty(item._id))}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => dispatch(increaseQty(item._id))}
            >
              +
            </button>

          </div>

          {/* TOTAL */}
          <div className="cart-total">
            ₹{item.price * item.quantity}
          </div>

        </div>

      ))}

      {/* CART SUMMARY */}

      <div className="cart-summary">

        <h3>Sub Total: ₹{totalPrice}</h3>

        <div className="cart-buttons">

          <button className="continue-btn">
            Continue Shopping
          </button>

          <button onClick={()=>alert("Checkouted Successfully")} className="checkout-btn">
            Go To Checkout
          </button>

        </div>

      </div>

    </div>
  );
};