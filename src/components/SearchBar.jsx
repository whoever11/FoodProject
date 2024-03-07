import { useState } from 'react';

const SearchBar = ({ setSearchTerm, setSearchType }) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(search);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange} placeholder="Search..." />
            <select onChange={handleSearchTypeChange}>
                <option value="recipe">Recipe</option>
                <option value="ingredient">Ingredient</option>
                <option value="category">Category</option>
                <option value="cocktail">Cocktail</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
