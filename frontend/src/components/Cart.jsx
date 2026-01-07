import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


	const fetchCart = async () => {
		setLoading(true);
		try {
			const response = await axiosInstance.get("/cart/items/");
			setCartItems(response.data);
		} catch (error) {
			console.error("Cart fetch error", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCart();
	}, []);

	/* ---------------- Select Item ---------------- */
	const toggleSelect = (id) => {
		setSelectedItems((prev) =>
			prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
		);
	};

	/* ---------------- Quantity Update ---------------- */
	const updateQuantity = async (id, qty) => {
		if (qty < 1) return;

		try {
			await axiosInstance.patch(`/cart/items/${id}/`, {
				quantity: qty,
			});
			fetchCart();
		} catch (error) {
			console.error("Quantity update failed", error);
		}
	};

	/* ---------------- Remove Item ---------------- */
	const removeItem = async (id) => {
		try {
			await axiosInstance.delete(`/cart/items/${id}/`);
			setSelectedItems((prev) => prev.filter((item) => item !== id));
			fetchCart();
		} catch (error) {
			console.error("Remove item failed", error);
		}
	};

	/* ---------------- Place Order (Selected Only) ---------------- */

	const selectedTotal = cartItems
		.filter((item) => selectedItems.includes(item.id))
		.reduce((sum, item) => sum + item.product_price * item.quantity, 0);

	if (loading) {
		return <p className="text-center mt-4">Loading cart...</p>;
	}

	return (
		<div className="container mt-4">
			<h4 className="mb-3">My Cart</h4>

			{cartItems.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				<>
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="border rounded p-3 mb-2 d-flex justify-content-between align-items-center"
						>
							{/* Left */}
							<div className="d-flex align-items-center gap-3">
								<input
									type="checkbox"
									checked={selectedItems.includes(item.id)}
									onChange={() => toggleSelect(item.id)}
								/>

								<img
									src={item.product_image}
									alt={item.product_name}
									style={{ width: "60px", height: "60px" }}
								/>

								<div>
									<strong>{item.product_name}</strong>
									<div className="text-muted small">₹{item.product_price}</div>

									<div className="d-flex align-items-center gap-2 mt-1">
										<button
											className="btn btn-sm btn-outline-secondary"
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
										>
											−
										</button>

										<span>{item.quantity}</span>

										<button
											className="btn btn-sm btn-outline-secondary"
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
										>
											+
										</button>
									</div>
								</div>
							</div>

							{/* Right */}
							<div className="text-end">
								<strong>₹{item.product_price * item.quantity}</strong>
								<br />
								<button
									className="btn btn-sm btn-danger mt-2"
									onClick={() => removeItem(item.id)}
								>
									Remove
								</button>
							</div>
						</div>
					))}

					{/* Footer */}
					<div className="d-flex justify-content-between align-items-center mt-3">
						<h5>Selected Total: ₹{selectedTotal}</h5>

						<button
							className="btn btn-success"
							disabled={selectedItems.length === 0}
							onClick={() =>
								navigate("/order-form", { state: { selectedItems } })
							}
						>
							Order Selected
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
