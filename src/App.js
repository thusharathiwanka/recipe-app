import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Recipe from "./Recipe";

function App() {
  const API_ID = `9f14300c`;
  const API_KEY = `9b2a978dc02f1fb030f83503dcd21795`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  return (
    <>
      <Form />
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.index} />
      ))}
    </>
  );
}

export default App;
