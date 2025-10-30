import { useState } from "react";
import RecipeList from "./Components/RecipeList"
import './index.css'
import axios from "axios";

export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    if (!ingredient.trim()) return;
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    setRecipes(res.data.meals || []);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-indigo-600">
        🍳 QuickRecipe for Taylor
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter an ingredient (e.g., chicken)"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          className="border p-2 rounded-l-md w-64"
        />
        <button
          onClick={fetchRecipes}
          className="bg-indigo-500 text-white px-4 rounded-r-md hover:bg-indigo-600"
        >
          Search
        </button>
      </div>

      <RecipeList recipes={recipes} />
    </div>
  );
}
