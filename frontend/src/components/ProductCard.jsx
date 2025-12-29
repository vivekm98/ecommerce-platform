import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "400px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.name}</h6>
        <p className="fw-bold text-primary mb-2">₹{product.price}</p>

        <button className="btn btn-info mt-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
