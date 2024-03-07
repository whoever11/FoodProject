import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipeDetail from './RecipeDetail';
import CocktailDetail from './CocktailDetail';
import CocktailList from './CocktailList';
import Recipe from './Recipe';
import Search from './Search';
import Category from './CategoryPage';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/cocktail/:id" element={<CocktailDetail />} />
                <Route path="/cocktail" element={<CocktailList />} />
                <Route path="/recipe" element={<Recipe />} />
                <Route path="/category" element={<Category />} />
            </Routes>
        </div>
    );
}
