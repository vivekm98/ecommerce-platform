import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";
import Products from "./Products";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [SubCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get("/category/");
        setCategories(response.data);
      } catch (error) {
        console.log("category fetching error", error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        const response = await axiosInstance.get("/sub_category/");
        setSubCategory(response.data);
      } catch (error) {
        console.log("sub_category fetching error", error);
      }
    };

    fetchSubCategory();
  }, []);

  return (
    <>
      {/* Category Section */}
      <div className="container mt-4">
        <h4 className="mb-3">Categories</h4>

        <div className="row">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="col-6 col-md-2 mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSubCategory(null); // 🔥 reset sub category
                }}
            >
              <div className="card text-center shadow-sm h-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <small className="fw-bold">{cat.name}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      {/* Sub Category Section */}
<div className="container mt-4">
  <div
    className="d-flex gap-3 overflow-auto pb-2"
    style={{ whiteSpace: "nowrap" }}
  >
    {SubCategory.map((sub) => (
      <div
        key={sub.id}
        onClick={() => setSelectedSubCategory(sub.id)}
        className={`card text-center shadow-sm flex-shrink-0 ${
          selectedSubCategory === sub.id ? "border-warning" : ""
        }`}
        style={{
          width: "200px",
          cursor: "pointer",
        }}
      >
        <img
          src={sub.image}
          alt={sub.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body p-2">
          <small className="fw-bold">{sub.name}</small>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Products Section */}
      <Products category={selectedCategory} subCategory={selectedSubCategory} />
    </>
  );
};

export default Category;
