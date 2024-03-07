

import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.idMeal}>
          <Link to={`/recipe/${recipe.idMeal}`}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;