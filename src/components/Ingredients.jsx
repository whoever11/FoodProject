import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Ingredients = () => {
   const [ingredients, setIngredients] = useState(null);
   const navigate = useNavigate();


   useEffect(() => {
       const getIngredients = async () => {
           try {
               const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
               setIngredients(response.data.meals);
           } catch (error) {
               console.error('Error fetching ingredients:', error);
           }
       };


       getIngredients();
   }, []);


   return ingredients ? (
       <div className="ingredientstuff">
           <div className="ingredientstuff header">
               <h1>Ingredients</h1>
           </div>
           <div className="info-wrapper">
               {ingredients.map((ingredient) => (
                   <div key={ingredient.idIngredient}>
                       <h3>{ingredient.strIngredient}</h3>
                       <p>{ingredient.strDescription}</p>
                       <p>{ingredient.strType}</p>
                   </div>
               ))}
           </div>
           <button id="ingredient" onClick={() => navigate('/ingredients')}>
               Back
           </button>
       </div>
   ) : (
       <h2>Loading...</h2>
   );
};


export default Ingredients;