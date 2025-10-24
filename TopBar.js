import react from "react";
import { useState, useEffect } from "react";
const TopBar = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const search = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);

  };

  return (
    <section className="topBarSection" style={{ padding: "20px" }}>
      <div className="companyTitle">
        <h3>Yummate</h3>
      </div>
      <div>
        <input
          type="text" placeholder="Search" value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>

      <div className="userAuth" style={{ marginTop: "10px" }}>
        Login/Signup
      </div>
    </section>
  );
};

export default TopBar;
