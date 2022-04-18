import "../css/NavBar.css";
import ShoppingCartIcon from './CartWidget';
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav>
        <Link to="/">
          <label>La boutique del aroma</label>
        </Link>

         <ul>
    
           <li><Link to="categorias/linea-Milano" key="1">Linea Milano</Link></li>
            <li><Link to="categorias/hogar" key="2">Hogar</Link></li>
            <li><Link to="categorias/automovil" key="3">Automóvil</Link></li>
         </ul>
         <Link to="/cart">
         <ShoppingCartIcon/>
         </Link>
        </nav>
    </>
  );
};

export default NavBar;
