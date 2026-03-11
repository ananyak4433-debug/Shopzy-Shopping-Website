import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchProduct from "../utils/useFetchProduct";
import { addCart } from "../utils/cartSlice";

export const ProductDetails = () => {

  const { _id } = useParams();
  const details = useFetchProduct(_id);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItem.items);

  const [size, setSize] = useState("M");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");

  if (!details) return <h2 className="loading">Loading product...</h2>;

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddCart = () => {

    const existingItem = cartItems.find(
      (item) => item._id === details._id
    );

    if (existingItem) {
      setMessage("Product already added to cart");
      setMsgType("error");
      return;
    }

    dispatch(addCart(details));

    setMessage("Product added to cart");
    setMsgType("success");

    setTimeout(() => {
      setMessage("");
      setMsgType("");
    }, 2000);
  };

  return (
    <div className="pd-page">
      <div className="pd-card">

        {/* LEFT IMAGE */}
        <div className="pd-left">
          <img
            src={details.photo}
            alt={details.title}
            className="pd-main-img"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="pd-right">

          <p className="pd-category">{details.Category}</p>

          <h1 className="pd-title">{details.title}</h1>

          <h2 className="pd-price">₹{details.price}</h2>

          {details.discountPercentage > 0 && (
            <span className="discount">
              {details.discountPercentage}% OFF
            </span>
          )}

          {/* Rating */}
          <div className="pd-rating">
            {"★".repeat(details.rating || 4)}
            {"☆".repeat(5 - (details.rating || 4))}
          </div>

          {/* SIZE */}
          <p className="pd-label">Select Size</p>

          <div className="pd-sizes">
            {sizes.map((s) => (
              <button
                key={s}
                className={size === s ? "size active" : "size"}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* ADD TO CART */}
          <button
            className="pd-cart-btn"
            onClick={handleAddCart}
          >
            Add to Cart
          </button>

          {/* MESSAGE */}
          {message && (
            <p
              style={{
                color: msgType === "success" ? "green" : "red",
                marginTop: "10px",
                fontWeight: "600"
              }}
            >
              {message}
            </p>
          )}

          {/* DESCRIPTION */}
          <div className="pd-box">
            <h3>Description & Fit</h3>
            <p>{details.description}</p>
          </div>

          {/* PRODUCT INFO */}
          <div className="pd-box">
            <h3>Product Info</h3>

            <p className="tags">{details.tags}</p>

            <p>
              <b>Brand:</b> {details.brand}
            </p>

            <p>
              <b>Status:</b>
              <span
                className={
                  details.stock > 0 ? "stock-ok" : "stock-no"
                }
              >
                {details.stock > 0
                  ? " In Stock"
                  : " Out of Stock"}
              </span>
            </p>

            <p>
              <b>Shipping:</b> {details.shippingInformation}
            </p>

            <p>
              <b>Warranty:</b> {details.warrantyInformation}
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};