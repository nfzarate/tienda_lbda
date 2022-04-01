import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {

  const bienvenida = "Bienvenido a la tienda online de la boutique del aroma"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={bienvenida}/>
    <ItemDetailContainer/>
    </>
  );
};

export default App;
