import { useState } from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";
function App() {
	const [search,setSearch] = useState('')
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Header search={search} setSearch={setSearch} />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
						<Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
						<Route path="/dashboard" element={<PrivateRoute><Dashboard search={search} /></PrivateRoute>} />
						<Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
						<Route path="/order-form" element={<PrivateRoute><OrderForm /></PrivateRoute>} />
						 <Route path="/order/:id" element={<PrivateRoute><OrderDetail /></PrivateRoute>} />
						<Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
