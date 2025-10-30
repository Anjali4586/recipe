export default function RecipeCard({ meal }) {
  return (
    <div className="bg-white shadow-md rounded-md p-2 text-center">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-md mb-2 w-full"
      />
      <h2 className="font-semibold">{meal.strMeal}</h2>
      <a
        href={`https://www.themealdb.com/meal/${meal.idMeal}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-2 bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
      >
        View Recipe
      </a>
    </div>
  );
}
