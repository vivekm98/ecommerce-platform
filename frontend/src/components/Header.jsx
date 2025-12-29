import React, { useContext } from "react";
import "../assets/css/header.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = ({ search, setSearch }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Brand */}
      <Link className="navbar-brand fw-bold fs-4 text-warning" to="/">
        E-Market
      </Link>

      {/* Right Section */}
      <div className="ms-auto d-flex align-items-center gap-2">
        {isLoggedIn ? (
          <>
            {/* Search */}
          

            {/* Actions */}
            <Link to="/cart" className="btn btn-outline-light btn-sm">
              🛒 Cart
            </Link>

            <Link to="/orders" className="btn btn-outline-light btn-sm">
              📦 Orders
            </Link>

            <button onClick={logout} className="btn btn-danger btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light btn-sm">
              Login
            </Link>

            <Link to="/register" className="btn btn-warning btn-sm text-dark">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
