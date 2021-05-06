import React, { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const API_ID = `9f14300c`;
  const API_KEY = `9b2a978dc02f1fb030f83503dcd21795`;

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return <Form />;
}

export default App;
