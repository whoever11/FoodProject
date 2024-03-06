import { Link } from "react-router-dom"

export default function NavBar(){

    return(
        <nav>
    <ul>   
       
        <Link to="/"> Home </Link>
       
        <Link to="/recipe">  Meal  </Link>
      
        <Link to="/search">  Search  </Link>
     
        <Link to="/cocktail">  cocktail  </Link>
  
    </ul>
  </nav>
    )
}