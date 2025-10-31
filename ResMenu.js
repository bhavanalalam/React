import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ResMenu = () => {
  const { resid } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();

        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        const found = restaurants.find(
          (res) => res.info.id.toString() === resid
        );

        setRestaurant(found || null);
      } catch (err) {
        console.error(err);
        setError("Failed to load restaurant data");
      }
    }

    fetchRestaurant();
  }, [resid]);

  if (error) return <h3>{error}</h3>;
  if (!restaurant) return <h3>Loading restaurant info...</h3>;

  const info = restaurant.info;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{info.name}</h2>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
        alt={info.name}
        width="250"
      />
      <p>
        <strong>Locality:</strong> {info.locality}
      </p>
      <p>
        <strong>Area:</strong> {info.areaName}
      </p>
      <p>
        <strong>Cuisines:</strong> {info.cuisines.join(", ")}
      </p>
      <p>
        <strong>Average Rating:</strong> ⭐ {info.avgRating}
      </p>
      <p>
        <strong>Cost for Two:</strong> {info.costForTwo}
      </p>
    </div>
  );
};

export default ResMenu;
