import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = `9f14300c`;
  const API_KEY = `9b2a978dc02f1fb030f83503dcd21795`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    setRecipes([]);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=12`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    setIsLoading(false);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const handleQueryChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="loading-container">
          <div className="circle"></div>
        </div>
      )}
      <Form
        search={search}
        handleQueryChange={handleQueryChange}
        handleQuery={handleQuery}
      />
      <div className="cards-container">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.index} />
        ))}
      </div>
    </div>
  );
}

export default App;
