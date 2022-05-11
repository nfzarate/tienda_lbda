import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "../src/containers/ItemList/ItemListContainer";
import ItemDetailContainer from "../src/containers/ItemDetail/ItemDetailContainer";
import {Cart} from "../src/components/Cart/Cart";
import {Error} from "../src/components/Error/Error";
import CustomProvider from '../src/context/CartContext';
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {

  const bienvenida = "¡Bienvenido a la boutique del aroma!"

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
