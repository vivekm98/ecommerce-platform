import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";
import { useNavigate } from "react-router-dom";

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

	const fetchOrders = async () => {
		setLoading(true);
		try {
			const response = await axiosInstance.get("/orders/");
			setOrders(response.data);
		} catch (error) {
			console.error("Orders fetch error", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchOrders();
	}, []);

	if (loading) {
		return <p className="text-center mt-4">Loading orders...</p>;
	}

	return (
		<div className="container mt-4 mb-5">
			<h4 className="mb-4">My Orders</h4>

			{orders.length === 0 ? (
				<p>No orders found</p>
			) : (
				orders.map((order) => (
					<div key={order.id} className="card mb-3 shadow-sm">
						{/* Order Header */}
						<div className="card-body d-flex justify-content-between align-items-center">
							<div>
								<strong>Order #{order.id}</strong>
								<div className="text-muted small">
									{new Date(order.created_at).toLocaleDateString()}
								</div>
							</div>

							<div className="text-end">
								<span
									className={`badge ${
										order.status === "pending"
											? "bg-warning"
											: order.status === "confirmed"
											? "bg-primary"
											: order.status === "delivered"
											? "bg-success"
											: "bg-secondary"
									}`}
								>
									{order.status.toUpperCase()}
								</span>

								<div className="fw-bold mt-1">₹{order.total_amount}</div>
							</div>
						</div>

						{/* Order Items */}
						<div className="border-top px-3 pb-3">
							{order.items.map((item, index) => (
								<div
									key={index}
									className="d-flex justify-content-between small py-2"
								>
									<div>
										{item.product_name} × {item.quantity}
									</div>
									<div>₹{item.price * item.quantity}</div>
									
								</div>
							))}
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Orders;
