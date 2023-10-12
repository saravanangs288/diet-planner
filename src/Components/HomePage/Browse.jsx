import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Browse.css"; // Import your CSS for styling
import Footer from "../Footer/Footer";
import HeaderBrowse from "../Header/HeaderBrowse";

const Browse = ({ calories }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minCalories, setMinCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(2000);

  useEffect(() => {
    // Make an API request to fetch recipes with filters
    axios
      .get("https://api.spoonacular.com/recipes/findByNutrients", {
        params: {
          apiKey: "8b5f1ae4dfd44cbea484933ed3fcfd1a",
          minCalories: minCalories,
          maxCalories: maxCalories,
          number: 15, // Adjust the number of recipes displayed
        },
      })
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, [minCalories, maxCalories]);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const applyFilters = () => {
    // The API request in useEffect will automatically update based on the filter state changes
  };

  return (
    <>
      <HeaderBrowse />
      <div className="container">
        <div className="sidebar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for recipes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-container">
            <label>Min Calories:</label>
            <input
              type="number"
              value={minCalories}
              onChange={(e) => setMinCalories(e.target.value)}
            />
            <label>Max Calories:</label>
            <input
              type="number"
              value={maxCalories}
              onChange={(e) => setMaxCalories(e.target.value)}
            />
            <button onClick={applyFilters}>Apply Filters</button>
          </div>
        </div>
        <div className="recipe-container">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-details">
                <h3>{recipe.title}</h3>
                <p>Calories: {recipe.calories}</p>
                <p>Protein: {recipe.protein}</p>
                <p>Fat: {recipe.fat}</p>
                <p>Carbs: {recipe.carbs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
