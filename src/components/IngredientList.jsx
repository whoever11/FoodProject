import Ingredients from './Ingredients'
import { Link } from 'react-router-dom'


const IngredientList = (props) => {
   console.log(props.meals)


   if (!props.meals) {
       return <h3>Loading puhleeze wait</h3>
   } else {


       return (
           <div className="ingr-list">
               {
                   props.meals.map((meal) => (
                       <div className="ingred" key={meal.idIngredient}>
                           <Link to={`/ingredients/${meal.idIngredient}`}>
                               <h3>{meal.strIngredient}</h3>
                           </Link>
                           <p>{meal.strDescription}</p>


                       </div>
                   ))
               }
           </div>
   )
}


}


export default IngredientList