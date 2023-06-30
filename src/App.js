import { recipes } from "./data.js";

function RecipeList({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <ul>{ingredient}</ul>
        ))}
      </ul>
    </div>
  );
}
export default function App() {
  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <RecipeList
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </>
  );
}
