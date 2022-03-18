import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  const bienvenida = "Bienvenido a la tienda online de la boutique del aroma"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={bienvenida}/>
    </>
  );
};

export default App;
