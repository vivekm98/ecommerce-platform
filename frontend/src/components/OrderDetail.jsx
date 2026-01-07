import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosinstance";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchOrder = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/orders/${id}/`);
      setOrder(response.data);
    } catch (error) {
      console.error("Order detail error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-4">Loading order...</p>;
  }

  if (!order) {
    return <p className="text-center mt-4">Order not found</p>;
  }

  return (
    <div className="container mt-4 mb-5">
      <h4 className="mb-4">Order #{order.id}</h4>

      <div className="row">
        {/* LEFT */}
        <div className="col-md-7">
          <div className="card shadow-sm mb-3 p-3">
            <h6 className="mb-2">Delivery Address</h6>
            <p className="mb-1"><strong>{order.name}</strong></p>
            <p className="mb-1">{order.address}</p>
            <p className="mb-1">
              {order.city} - {order.pincode}
            </p>
            <p className="mb-0">📞 {order.phone}</p>
          </div>

          <div className="card shadow-sm p-3">
            <h6 className="mb-3">Ordered Items</h6>

            {order.items.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between border-bottom py-2"
              >
                <div>
                  {item.product_name} × {item.quantity}
                </div>
                <div>₹{item.price * item.quantity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-5">
          <div className="card shadow-sm p-3">
            <h6 className="mb-3">Order Summary</h6>

            <p>
              <strong>Status:</strong>{" "}
              <span className="badge bg-warning text-dark">
                {order.status.toUpperCase()}
              </span>
            </p>

            <p>
              <strong>Order Date:</strong>{" "}
              {new Date(order.created_at).toLocaleDateString()}
            </p>

            <hr />

            <h5>Total: ₹{order.total_amount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
