import { Link } from 'react-router-dom';

const CocktailList = ({ cocktails }) => {


  return (
    <div>
      {Array.isArray(cocktails) && cocktails.map(cocktail => (
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