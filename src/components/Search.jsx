import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import CocktailListS from './CocktailListS'; 

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('recipe'); // Default search type is recipe

    useEffect(() => {
        let url = '';
        if (searchType === 'recipe') {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        } else if (searchType === 'ingredient') {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
        } else if (searchType === 'category') {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`;
        } else if (searchType === 'cocktail') {
            url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        }

        axios.get(url)
            .then(response => {
                if (searchType === 'recipe' || searchType === 'ingredient' || searchType === 'category') {
                    setRecipes(response.data.meals || []);
                } else if (searchType === 'cocktail') {
                    setCocktails(response.data.drinks || []);
                }
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [searchTerm, searchType]);

    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} setSearchType={setSearchType} />
            <RecipeList recipes={recipes} />
            <CocktailListS cocktails={cocktails} />
        </div>
    );
};
export default Search;