import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";

const AdsCarousel = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axiosInstance.get("/ads/").then((res) => setAds(res.data));
  }, []);

  return (
    <div id="adsCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        {ads.map((ad, index) => (
          <div
            key={ad.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={ad.image}
              className="d-block w-100"
              style={{ height: "550px", objectFit: "cover" }}
              alt={ad.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsCarousel;
