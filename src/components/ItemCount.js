import { useState } from "react";
import "../css/ItemCount.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCount = ({ stock, initial, onAdd }) => {
    
    
    const [contador,setContador] = useState(initial);

    const sumarItem = () =>{
        if (contador<stock){setContador(contador + 1)}
        }

    const restarItem = () =>{
        if (contador>initial) {setContador(contador - 1)}
    }

    const agregarAlCarrito = () => {
        if(contador<=stock){onAdd(contador)}
        
    }


  return (
    
      <div className="counterBox">
        <div className="counter">
          <button onClick={restarItem}><RemoveIcon fontSize="small" /></button>
          <div>{contador}</div>
          <button onClick={sumarItem}><AddIcon fontSize="small"/></button>
        </div>
        <button onClick={agregarAlCarrito} className="btnAddCart">Agregar al carrito</button>
      </div>
    
  );
  
};

export default ItemCount;
