import { Link } from "react-router-dom"

export default function NavBar(){

    return(
        <nav>
    <ul>    
        <li>
        <Link to="/recipe">Meal</Link>
      </li>
      <li>
        <Link to="/">home</Link>
      </li>

      <li>
        <Link to="/cocktail">cocktail</Link>
      </li>
    </ul>
  </nav>
    )
}