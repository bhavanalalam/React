import React, { useEffect, useState } from "react";
import  ResCard  from "./ResCard";
import TopBar from "./TopBar";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }

        const data = await response.json();
        const restaurants =
          data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading restaurants...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TopBar
        allRestaurants={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />

      <div
        className="food-grid"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredRestaurants.map((res) => (
          <ResCard key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
