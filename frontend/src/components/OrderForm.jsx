import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinstance";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedItems = location.state?.selectedItems || [];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);

  /* -------- Handle Input -------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* -------- Submit Order -------- */
  const placeOrder = async () => {
    if (!formData.address || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post("place-order/", {
        cart_items: selectedItems,
        ...formData,
      });
      console.log("success Order place")
      alert("Order placed successfully");
      navigate("/orders");
    } catch (error) {
      console.error("Order error", error);
      alert("Order failed");
      
    } finally {
      setLoading(false);
    }
  };

  if (selectedItems.length === 0) {
    return <p className="text-center mt-4">No items selected</p>;
  }

  return (
    <div className="container mt-4 mb-5">
      <h4 className="mb-4">Order Details</h4>

      <div className="row">
        {/* -------- Left: Address Form -------- */}
        <div className="col-md-7">
          <div className="card shadow-sm p-4">
            <h6 className="mb-3">Delivery Address</h6>

            <input
              className="form-control mb-2"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />

            <input
              className="form-control mb-2"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
            />

            <textarea
              className="form-control mb-2"
              placeholder="Full Address"
              name="address"
              rows="3"
              onChange={handleChange}
            />

            <div className="row">
              <div className="col">
                <input
                  className="form-control mb-2"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  className="form-control mb-2"
                  placeholder="Pincode"
                  name="pincode"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------- Right: Order Summary -------- */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h6 className="mb-3">Order Summary</h6>

            {selectedItems.map((id, index) => (
              <div key={index} className="small text-muted">
                Cart Item ID: {id}
              </div>
            ))}

            <button
              className="btn btn-success w-100 mt-3"
              onClick={placeOrder}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
