import "../css/NavBar.css";
import ShoppingCartIcon from './CartWidget';

const NavBar = () => {
  return (
    <>
        <nav>
         <label>La boutique del aroma</label>
         <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda online</a></li>
            <li><a href="#">Quiénes Somos</a></li>
         </ul>
         <ShoppingCartIcon/>
        </nav>
    </>
  );
};

export default NavBar;
