<div className="card-body d-flex flex-column">
  <h5 className="card-title">{product.name}</h5>

  <p className="fw-bold text-success">₹{product.price}</p>

  <p className="text-muted small">
    {product.description?.slice(0, 80)}
    {product.description?.length > 80 && "..."}
  </p>

  <button
    className="btn btn-warning mt-auto"
    onClick={() => addToCart(product.id)}
  >
    Add to Cart
  </button>
</div>
