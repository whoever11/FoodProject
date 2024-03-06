import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipeDetail from './RecipeDetail';
import CocktailDetail from './CocktailDetail';
import CocktailList from './CocktailList';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/cocktail/:id" element={<CocktailDetail />} />
                <Route path="/cocktail" element={<CocktailList />} />
            </Routes>
        </div>
    );
}
