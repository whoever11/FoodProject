import { Link } from "react-router-dom"

export default function NavBar(){

    return(
        <nav>
    <ul>
    <li>
        <Link to="/">home</Link>
      </li>
    <li>
        <Link to="/recipe">recipe</Link>
      </li>

      <li>
        <Link to="/ingradiant">ingradiant</Link>
      </li>
      <li>
        <Link to="/category">category</Link>
      </li>
      <li>
        <Link to="/cocktail">cocktail</Link>
      </li>
    </ul>
  </nav>
    )
}