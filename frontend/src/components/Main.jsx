import React from "react";
import "../assets/css/main.css";
import Button from "./Button";

const Main = () => {
	return (
		<>
			<div className="container">
				<div className="p-5 text-center bg-light-dark mt-5">
					<h1>E-Market</h1>
					<p>
						E-commerce platforms like Amazon, eBay, and Walmart enable consumers
						to buy items such as clothes, electronics, books, and food, with
						payments processed through digital wallets, credit cards, or online
						payment apps. The process is streamlined, with orders delivered
						directly to the customer’s doorstep. For businesses, e-commerce
						reduces overhead costs by eliminating the need for physical
						storefronts, lowering expenses related to rent, utilities, and
						staffing. These savings can be passed on to consumers in the form of
						lower prices and special discounts. Additionally, e-commerce allows
						businesses to reach a larger, global audience and operate
						continuously without opening and closing hours.
					</p>
                    <Button class="btn btn-outline-primary mt-3" text = "Shop now" />
				</div>
			</div>
      
		</>
	);
};

export default Main;
