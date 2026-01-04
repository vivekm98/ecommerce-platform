import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/cart/items/");
      setCartItem(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🔹 Update quantity
  const updateQuantity = async (itemId, newQty) => {
    if (newQty < 1) return;

    try {
      await axiosInstance.patch(`/cart/items/${itemId}/`, {
        quantity: newQty,
      });
      fetchCart(); 
      console.log("success ok")
      // refresh cart
    } catch (error) {
      console.error("Quantity update failed", error);
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading cart...</p>;
  }

  return (
    <div className="container mt-4">
      <h4 className="mb-3">My Cart</h4>

      {cartItem.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItem.map((item) => (
          <div
            key={item.id}
            className="border rounded p-3 mb-2 d-flex justify-content-between align-items-center"
          >
            {/* Left */}
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.product_image}
                alt={item.product_name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <div>
                <strong>{item.product_name}</strong>
                <div className="text-muted small">
                  ₹{item.product_price}
                </div>

                {/* Quantity buttons */}
                <div className="d-flex align-items-center gap-2 mt-1">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="fw-bold">
              ₹{item.product_price * item.quantity}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
