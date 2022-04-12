//Navigate
import { BrowserRouter,Routes,Route } from "react-router-dom";
//Componentes
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {Cart} from "./components/Cart";
import {Error} from "./components/Error";
import CustomProvider from './context/CartContext';

const App = () => {

  const bienvenida = "Bienvenido a la tienda online de la boutique del aroma"

  return (
    <>
    < BrowserRouter>

      <CustomProvider>

      <NavBar/>

      <Routes>

        <Route path="/" element={<ItemListContainer greeting={bienvenida}/>}/>
        <Route path="/categorias/:categoryId" element={<ItemListContainer greeting={bienvenida}/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="#" element={<Error/>}/>

      </Routes>

      </CustomProvider>
  
    </BrowserRouter>
    </>
  );
};

export default App;
