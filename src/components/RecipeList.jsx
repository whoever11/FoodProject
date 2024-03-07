import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {recipes.map(recipe => (
        <div key={recipe.idMeal} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', padding: '10px' }}>
          <Link to={`/recipe/${recipe.idMeal}`}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: '300px', height: '300px', marginBottom: '10px', borderRadius: '8px' }}
            />
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '5px' }}>{recipe.strMeal}</h3>
              <p>{recipe.strCategory}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
