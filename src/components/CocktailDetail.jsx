import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios.get(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => setCocktail(response.data.drinks[0]))
      .catch(error => console.error('Error fetching data: ', error));
  }, [id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(cocktail)
          .filter(key => key.startsWith('strIngredient') && cocktail[key])
          .map(key => (
            <li key={key}>{cocktail[key]} - {cocktail[`strMeasure${key.split('strIngredient')[1]}`]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;