import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes.length)
    return <p className="text-center text-gray-500">No recipes found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
