import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Recipe from "./components/Recipe";
import { API_KEY, APP_ID } from "./config/config";

function App() {
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
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=24`
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
					<Recipe recipe={recipe} />
				))}
			</div>
		</div>
	);
}

export default App;
