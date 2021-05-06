import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Recipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    favorite ? setFavorite(false) : setFavorite(true);
  };

  return (
    <div className="recipe-container">
      <div className="img-container">
        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      </div>
      <div className="text-container">
        <div className="text-content">
          <h2>{recipe.recipe.label}</h2>
          <p>{Math.round(recipe.recipe.calories)} Cal</p>
        </div>
        {favorite ? (
          <AiFillHeart className="favorite" onClick={handleFavorite} />
        ) : (
          <AiOutlineHeart className="favorite" onClick={handleFavorite} />
        )}
      </div>
    </div>
  );
};

export default Recipe;
