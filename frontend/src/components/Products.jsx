import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";

const Products = ({category,subCategory}) => {
  const [products, setProducts] = useState([]);

  const addToCart = async (productId) =>{
    try{
      await axiosInstance.post("/cart/items/add/",{
        product: productId,
        quantity: 1,
      });
      alert("Added to cart")
    }catch(error){
      console.error("Add to cart failed",error)
      alert("please login to add items to cart")
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products/", {
          params: {
            category: category,
            sub_category: subCategory, // ✅ FIXED
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Product fetch error:", error);
      }
    };

    fetchProducts();
  }, [category, subCategory]);


  return (
    <>
    
    {/*-------------------- Products------------------------- */}
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Products</h2>

      <div className="row">
        {products.length === 0 ? (
          <p className="text-center">No products available</p>
        ) : (
          products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="fw-bold text-success">₹{product.price}</p>

                  <p className="text-muted small">
                    {product.description?.slice(0, 80)}
                    {product.description?.length > 80 && "..."}
                  </p>

                  <button className="btn btn-warning mt-auto" onClick={()=> addToCart(product.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default Products;
