import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Browse.css"; // Import your CSS for styling
import Sidebar from "./Sidebar"; // Import the Sidebar component

const Browse = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minCarbs, setMinCarbs] = useState(10);
  const [maxCarbs, setMaxCarbs] = useState(50);
  const [minCalories, setMinCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(1000);

  useEffect(() => {
    // Make an API request to fetch recipes with filters
    axios
      .get(
        "https://api.spoonacular.com/recipes/findByNutrients",
        {
          params: {
            apiKey: "8b5f1ae4dfd44cbea484933ed3fcfd1a",
            minCarbs: minCarbs,
            maxCarbs: maxCarbs,
            minCalories: minCalories,
            maxCalories: maxCalories,
            number: 10, // Adjust the number of recipes displayed
          },
        }
      )
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, [minCarbs, maxCarbs, minCalories, maxCalories]);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const applyFilters = () => {
    // The API request in useEffect will automatically update based on the filter state changes
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* Include the Sidebar component here */}
        <Sidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          minCarbs={minCarbs}
          setMinCarbs={setMinCarbs}
          maxCarbs={maxCarbs}
          setMaxCarbs={setMaxCarbs}
          minCalories={minCalories}
          setMinCalories={setMinCalories}
          maxCalories={maxCalories}
          setMaxCalories={setMaxCalories}
          applyFilters={applyFilters}
        />
        <div className="recipe-container">
          {/* Recipe cards */}
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              {/* ... (recipe card content) */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Browse;
