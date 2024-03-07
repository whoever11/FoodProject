import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then(response => setCocktails(response.data.drinks || []))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink}>
          <Link to={`/cocktail/${cocktail.idDrink}`}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
