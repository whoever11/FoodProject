import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then(response => setRecipes(response.data.meals || []))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {recipes.map(recipe => (
        <div key={recipe.idMeal} style={{ width: '45%', marginBottom: '20px' }}>
          <Link to={`/recipe/${recipe.idMeal}`}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <h3 style={{ textAlign: 'center' }}>{recipe.strMeal}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
