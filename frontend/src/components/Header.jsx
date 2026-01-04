import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#1f2933" }}   // Charcoal
    >
      <div className="container-fluid">
        
        {/* Brand */}
        {isLoggedIn ?(
          <Link className="navbar-brand fw-bold fs-4" to="/dashboard" style={{ color: "#f9fafb" }}>
          E-Market
        </Link>
        ):(
          <Link className="navbar-brand fw-bold fs-4" to="/" style={{ color: "#f9fafb" }}>
          E-Market
        </Link>
        )}

        {/* Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="ms-auto d-flex align-items-center gap-2 mt-3 mt-lg-0">
            {isLoggedIn ? (
              <>
                <Link
                  to="/cart"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                  }}
                >
                  🛒 Cart
                </Link>

                <Link
                  to="/orders"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#6b7280",
                    color: "#fff",
                  }}
                >
                  📦 Orders
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#dc2626",
                    color: "#fff",
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                  }}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn btn-sm fw-semibold"
                  style={{
                    backgroundColor: "#10b981",
                    color: "#fff",
                  }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
