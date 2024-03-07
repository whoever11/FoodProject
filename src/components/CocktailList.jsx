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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink} style={{ width: '50%', padding: '10px' }}>
          <Link to={`/cocktail/${cocktail.idDrink}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <h3 style={{ textAlign: 'center' }}>{cocktail.strDrink}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
