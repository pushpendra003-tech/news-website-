import React, { useEffect, useState } from "react";
import Card from "./Card";

const Navbar = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "07663baff96c4b35b7fd95d81c52f38e";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData(); // Fetch data when the component mounts or `search` changes
  }, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value); // Update the search input field
  };

  const handleCategoryClick = (event) => {
    setSearch(event.target.value); // Update search with category value
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a href="/">All News</a>
          <a href="/">Trending</a>
        </ul>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search news"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="header">Stay with the trendy news</p>
      </div>

      <div className="category-Btn">
        <button onClick={handleCategoryClick} value="sports">
          Sports
        </button>
        <button onClick={handleCategoryClick} value="politics">
          Politics
        </button>
        <button onClick={handleCategoryClick} value="entertainment">
          Entertainment
        </button>
        <button onClick={handleCategoryClick} value="health">
          Health
        </button>
        <button onClick={handleCategoryClick} value="fitness">
          Fitness
        </button>
      </div>

      <div>
        {newsData ? <Card data={newsData}/> : null}
      </div>
    </div>
  );
};

export default Navbar;
